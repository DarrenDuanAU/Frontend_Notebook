# MIDDLE-LEVEL

## objects(more details)

### Factroy Function && Constructor Function
两种产生object的方法：
```js
// Factroy Function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  }
}

const circle1 = createCircle(1);
console.log(circle1)
// output: { radius: 1, draw: [Function: draw] }

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  }
}

const circle2 = new Circle(1);
console.log(circle2)
// output: Circle { radius: 1, draw: [Function (anonymous)] }

// 对比：
// Factory Function: 没有 instanceof 操作符。每个对象都是独立的实例。
// Constructor Function: 通过 instanceof 可以检查对象是否是特定构造函数的实例。

// Factory Functions 更灵活，因为它们只是返回一个对象，而不需要使用 new 关键字，也不涉及到 this 的问题。(因为创建的object互不相关，都是相互独立的object)
// Constructor Functions 在创建复杂对象、使用继承等方面更有用。

```


### Dynamic Nature of Objects

```js
const circle = {
  redius: 1
}
// 尽管这里circle是const，circle是一个object，我们可以随意添加或者删除这个obejct的属性。const指的是我们不能再给circle重新赋值。例如：
// circle = {}

circle.color = 'yellow';
circle.draw = function () {}

console.log(circle);
// output: { redius: 1, color: 'yellow', draw: [Function (anonymous)] }
delete circle.color;
delete circle.draw;

console.log(circle);
// output: { redius: 1 }
```