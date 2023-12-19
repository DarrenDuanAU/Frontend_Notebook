# Redux

## Functional Programming

programming paradigms
- Functional
- Object-oriented
- Procedural
- Event-driven

### Javascript Fresher

```js
//在js中function非常灵活，非常多用途 (in javaScript, functions are first class citizens)。它可以assign给一个variable，他可以当参数pass给一个function
function sayHello() {
  return "Hello World";
}

//情况一：assign to a variable
let fn = sayHello;
fn()
sayHello()
//这里的fn()和sayHello()都是一样的可以return出来"Hello World"


//情况二：这里我们把sayHallo当作方法传给greet
function greet(fnMessage) {
  console.log(fnMessage());
}
greet(sayHello)

//情况三：我们可以把function 作为return出的值
function sayHello() {
  return function() {
    return "Hello World"
  }
}

let fn = sayHello(); //注意我们这里call了这个sayHello的fucntion，和情况一不同，这里fn就会变为我们在sayHello中的匿名函数。
let message = fn();

```

### Currying

```js 
trim = str => str.trim();
wrap = type => str => `<${type}>${str}<${type}>`;
toLowerCase = str => str.toLowerCase();

//这里我们用pipe，让input可以被trim, toLowerCase, wrap("div") 逐个处理（上一个的return是下一个的入参），trim, toLowerCase, wrap("div") 现在都是以str为input的function。
transform = pipe(trim, toLowerCase, wrap("div"));
le.log(transform(input));
```

### pure function
- No random values
- No current date/time
- No global state (DOM, files, db, etc)


