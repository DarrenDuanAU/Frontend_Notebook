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

在文件中添加一个Dockerfile，通过Dockerfile我们可以打包项目中的所有文件和环境要求打包成一个image，image可以在container中运行，我们也可以上传这个image到Docker Hub（类似于GitHub），这样只要有人可以下载我们的Docker image，他就可以在本地通过container运行相同的app了。

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


### image和container的区别
 
**Image**:
- 在Docker中，一个镜像（image）是一个轻量级、独立的可执行软件包，它包含了运行应用程序所需的所有内容：代码、运行时、库、环境变量和配置文件等。Docker镜像是由文件系统快照和一系列的参数构成，这些参数描述了如何运行容器。镜像是用于创建Docker容器的模板。可以将镜像看作是一个应用程序的快照，你可以将它部署到任何支持Docker的环境中，而不需要担心环境差异或依赖关系。在Docker中，镜像通常由一个或多个层（layers）组成，每个层都包含了一些文件系统的更改或额外的配置。当你构建一个新的镜像时，Docker会将这些层叠加在一起，从而构成最终的镜像。

**Container**:
在 Docker 中，容器（container）是一种轻量级、独立的可执行软件包，它是 Docker 镜像的运行实例。容器可以被快速部署、运行和停止，提供了一种隔离的执行环境，使得应用程序可以在相对独立的环境中运行，而不会受到宿主系统或其他容器的影响。

容器是基于 Docker 镜像创建的，每个容器都具有自己的文件系统、网络、进程空间等。容器之间是相互隔离的，但又可以共享宿主系统的资源。这种隔离性使得容器成为了一种理想的解决方案，可以实现应用程序的快速部署、弹性扩展和资源隔离。

通过 Docker Engine（Docker 守护进程）管理和运行容器，你可以使用 Docker CLI（命令行界面）来创建、启动、停止、删除和管理容器。容器化技术的兴起使得应用程序的开发、测试和部署变得更加灵活、高效和可移植。

### 多容器问题

如果前端，后端，数据库是否都可以容器化？
- 可以

如果全部容器化后如何互相通信：
- **Docker 网络**：Docker 提供了网络功能，可以创建自定义的网络来连接不同的容器。你可以使用 Docker 命令行工具或 Docker Compose 来创建自定义网络，并将容器连接到该网络上。这样，连接到同一个网络的容器之间就可以通过容器名称进行通信，而不需要暴露端口到主机上。

- **端口映射**：你可以将容器的端口映射到主机上的端口，从而允许外部服务通过主机的端口访问容器内部的服务。这种方式适用于需要对外提供服务的场景，例如将 Web 服务器的端口映射到主机的 80 端口，允许外部用户通过主机的 IP 地址访问 Web 服务。（1，映射后，协议不会改变，只改变端口号，例如mongodb的默认端口号是：mongodb://localhost:27017，如果我们通过docker run -d -p 27018:27017 --name mongodb mongo:latest 做映射，映射后，这个容器在主机的端口号变为mongodb://localhost:27018，而不是https://localhost:27017）

- **环境变量**：你可以使用环境变量来传递配置信息和参数给容器。例如，你可以在启动容器时通过环境变量来指定数据库的连接地址和端口，以便后端容器可以连接到数据库容器。

- **服务发现**：在容器编排工具（如 Docker Compose、Kubernetes 等）中，通常会提供服务发现功能，用于自动发现和注册容器中运行的服务。通过服务发现功能，你可以轻松地在容器之间进行通信，而不需要手动配置连接信息。

总的来说，容器之间的通信可以通过网络、端口映射、环境变量和服务发现等方式来实现。具体选择哪种方式取决于你的应用程序的架构和需求。

#### Docker Compose

Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具。它允许你使用一个单独的文件来配置应用程序的服务，并通过简单的命令来启动、停止和管理这些服务

文件结构：

project/
├── frontend/
│   ├── Dockerfile
│   ├── ...
├── backend/
│   ├── Dockerfile
│   ├── ...
├── docker-compose.yml
└── ...

```Dockerfile
# 前端 Dockerfile
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

```Dockerfile
# 后端 Dockerfile
FROM node:12-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
```

```yaml
# docker-compose
version: '3.8'
services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    depends_on:
      - mongodb

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    depends_on:
      - mongodb

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
```

在根文件使用以下命令，就会启动前端、后端和数据库的容器，并且它们可以相互通信：
```bash
docker-compose up -d
```
