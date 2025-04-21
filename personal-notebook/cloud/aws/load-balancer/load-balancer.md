## Scalability（可扩张性） & High Availability （可用性）

可扩展性：
Scalability means that an application / system can handle greater loads by adapting.

- There are two kinds of scalability
  - Vertical Scalability
  - Horizontal Scalability ( = elasticity)

假设我们有一个 call centre，一个初级接线员可以 1 分钟接待 5 个人，一个高级接线员一分钟可以接待 10 个人。当我们刚开始的时候用的是一个初级接线员，当打入的电话太多，我们用一个高级接线员代替原来的初级接线员，这就是 Vertical Scalability，如果我们多请一个初级的接线员（变为 2 个接线员，这就是 Horizontal Scalability。

可用性：
如果我们的 call centre 有 2 个部分（每个部分都有很多接线员），一个在悉尼，一个在墨尔本，这样的话，如果一旦墨尔本部分的办公室停电/停网，我仍然有悉尼的部分在运行，这样我的 call centre 实际上比单一的 call centre 有更高的 可用性（Availability）。
