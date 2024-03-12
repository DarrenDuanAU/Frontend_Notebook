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

  - 本质上说，Container是一种process，因为Container的设计是一种client-server的架构，这里的client就是container，而server就是操作系统的核心（kernel），windows的kennel是（windows和Linux），Linux的kernel是Linux，而Mac的kernel是Linux VM（因为Mac不提供container服务）。


## Docker如何工作？

在文件中添加一个Dockerfile，通过Dockerfile我们可以打包项目中的所有文件和环境要求来创建一个image，image可以在container中运行，我们也可以上传这个image到Docker Hub（类似于GitHub），这样只要有人可以下载我们的Docker image，他就可以在自己的的local device上面通过container运行相同的app了。

这大大简化了新加入的developer set up environment的时间，如果没有Docker，可以我们需要很长的Document，新加入的developer需要按照步骤一步一步的配置环境，一旦出错，可能都无法运行app。

Dockerfile中包含：
- A cut-time OS
- A runtime environment (eg Node)
- Application files
- Third-party libraries
- Environment variable


例子在hello-docker文件内：

- 我们先建个项目叫做hello-docker
- 然后在里面加入app.js（内有console.log("hello docker!");）
- 然后我们通过建一个Dockerfile，用这个Dockerfile来打包我们的项目
- 细节可以看hello-docker内的Dockerfile文件




