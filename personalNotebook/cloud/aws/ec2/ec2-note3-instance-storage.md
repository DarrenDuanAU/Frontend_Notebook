# EBS (Elastic Block Store）) Volume

EBS（Elastic Block Store）Volume 是 AWS 提供的一种可持久化的块存储设备，可以挂载到 EC2 实例上，像硬盘一样使用。

- It's a network drive(i.e. not a physical drive)

  - It uses the network to communicate the instance, which means there might be a bit of latency
  - It can be detached from a EC2 instance and attached to another one quickly

- It's locked to Availability Zone (AZ)

  - An EBS Volume in us-east-l a can not be attached to us-east-l b
  - To move a volume across, you first need to snapshot it.

- Have a provisioned capacity (size in GBs, and IOPS)
  - You get billed for all the provisioned capacity
  - You can increase the capacity of the drive over time

一个 EC2 和 EBS 的关系是多对一，也就是说一个 EC2 可以挂在 1 个，2 个，3 个 EBS（也可不挂载），当然也可以创建一个 EBS 但是不挂载在 EC2 上。

## AMI (Amazon Machine Image)

AMI（Amazon Machine Image）= 亚马逊机器镜像
它是一个 EC2 实例的“启动模板”，包含了操作系统 + 软件环境 + 配置等内容。

我们通过 AMI 来生成一个 EC2 instance（EC2 虚拟机），真正需要运行的时候，我们启动的是 EC2 instance （EC2 实例）。在 docker 中也有类似概念，例如 Docker Image 生成 Docker Container，实际上我们运行的是 Docker Container，而 Docker Image 只是产生 Docker Container 的工具。

AMI 是 AWS 上 EC2 实例的“系统镜像模板”，所有实例的创建都必须基于某个 AMI。你可以使用官方的，也可以创建自己的，方便批量部署和环境复制。
