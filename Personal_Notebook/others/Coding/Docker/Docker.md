# Docker

## Container 

Docker是一种Container，因为不同的app可能用不同的version的语言/技术，例如app1用node 9和mongo 3， app2 用 node 14和 mongo 4， 如果在同一个环境中我们无法同时运行这些，所以我们需要运行使用docker，docker使用containerization技术，让这些app可以同时在分割的容器（container）中运行。
Docker helps consistently build, run and ship our applications.

## Container vs Virtual Machine

- virtual machine: 我们可以通过用Hypervisors在一个硬件（例如：mac）上，创建多个虚拟机（virtual Machine）。
  - Hypervisors有： VirtualBox, VMware, Hyper-v(windows only)
  - 多个virtual machine，可以运行在同一个硬件（例如：mac）上，每个VM可以运行不同的app（不同app对环境要求不同）。比如我们可以在mac上安装macOS，同时安装windows，实际上也是虚拟机技术，当然，在不同的操作系统下可以运行不同的app。
  - VM的问题：
    - 每个VM需要 full-blown OS
    - 启动缓慢
    - resource intensive

  - Container解决了这个问题，
    - Container 可以分隔开的运行不同的app
    - 轻量级，每个container不是完整的操作系统
    - 不同的container共享一个操作系统
    - 启动特别快
    - 需要特别少的硬件资源

    
