# Frontend related questions
## Terms

### React
React(aka React.js or ReactJS) is an open-source front-end JavaScript library that is used for building composable user interfaces, especially for single-page applications.

### JSX
JSX（JavaScript XML）是一种 JavaScript 语法扩展，通常与 React 库一起使用，用于描述 React 组件的结构。JSX 允许开发者在 JavaScript 代码中编写类似 HTML 的结构，这样可以更直观地定义 UI 组件的结构。

### Function Declaration（函数声明）和 Function Expression（函数表达式）
Function Declaration（函数声明）和 Function Expression（函数表达式）是 JavaScript 中定义函数的两种方式，它们的区别在于：
1, 语法定义：
- 函数声明：通过 function 关键字直接声明函数，不需要赋值给变量。
- 函数表达式：将函数赋值给一个变量，或者作为对象属性或数组元素等赋值。

```js
// 函数声明
function add(a, b) {
  return a + b;
}

// 函数表达式
var subtract = function(a, b) {
  return a - b;
};
```

2, 变量提升：
- 函数声明会被提升到作用域的顶部，因此可以在函数声明之前调用它。
- 函数表达式不会被提升，必须在赋值后才能调用。

```js
// 函数声明的函数名在函数外部和内部都可见
console.log(multiply(2, 3)); // 输出 6
function multiply(a, b) {
  return a * b;
}

// 函数表达式的函数名只在函数内部可见
console.log(divide(6, 2)); // TypeError: divide is not a function
var divide = function divide(a, b) {
  return a / b;
};
```