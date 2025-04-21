# Private vs Public IP (IPv4)

example:

- IPv4: 1.160.10.240
- IPv6: 1900:4545:3:200:f8ff:fe21:67cf

IPv4 is still the most common format used online.
IPv6 is newer and solves problems for internet of Things(IoT).
![alt text](https://github.com/DarrenDuanAU/Frontend_Notebook/blob/main/personalNotebook/cloud/aws/ec2/ip.png)
![alt text](https://github.com/DarrenDuanAU/Frontend_Notebook/blob/main/personalNotebook/cloud/aws/ec2/ip-2.png)

举例说明 IP 在 aws 中的应用：

例如一个前端+后端+数据库，前后端分离的经典架构。
前端有一个 public IP，被部署在一个 Public 子网 A。
后端和数据库部署在一个 Private 子网 B，后端和数据库通过 Private IP 通信。
外网通过 Application Load Balancer 负载均衡器 （ALB）来访问后端。

| 子网名称         | 子网用途   | 路由表名称     | 路由规则                                                              |
| ---------------- | ---------- | -------------- | --------------------------------------------------------------------- |
| Public Subnet    | ALB + 前端 | `Public-RT`    | - `10.0.0.0/16` → `local`<br>- `0.0.0.0/0` → `Internet Gateway (IGW)` |
| Private Subnet A | 后端服务   | `Private-RT-A` | - `10.0.0.0/16` → `local`<br>- `0.0.0.0/0` → `NAT Gateway`（可选）    |
| Private Subnet B | 数据库     | `Private-RT-B` | - `10.0.0.0/16` → `local`（❌ 不配置出网）                            |

💡 补充说明

- Internet Gateway（IGW）

  - 附加在 VPC 上
  - 必须存在，才允许 Public 子网中的资源访问或被访问于公网

- NAT Gateway

  - 通常部署在 Public 子网中
  - 允许 Private 子网中的实例访问外网（比如拉取依赖、发 API 请求），但不允许外部主动连接它们
  - 比如你部署的后端服务可能要访问 Stripe、S3 等外部服务

- local 路由
  - 是 VPC 默认创建的，表示子网之间互通
  - 所有子网都默认有 10.0.0.0/16 → local 这条规则

## 名次解释

物理层面概念：

- Region 区域
  - 是 AWS 的物理地理区域，代表一个城市或国家级别的 AWS 数据中心集群，例如澳洲悉尼有一个数据 aws 数据中心集群，悉尼就是一个 aws region，代号 ap-southeast-2。
  - 一个 Region 通常包含多个 Availability Zones（AZ）。
- Availability Zone（AZ）可用区

  - 是同一个 Region 内物理隔离的独立数据中心或数据中心组，在一个区域 Region 内通常有 3 个 AZ 可用区，例如 ap-southeast-2a，ap-southeast-2b，ap-southeast-2c，就是悉尼区 ap-southeast-2 的 3 个可用区
  - 这些 AZ 彼此供电/冷却/网络完全独立，但通过高速连接实现低延迟通信
  - AZ 是实现高可用部署的核心单位。

- Partition 分区（在 Placement Group 中）
  - 是 AZ 内部的更小的硬件分组 —— 通常对应一个或一组物理机架（rack）。每个 Partition 有自己独立的电源、网络、硬件资源，与其他 Partition 保证物理隔离。在一个 Partition Placement Group 中，你最多可以有 7 个 Partition（默认），每个 Partition 可以部署一组实例。

虚拟层面概念：

- Virtual Private Cloud(VPC) 虚拟私有云
  - 是你在 AWS 上创建的逻辑隔离的私有网络环境。
  - 你可以自定义 IP 范围（如 10.0.0.0/16），并在其中创建子网、绑定安全组、配置路由等。
  - 一个 VPC 必须部署在一个 Region 内，不能跨 Region，但可以跨多个 AZ。
  - VPC 是逻辑虚拟层面的资源，但与 Region（物理）绑定。
- Subnet 子网（一个子网只能在一个 AZ 中）
  - 是 VPC 中的一个小网段（例如 10.0.1.0/24），表示你对 IP 空间的进一步划分。
  - 你通常会按功能和可用区划分子网：例如：1，Public 子网（放 ALB/前端。 2，Private 子网（放后端/数据库）
  - 一个子网只能位于一个 AZ 内。
  - Subnet 是虚拟资源，但必须指定在某个 AZ（物理）中。

```bash
Region（物理）📍
│
├── AZ a（物理）───┐
│                └── Subnet-A（虚拟）
├── AZ b（物理）───┐
│                └── Subnet-B（虚拟）
├── AZ c（物理）───┐
│                └── Subnet-C（虚拟）
└──-------------- VPC（逻辑网络，覆盖所有子网）
```

## Placement Groups

AWS 提供的一种机制，用于控制多个 EC2 实例在底层物理硬件上的部署方式，以实现特定目标：高性能、低延迟、或高可用性。

- Cluster: 所有实例被部署在同一个 AZ 内、尽可能靠近的物理主机上。
  - 优点：1，非常低的网络延迟，2，非常高的网络吞吐量（特别适合实例间频繁通信）
  - 缺点：1，不太容错（如果集群所在硬件挂了，整个服务都可能受影响）
  - 💡 适合：高性能计算（HPC）、大规模训练任务、分布式内存数据库等
- Spread: 每个实例都部署在不同的底层物理主机/机架上，甚至不同 AZ。
  - 优点：高容错能力，任何一台主机故障不会影响其他实例
  - 限制：在同一个 AZ 中最多放 7 个实例
  - 💡 适合：前端 Web 节点、高可用主机、主备数据库等
- Partition: 你定义分区数量（比如 3 个分区），AWS 会把实例均匀分布到不同的分区（每个分区使用独立硬件）。如果一个分区出故障，其他分区不受影响。适合需要节点分区逻辑的分布式系统。
  - 💡 适合：Kafka、Hadoop、Cassandra、Elasticsearch 等分布式服务
