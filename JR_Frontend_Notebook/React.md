好的代码有什么特点：
可读，可维护，可复用
Readable, Maintainable, Reusable

如何写出可读的代码：符合人类基本思维的代码，就是可读的代码
=> 人类的大脑不会做if else ，所以if else一定有问题的
=> 行业统一标准：SOLID，
=> 重点是：
1, Single Responsibility		单一职责
项目中，任何一块代码，都应该有且只有一个责任
2, Open/ Close			开关指责
在任何一块独立的责任代码中，都应该仅对我们希望更改的地方（接口）开放，且对逻辑的更改关闭
3, Dependency Injection 	依赖注入
在任何一块独立的责任代码中，如果有一部分数据是依赖数据，那么这个依赖应该是被注入进来的，而不是通过内部逻辑产生的

```Javascript
//Q1: calcuate the stops of the fights (meets SOLID requirments)


const flights = [{origin:'MEL', destination: 'CAN'},{origin:'MEL', destination: 'CAN'},{origin:'MEL', destination: 'CAN'}]
// const flights = [{origin:'MEL', destination: 'CAN'},{origin:'MEL', destination: 'CAN'}]
// const flights = [{origin:'MEL', destination: 'CAN'}]

const getStops = (flights) => {
  const numOfStops = flights.length - 1;
  const SPECIAL_CONDITION = {
    0: 'Direct',
    1: '1 stop',
    26: 'travel around the world'
  }
  return SPECIAL_CONDITION[numOfStops] || `${numOfStops} stops`
}
console.log(getStops(flights))
```Javascript

