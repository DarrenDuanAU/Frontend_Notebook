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
