# EC2

- EC2 实际上就是在网上租一个虚拟机（有不同的类型，不同的类型有不同的 CPU，Mem，Storage，Network, firewall, roles 等）

## EC2 的运行

EC2 User Data Script: 实际上是 EC2 的启动脚本，你可以在脚本中设置很多启动选项。

- 你可以做一切你想做的事情，例如安装程序，从网上下载文件，等等。
- 当然这个启动脚本中的内容越多，你的程序启动越慢。

## EC2 的分类（Instance type）

EC2 可以根据不同的 CPU，Mem，Storage，Network, firewall, roles 等配置的不同进行分类，例如

- General Purpose: 均衡类型：相对均衡的 compute & Memory & Networking （web app 等普通应用场景）
- Compute Optimized: 计算密集型（高性能 web app，高性能计算，机器学习等）
- Memory Optinized: 记忆密集型 (常常用来做数据相关工作，数据操作，数据分析，数据可视化等)
- Storage Optimized: 数据存储密集型（数据仓库，文件分发等）

## EC2 & Security Group

![alt text](https://github.com/DarrenDuanAU/Frontend_Notebook/blob/main/personalNotebook/cloud/aws/ec2/intro.png)

- Security Group 实际上是运行在 EC2 instance 的外面的，类似于一种防火墙
- EC2 instance 和 Security Group 的关系是 many-to-many 的关系 （一个 EC2 instance 可以有多个不同的 Security Group，一个 Security Group 也可以对应多个 EC2 instance），实际上 EC2 instance 和 Security Group 都是 AWS 的资源对象，他们可以被产生出来，可以通过配置，把它们关联起来（attach），这有点像组合关系。

案例 1:
Security Group 可以根据设置拦截特定要求的请求（比如 IP，授权规则等）：
![alt text](https://github.com/DarrenDuanAU/Frontend_Notebook/blob/main/personalNotebook/cloud/aws/ec2/example-1.png)

案例 2:
Security Group 可以根据设置来自其他 EC2 instance 的请求（比如一个 EC2 instance 的 Security Group 是 Security Group 1/Security Group 2，我们就允许它的请求进入，但是如果是 Security Group 3 就不让他进入）：
![alt text](https://github.com/DarrenDuanAU/Frontend_Notebook/blob/main/personalNotebook/cloud/aws/ec2/example-2.png)

- 默认情况下，拦截所有 inbound traffic，允许所有 outbound traffic。

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

Region（物理）📍
│
├── AZ a（物理）───┐
│ └── Subnet-A（虚拟）
├── AZ b（物理）───┐
│ └── Subnet-B（虚拟）
├── AZ c（物理）───┐
│ └── Subnet-C（虚拟）
└── VPC（逻辑网络，覆盖所有子网）

## 其他：

EC2 命名规则：

例如： m5.2xlarge

- m: instance class
- 5: generation(AWS improves them over time )
- 2xlarge: size with the instance class
