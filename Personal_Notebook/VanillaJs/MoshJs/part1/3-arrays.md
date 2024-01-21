# MED-LEVEL

## Arrays

### Add elements
```js
const numbers = [3, 4];
numbers.push(5, 6);
numbers.unshift(1, 2);
console.log(numbers);

numbers.splice(2, 1, 'a','b');  // 从index为2的地方删除1个值，然后添加'a'和'b'
console.log(numbers)
// output:
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 'a', 'b', 4, 5, 6]
```

### Find elements (Primitives Types)
```js
const numbers = [1, 2, 3, 1, 4];

//indexOf return 从左到右最先发现的index
console.log(numbers.indexOf('1'));  // output: -1
console.log(numbers.indexOf(1));    // output: 0
console.log(numbers.lastIndexOf(1));  // output: 3

console.log(numbers.includes(1)); // output: true
```

### Find elements (Reference Types)

```js
const courses = [
  { id: 1, name : 'a'},
  { id: 2, name : 'b'},
];

console.log(courses.indexOf({ id: 1, name : 'a'}));
console.log(courses.includes({ id: 1, name : 'a'}));
// 因为上面入参的object是重新创建的，和courses中的object不是同一个object，所以无法找到，我们只能通过find这种方法来找。

const result = courses.find(course => {
  return course.name === 'a';
})
console.log(result);

const resultIndex = courses.findIndex(course => {
  return course.name === 'a';
})

console.log(resultIndex);
// output:
// -1
// false
// { id: 1, name: 'a' }
// 0
```

### Arrow function

```js
// 把上面例子中的 function转化为更简洁的arrow function
const courses = [
  { id: 1, name : 'a'},
  { id: 2, name : 'b'},
];

const result = courses.find(course => course.name === 'a')
console.log(result);
```

### Remove elements

```js
const numbers =[1, 2, 3, 4];

// End
const last = numbers.pop();

//Begining
const first = numbers.shift();

//Middle
numbers.splice(2,1)
```

### Emptying an arrays

```js
// Solution 1：
// 这个不会清空其他的reference，例如variable：another
let numbers = [1, 2, 3, 4];
let another = numbers;
numbers = [];
console.log(numbers);
console.log(another);
// output: 
// []
// [ 1, 2, 3, 4 ]
```

```js
// Solution 2:
let numbers = [1, 2, 3, 4];
let another = numbers;
numbers.length = 0;

console.log(numbers);
console.log(another);
// output: 
// []
// []

```

```js
// Solution 3:
let numbers = [1, 2, 3, 4];
let another = numbers;
numbers.splice(0, numbers.length);

console.log(numbers);
console.log(another);
// output: 
// []
// []
```

### Combining and slicing arrays

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

const sliced = combined.slice(2,4);

// concat 和 slice 方法都不会影响原来的arrays
console.log(first);
console.log(second);
console.log(combined);
console.log(sliced);
// output:
// [ 1, 2, 3 ]
// [ 4, 5, 6 ]
// [ 1, 2, 3, 4, 5, 6 ]
// [ 3, 4 ]
```

```js
// 如果element是 primitives ，实际上是copy的value，但是如果 elements是 reference形式，我们copy的就是reference （意味着，如果改动新的array会影响原来的array）
const first = [{id: 1}];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);


combined[0].id = 10;

console.log(combined);
console.log(first);
// output:
// [ { id: 1 }, 4, 5, 6 ]
// [ { id: 10 }, 4, 5, 6 ]
// [ { id: 10 } ]
```

### Spread operator

```js
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second, 'b'];
const copy = [...combined];
```

### Lterating an array

```js
const numbers = [1, 2, 3];

for (let index in numbers) {
  console.log(index)
}

for (let number of numbers) {
  console.log(number)
}

numbers.forEach( (number, index) => console.log(index, number));

```

### Testing the elements

```js
const numbers = [1, 2, 3];

const allPositive = numbers.every( number => number > 0);
console.log(allPositive);
// output:
// true
```

```js
const numbers = [1, -1, 2, 3];

const allPositive = numbers.some( number => number > 0);
console.log(allPositive);
// output:
// true
```

### Filtering an array

```js
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter( n => n > 0);
console.log(numbers);
console.log(filtered);
// output:
// [ 1, -1, 2, 3 ]
// [ 1, 2, 3 ]
```

### Mapping an array

因为filter和map都会return一个新的array出来，所以他们是chainable的，我们可以连续写。具体如下：
```js
const numbers = [1, -1, 2, 3];

const items = numbers
  .filter( n => n > 0)
  .map(n =>({ value: n}))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(items);
// output:
// [ 2, 3 ]
```

### Reducing an array

```js
const numbers = [1, -1, 2, 3];

// a = 0 c = 1 => a = 1
// a = 1 c = -1 => a = 0
// a = 0 c = 2 => a = 2
// a = 2 c = 3 => a =5
const initialValue = 0;
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, initialValue);

console.log(sum)
// output:
// 5
```


```js
// 如果我们不设initialValue, initialValue 就是 第一个值， currentValue从第二个值累加。
const numbers = [1, -1, 2, 3];

// a = 1 c = -1 => a = 0
// a = 0 c = 2 => a = 2
// a = 2 c = 3 => a =5
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum)
// output:
// 5
```