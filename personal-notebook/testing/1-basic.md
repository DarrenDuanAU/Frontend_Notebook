# Test

## basic

three different test:
- unit test (high wirte speed/high run speed/low code coverage)
- integration test (mid wirte speed/mid run speed/mid code coverage)
- end to end test (low wirte speed/low run speed/high code coverage)

code coverage !== code assurance

```bash
# initialize the project
npm init -y

# install the jest
npm --save-d jest

# change the script
test: "jest"
# or
test: "jest --coverage"
```

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
