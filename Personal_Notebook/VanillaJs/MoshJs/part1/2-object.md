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
// 也可以通过 let y = [...x]; 完成copy数据，如果是这种方法copy的话，相对于x，y也是一个独立的array

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
circle[propertyName] = { x: 1 };

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
// output:
// redius 1
// draw [Function: draw]

for (let key of Object.keys(circle))
  console.log(key);
// output:
// redius
// draw

for (let entry of Object.entries(circle))
  console.log(entry);
// output:
// [ 'redius', 1 ]
// [ 'draw', [Function: draw] ]

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

### Abstraction
- Hide the details
- Show the essentials

### Private Properties and Methods

```js
function Circle(radius) {
  // radius is a PUBLIC value
  this.radius = radius;

  // here the 'defaultLocation' is a PRIVATE object
  let defaultLocation = { x: 0, y: 0 };
 
  // computeOptimumLocation() is a PRIVATE function
  let computeOptimumLocation = function(factor) {
    // ...
  }

  // draw() is a PUBLIC method
  this.draw =function() {
    computeOptimumLocation(0.1);
    // defaultLocation
    // this.radius

    console.log('draw');
  }
}

const circle = new Circle(10);
circle.draw();
console.log(`the original radius: ${circle.radius}`);
circle.radius = 1;
console.log(`the new radius: ${circle.radius}`);
// output:
// draw
// the original radius: 10
// the new radius: 1
```


### Getter and Setter

```js
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
 
  let computeOptimumLocation = function(factor) {
    // ...
  }
  
  this.draw =function() {
    console.log('draw', defaultLocation);
  }
  Object.defineProperty(this, 'defaultLocation', {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || ! value.y) {
        throw new Error('invalid location.');
      }
      defaultLocation = value;
    }
  })
}

const circle = new Circle(10);
circle.draw();
circle.defaultLocation = { x: 1, y: 1 };
circle.draw();
// output:
// draw { x: 0, y: 0 }
// draw { x: 1, y: 1 }
```

## 课后自己补充的笔记：

### Other way to make object

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

// 使用类创建对象
const myAnimal = new Animal("My Animal");
console.log(myAnimal.name); // 输出: My Animal
myAnimal.makeSound(); // 输出: Some generic sound


class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // 输出: Buddy
console.log(myDog.breed); // 输出: Golden Retriever
myDog.makeSound(); // 输出: Woof! Woof!
```


### 箭头函数与function有一定区别

```js
// 例子1:
function Animal (name) {
  this.name = 'this animal ' + name 
  this.makeSound = function() {
    console.log('animal make sound!', this.name)
  }
}
const animal1 = new Animal('cat');
console.log(animal1.name);
animal1.makeSound();
```

```js
// 例子2:
const Animal = (name) => {
  this.name = 'this animal ' + name 
  this.makeSound = function() {
    console.log('animal make sound!', this.name)
  }
}
const animal2 = new Animal('cat');
console.log(animal2.name);
animal2.makeSound();
```

在JavaScript中，使用函数构造器（function constructor）来创建类是一种常见的模式。在你的第一个例子中，使用了函数构造器来创建一个名为Animal的类。函数构造器内部使用了this关键字，这允许你通过new关键字调用该函数，创建一个新的实例，并将属性和方法添加到这个实例上。这是传统的JavaScript类的创建方式。

在你的第二个例子中，使用了箭头函数来创建一个名为Animal的类。箭头函数有一个重要的特性，即它们没有自己的this上下文，而是继承自外围作用域。这就是为什么在箭头函数内部使用this时，它指向的是外部的this，而不是新创建的实例。

因此，当你使用箭头函数时，无法通过new关键字来调用它并创建一个类的实例。箭头函数不适用于创建类，因为它们的this行为与传统的构造函数不同。

如果你想使用箭头函数来创建类，你可以考虑使用ES6的class语法，它提供了更清晰、更易读的类定义方式。以下是一个使用class语法的例子：

```js
class Animal {
  constructor(name) {
    this.name = 'this animal ' + name;
  }

  makeSound() {
    console.log('animal make sound!', this.name);
  }
}

const myAnimal = new Animal('Example');
myAnimal.makeSound();
```