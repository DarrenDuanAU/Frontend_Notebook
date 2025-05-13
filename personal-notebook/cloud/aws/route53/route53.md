# AWS Route 53 简介

## 什么是 Route 53？

AWS Route 53 是一项可扩展且高可用的域名系统（DNS）Web 服务，主要用于：

- 域名注册
- DNS 解析（将域名映射到 IP 地址）
- 健康检查和故障转移
- 全球流量路由策略

---

## 核心功能

### 1. 域名注册

- 可通过 Route 53 注册和管理域名。
- 支持自动 DNS 配置。

### 2. DNS 解析

- 支持多种记录类型：A、AAAA、CNAME、MX、TXT、NS、SRV 等。
- 快速、可靠、低延迟的 DNS 查询服务。

### 3. 健康检查与自动故障转移

- 定期检查资源（如 EC2、ELB）的健康状态。
- 结合 DNS 策略实现故障转移。

### 4. 流量路由策略

- 简单路由（Simple Routing）
- 加权路由（Weighted Routing）
- 地理位置路由（Geolocation）
- 地理邻近路由（Geoproximity）
- 延迟路由（Latency-based Routing）
- 多值回答路由（Multivalue Answer）

---

## 常见用途

- 将自定义域名绑定到 AWS 服务（如 S3、CloudFront、ELB）
- 实现全球负载均衡
- 提升网站可用性和容错能力

---

## 与其他服务集成

- **EC2 / ELB**：自动创建 DNS 记录并支持故障转移。
- **S3 静态网站托管**：绑定自定义域名。
- **CloudFront**：加速全球访问并通过 Route 53 提供域名解析。
