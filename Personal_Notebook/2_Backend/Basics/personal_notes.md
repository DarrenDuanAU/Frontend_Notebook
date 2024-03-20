# Personal Notes

1, 不论在Nest.js中，.NET MVC，或者 Prisma ORM中，后端的大概框架都差不多。都包含了Model，Controller，Service，Module（Nest中有，其他暂时不知道）。
- Model：（为了不想写SQL代码，各个语言和框架都想要用class来mapping出来一个table/collection，这样就能减轻后端程序员的负担，相对容易的操作数据库。
- Controller：主要责任是会HTTP的访问进行管理，接到怎样的信息，通过怎样的方法（可能包含数据库操作，和业务逻辑），最后给到client端什么内容。
- Service：刚刚在Controller中提到的“方法”，实际上都打包在Service文件中，这样是为了更好的组织代码，减轻耦合。
- Module：在Nest.js中，Model，Controller，Service都根据业务逻辑中的内容，具体抽象并打包为一个一个的module，这样可以更好的维护代码。

