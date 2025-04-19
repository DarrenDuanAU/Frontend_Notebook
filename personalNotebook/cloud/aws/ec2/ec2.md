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

- 前端（一个 Public IP）
- ALB（一个 Public IP-对外网，收到请求转发给后端）
- 后端（一个 Private IP 用于接受 ALB 的请求）
- 数据库（一个 Private IP 用于接受后端请求）

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

## 其他：

EC2 命名规则：

例如： m5.2xlarge

- m: instance class
- 5: generation(AWS improves them over time )
- 2xlarge: size with the instance class
