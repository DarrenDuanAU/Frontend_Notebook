console.log('start')

let x = 0;
if ( true ){
  setTimeout(() => {
    x = 1;
  }, 0)
  if ( x === 1) {
    console.log('x === 1')
  }
}
setTimeout(() => {
  console.log('setTimeout 0 ssc, test1')
}, 0)
setTimeout(() => {
  console.log('setTimeout 0 ssc, test2')
}, 0)

setTimeout(() => {
  console.log('setTimeout 2 ssc, test1')
}, 2000)

setTimeout(() => {
  console.log('setTimeout 2 ssc, test2')
}, 2000)

function test() {
  console.log('the function')
}

test();
console.log('finished')


