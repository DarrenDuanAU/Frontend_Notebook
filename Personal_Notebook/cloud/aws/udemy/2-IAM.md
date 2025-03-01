# IAM (Identity and Access Management)

### IAM Users & Groups

实际上你登录了 AWS，你就拥有了一个 root account，在这个 root account 内，你可以创建多个 user，你可以创建 group 然后把 user 放进去（一个 user 可以在一个组/多个组，也可以不属于任何组），一个 group 可以有一个 JSON 文档（permission 文件）来表示它的 permission 有哪些，那么在这个 group 中的 user 就有哪些 permission。

常见问题：

- 在登陆的时候就可以选，是登录 root account 还事登录 IAM user account，当登录 root account 会显示 account id，当登录 IAM user 的时候除了显示它所属的 root account 的 account id 还会显示 IAM user 的 name。
  ![alt text](https://github.com/DarrenDuanAU/Frontend_Notebook/blob/main/demo-images/aws-availability-zones.png)

### IAM Policies Structure

![alt text](https://github.com/DarrenDuanAU/Frontend_Notebook/blob/main/demo-images/aws-availability-zones.png)
