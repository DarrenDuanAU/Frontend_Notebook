# MED-LEVEL

## Function

```js
// Function Declaration
function walk() {
  console.log('walk');
}

// Anonymous Function Expression
let run = function () {
  console.log('run');
}

let move = run;
let go = walk;
move();   
go();     
// output: 
// run
// walk
```

### Hoisting

```js
// 我们不能在变量声明前使用这个变量。
run();

let run = function () {
  console.log('run');
}
// output:
// ReferenceError: Cannot access 'run' before initialization
```

```js
walk();

function walk() {
  console.log('walk');
}
// output:
// walk
```

为什么会这样，这种情况叫做 Hoisting，Hoisting的意思就是： 
Hoisting is the process of moving function declaration to the top of the file, and this is done automatically by javaScript.

```js
// 在hositing后，我们的例子会看起来像这样。
function walk() {
  console.log('walk');
}

walk();
// output:
// walk
```

### Arguments
```js
function sum(a,b) {
  console.log(`a and b are ${a}, ${b}`)
  let total = 0;
  for ( let value of arguments) {   //arguments 是function内的特殊object,他存储了这个function所有的arguments
    total += value;
  }
  return total;
}

console.log(sum(1,2,3,4,5));
//output:
// a and b are 1, 2
// 15
```

### Rest oprator

```js
function sum(discount, ...prices) {     //这里的price前面的"..."就是rest operator，因为和他在一起的arguments只能放在最后一个位置，所以叫rest。（虽然他跟spread operator长得一样）
  const total = prices.reduce((a, b) => a + b); //20+30+40
  return total * (1 - discount); //90 * 0.9 = 81
}

console.log(sum(0.1, 20, 30, 40));
//output: 81
```

### Default Parameters

```js
function interest(principal, rate = 3.5, years = 5 ) {  //这里的rate的的默认值是3.5，而years的默认值是5，当我们不传入rate和years的时候，我们就使用这个默认值
  return principal * rate / 100 * years;
}
console.log(interest(10000))；
// output:
// 1750
```

### Getters and Setters

```js
const person = {
  firstName: 'Mosh',
  lastName: 'Duan',
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

person.fullName = 'lili song is me?'    //实际上这里用了setter。我们用setter控制了外部如何改变object的方式。限制了how to set a value to a object
console.log(person.fullName);       //setter让我们可以更便捷的访问一个object，同时也控制了可以输出的内容。
// output:
// lili song
```

### Try and Catch

```js
const person = {
  firstName: 'Mosh',
  lastName: 'Duan',
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },
  set fullName(value) {
    if (typeof value !== 'string') {
      throw new Error('the value is not a string');
      // 当 throw new Error 语句执行时，会立即中断当前代码块的执行，并且控制流会转移到最近的异常处理块（例如 catch 块）或者调用堆栈的异常处理程序。因此，一旦 throw new Error 被执行，它之后的代码将不再被执行
    }
    const parts = value.split(' ');

    if (parts.length !== 2) {
      throw new Error('the value must have both first name and last name');
    }

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

try {
  person.fullName = '';
}
catch (e) {
  console.log(e.message);
}

console.log(person.fullName)
// output:
// the value must have both first name and last name
// Mosh Duan
```

### Local vs Global Scope

```js
{
  const value = 'x';
}
console.log(value);
// output:
// ReferenceError: value is not defined
```

```js
function test() {
  for (let i= 0; i < 3; i++) {
    console.log(i)
    // output: 
    // 1 
    // 2 
    // 3
  }
  console.log(i)  
  // output:
  //Error: Error: not
  //ReferenceError: i is not defined
}
test();
```

```js
const color = 'red';
// color is global variable
function test() {
  console.log(color);
  // output: red
}
test();
```

```js
const color = 'red';
function test() {
  const color = 'blue';
  // local variable will override the global one ( bad practice )
  console.log(color);
  // output: blue
}
test();
```
总结：在{}中的variable的scope只在其{}中。

```js
{
  const a = 'a';
  {
    const b = 'b';
    console.log(2, a)  
  }
  console.log(1,a)
}
console.log(0,a)

// output:
// 2 a
// 1 a
// console.log(0,a)
                 ^ 
//ReferenceError: a is not defined
```

### Let vs Var

```js
function start() {
  for ( var i = 0; i < 5; i++) {
    if(true) {
      var color = 'red';
    }
  }
  console.log(i);
  console.log(color);
}

// var => function-scoped
// ES6(ES2015): let, const => block-scoped
start();
// outout:
// 5
// red
```
所以尽量都用let和const，而不是用var，因为var会导致很多问题。


### This

THIS references the OBJECT that is executing the current function.

#### 基础理解
- 在一个obejct的method中使用this，这里this指的就是这个object。
- 在global中define的function中使用this，这里的this会指向window（如果在Node中就指向global），实际上window和global都是javaScript自带的object。

```js
// 在object中
const video = {
  title: 'a',
  play() {
    console.log(this);
  }
}

video.play();
// output: 
// { title: 'a', play: [Function: play] }
```

```js
// 在object中(通过constructor function创建的object)
function Video (title) {
  this.title = title;
  this.play = function() {
    console.log(this);
  }
}

const video = new Video('b');
video.play();
// output: 
// Video { title: 'b', play: [Function (anonymous)] }
```

```js
function printThis() {
  console.log(this);
}
printThis();

// 注释：如果在chrome浏览器中运行上面的code，会给出window object。
// output:
/* <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
} */
```

#### 更多的问题

object内使用callback function的时候，this的指向问题：
```js
// 问题
const video = {
  title: 'a',
  tags: ['x', 'y', 'z'],
  showTags() {
    this.tags.forEach(function(tag){
      console.log(this.title, tag);   //这个是foreach内的一个callback function，这里的this指向window（以在浏览器环境为例），所以this.tags是不存在的（undefined）。
    });
  }
}

video.showTags();
// output:
// undefined x
// undefined y
// undefined z
```


以下是几种解决方案，最推荐最后一种，是ES6后才出现的最新的解决方案：
```js
//方案1；
const video = {
  title: 'a',
  tags: ['x', 'y', 'z'],
  showTags() {
    this.tags.forEach(function(tag){
      console.log(this.title, tag);  
    },this);    //foreach，允许你传入第二个argument，这个argument可以改变callback function内this的指向，这行里的this还是指向video的，所以我们把它pass进去，callback function内的this就指向video了。
  }
}

video.showTags();
// output:
// a x
// a y
// a z
```

```js
// 方案2:
const video = {
  title: 'a',
  tags: ['x', 'y', 'z'],
  showTags() {
    this.tags.forEach(function(tag){
      console.log(this.title, tag);  
    }.bind(this));    
  }
}

video.showTags();
// output:
// a x
// a y
// a z
```

```js
// 方案3:
const video = {
  title: 'a',
  tags: ['x', 'y', 'z'],
  showTags() {
    const self = this;
    this.tags.forEach(function(tag){
      console.log(self.title, tag);  
    });    
  }
}

video.showTags();
// output:
// a x
// a y
// a z
```

```js
// 方案4（最推荐的解决方案，也最简洁）；
const video = {
  title: 'a',
  tags: ['x', 'y', 'z'],
  showTags() {
    this.tags.forEach(tag => {
      console.log(this.title, tag);  
    });    
  }
}

video.showTags();
// output:
// a x
// a y
// a z
```