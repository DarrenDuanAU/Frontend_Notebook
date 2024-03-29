# Object-oriented Programming (OOP)

- 在js中运用OOP方法

```js
// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw...')
    }
  }
}

const circle = createCircle(1);
circle.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('drawing....')
  }
}

const another = new Circle(1);
another.draw();
```
- 在js中function本质上也是一个object，并且function这个object有很多内置的方法：

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log('draw');
  }
}

Circle.call({}, 1);
//Circle.call({}, 1)本质上和 new Circle(1) 是一样的，因为在js内核里面，你用new Circle(1) 实际上就是调用了Circle.call({}, 1)，或者说是调用了object Circle的内置方法call()。
const another = new Circle(1);

```

- 在js中我们有2类type：
  - Value Types (Primitives):
    - Number
    - String
    - Boolean
    - Symbol
    - undefined
    - null
  - Reference Types (Objects):
    - Object
    - Function
    - Array
Value Types (Primitives)和Reference Types (Objects)有什么区别呢？ 
- Primitives are copied by their value
- Objects are copied by their reference

看下面的例子：

```js
// 例子 1：
let x = 10;
let y = x;  

x = 20;
console.log(x);   // x 和 y 是相互独立的
console.log(y); 
// output: 
// 20
// 10

// 例子 2：
let x = { value: 10}; //创建一个object，并让x指向这个object
let y = x;  // y指向和x一样的地址

x.value = 20; //所以实际上是更改了x指向地址的object的value值，所以y.value也会变化。
console.log(x.value);
console.log(y.value);
// output:
// 20
// 20
```
