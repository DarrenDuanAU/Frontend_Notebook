# React 入门
https://reactjs.org/

- Declarative
- Component-Based


### Declarative 声明式

React make it painless to create interactive UIs. Design simple views for each state in your application, and react will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug (Mantainable).

- painless
- design
- efficiently update and render when data change
- more predictable and easier to debug

Readable, Maintainable, Reusable

### 命令式

JS就是命令式的代码，他更关心过程，而不是关心结果。

```js
document.querySelector("#resume-page").classList.add("page--active");
```
做产品我们更加关心结果，具体过程无法做到完美，过程就交给React.js去做，我们只关心过程就好了。

```js
//例如我们要把一个array内的所有item都成为原来的2倍。
arr = [1, 2, 3]
// we want arr === [2, 4, 6]

//面向过程的编程
for ( let i=0; i <arr.length; i++) {
  arr[i] = arr[i] * 2
}

//面向结果的编程
arr.map((item => * 2))
```

前端程序员面对问题，更应该问，我如果实现这个结果（有没有现成的工具给我用，可以直接实现结果）。

相比于前端程序员，我们关心2个问题：
- 动机 motivation （为什么我们要这么做？）
- 结果 result （我如何通过现成的工具实现这个结果？）