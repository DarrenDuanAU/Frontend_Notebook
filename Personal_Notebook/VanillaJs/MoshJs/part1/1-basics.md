# BASICS

## what's node
- node is C++ program with V8(chrome browser engine), so we can run Js outside of browser


### Primitives/Value Types & Reference Type
- Primitives/Value Types
  - String
  - Number 
  - Boolean
  - undefined
  - null

- Reference Type
  - Object
  - Array
  - Function

### Dynamic Typing
在Js中，所有的variable的type都可以随时更改的，这就是说Js是Dynamic Typing的language，相对的例如C语言就是static Typing Language。

### Object
```js
// create a object
let person = {
  name: 'Mosh',
  age: 30
}

// Dot Notation
person.name = 'susan'
console.log(person) // output: { name: 'suan', age: 30 }

// Bracket Notation
person['name'] = 'lili'
console.log(person) // output: { name: 'lili', age: 30 }
```

### Arrays
```js
let colors = ['red','blue'];
colors[2] = 1;
console.log(colors);  // output: ['red','blue', 1];
console.log(typeof colors); //outout: object
console.log(colors.length); //outout: 3
//实际上 arrays也是一种object, 所以colors回直接自带很多种方法
```

### function

## Operator

### bitwise operator
```js
// 1 = 00000001
// 2 = 00000010
// R = 00000011
// A = 00000000

const R = 1 | 2;
console.log(R);

const A = 1 & 2;
console.log(A);
```
### Switch case

```js
let role = 'guest';

switch(role) {
  case 'guest':
    console.log('Guest User');
    break;
  case 'moderator':
    console.log('Moderator User');
    break;
  default:
    console.log('Unknown User');
}
```
## control flow

### do-while loop
```js
// 这是while loop
let i = 9;
while( i<= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
// 无output

// 相比于while loop，do-while loop不论while中的condition如何，都会对do内的程序执行一次：
let i = 9;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while( i<= 5);
// output: 9
```

### for-in loop
```js
const person = {
  name: 'Mosh',
  age: 30
}

for (let key in person)
  console.log(key, person[key])
// output: 
// name Mosh
// age 30


const colors = ['red', 'green', 'blue'];

for (let index in colors)
  console.log(index, colors[index]);
// output:
// 1 red
// 2 green
// 3 blue


// const person = {
//   name: 'Mosh',
//   age: 30
// }
// for (let k in person)
//   console.log(k, person[k])

// const colors = ['red', 'green', 'blue'];
// for (let i in colors)
//   console.log(i, colors[i]);

// 这里把key换成k，index换成i，output是不变的，也就是说只要是这种形式，object就是取的key，array就是取他的index。
```

### for-of loop
```js
// 类似的，我们用for-of loop可以逐个去取一个array中的值
const colors = ['red', 'green', 'blue'];

for (let color of colors)
  console.log(color);
```








