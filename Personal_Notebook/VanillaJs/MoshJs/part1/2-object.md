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

### Objects are reference type

```js
// 示例1
let x = 10;
// 把 10 存储在 x 内。
let y = x;
// 把 x 存储的数据复制到 y 中。
x = 20;

console.log('x',x);
console.log('y',y);
// output:
// x 20
// y 10

```

```js
// 示例2
let x = {value: 10}
// 实际上这里的 { value = 10 } 存储在一个地方，而x实际上存储了{ value = 10 } 这个object的地址
let y = x;
// 让 y 也存储同一个地址
// 用 let y = {...x}; 可以避免这个问题

x.value = 20;
// 我们改变 x 指向的object的value，实质上也改变了y.value， 因为 y 和 x 指向同一个位置。

console.log('x',x);
console.log('y',y);
// output: 
// x { value: 20 }
// y { value: 20 }
```

总结： 
primitive（示例1） are copied by their value
objective（示例2） are copied by their reference

多两个例子：

```js
let number = 10;

function increase(number) {
  number++;
}
increase(number);
console.log(number);
//output: 10

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
//实际上pass进去的是{ value: 10 }这个object的地址
console.log(obj);
// output: { value: 11 }
```

```js
let x = [0, 1];
let y = x;
// 也是copy的地址
// 也可以通过 let y = [...x]; 完成copy数据

y[0] = 5;

console.log('x',x)
console.log('y',y)
// output: 
// x [ 5, 1 ]
// y [ 5, 1 ]
```
### Add and delete properties

```js
function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('draw');
  }
}

const circle = new Circle(10);

//Add a property

circle.location = { x: 1 };

const propertyName = 'center location';
circle[propertyName] = { x: 1};

console.log(circle);
// output: 
// Circle {
//   radius: 10,
//   draw: [Function (anonymous)],
//   location: { x: 1 },
//   'center location': { x: 1 }
// }

delete circle.location;
console.log(circle);
// output: 
// Circle {
//   radius: 10,
//   draw: [Function (anonymous)],
//   'center location': { x: 1 }
// }
```


### Enumerating Properties of an Object

```js
const circle = {
  redius: 1,
  draw() {
    console.log('draw');
  }
}

// 多种获得object的key的方法
for (let key in circle)
  console.log(key, circle[key]);

for (let key of Object.keys(circle))
  console.log(key);

for (let entry of Object.entries(circle))
  console.log(entry);

if ('color' in circle) console.log('yes');
```

### templete literals

```js
const name = 'John';

const message = 
`Hi ${name},

Thank you for joining my mailing list.

Regards,
Mosh`;

// output:
// `Hi John,

// Thank you for joining my mailing list.

// Regards,
// Mosh

//用templete literals可以让代码内容和输出内容格式一致（空格，换行都存在），并且还可以动态添加内容，例如名字（John）。
```