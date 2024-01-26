# Test

## basic

test1:
```js
// sum.js
const sum = (a, b) => {
  return a + b
}

const logger = () => {
  console.log('logger')
}

module.exports = sum;
```

```js
// sum.test.js
const sum = require('./sum');

test('properly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
})
```

test2:

```js
// cloneArray.js
const cloneArray = (array) => {
  return [...array]
}

module.exports = cloneArray;
```

```js
// cloneArray.test.js
const cloneArray = require('./cloneArray');

test('properly clone array from input array', () => {
  let array = [1, 2, 3]
  expect(cloneArray(array)).toEqual(array);
})
```
