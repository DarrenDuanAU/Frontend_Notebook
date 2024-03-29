好的代码有什么特点：
- 可读，Readable
- 可维护，Maintainable
- 可复用, Reusable

如何写出可读的代码：符合人类基本思维的代码，就是可读的代码
=> 人类的大脑不会做if else ，所以if else一定有问题的
=> 行业统一标准：SOLID，
=> 重点是：
1. Single Responsibility		单一职责原则
项目中，任何一块代码，都应该有且只有一个责任
2.  Open-closed principle			开闭原则
在任何一块独立的责任代码中，都应该仅对我们希望更改的地方（接口）开放，且对逻辑的更改关闭
3. Liskov substitution principle    里氏替换原则
所有引用基类的地方必须能够替换为其派生类，而不引起系统错误。换句话说，派生类应该能够完全替代其基类。
4. Interface segregation principle    接口隔离原则
不应该强迫客户端依赖于其不使用的接口。一个类不应该强制实现它用不到的接口，应该将接口细分为更小的、更具体的接口，以避免不必要的依赖。
5. Dependency Injection 	依赖注入
在任何一块独立的责任代码中，如果有一部分数据是依赖数据，那么这个依赖应该是被注入进来的，而不是通过内部逻辑产生的

2道题目：
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
```

```Javascript
//Q2: develop a function which can easily caluate the personal tex 

//写法1:

// const TAX_TABLE_2023 = [
//   {min: 0, max: 18_200, base: 0, rate: 0},
//   {min: 18_201, max: 37_000, base: 0, rate: 0.19},
//   {min: 37_001, max: 90_000, base: 3572,rate: 0.325},
//   {min: 90_001, max:180_000, base: 20797 ,rate: 0.37},
//   {min: 180_001, max: Number.POSITIVE_INFINITY, base: 54096, rate: 0.45}
// ]
// let taxRow;
// const calcuateTax = (income, taxTable) => {
//   for (let i = 0; i < taxTable.length; i++) {
//     if(income > taxTable[i].min && income <= taxTable[i].max) {
//       taxRow = taxTable[i];
//     }
//   }

//   const {min, base, rate} = taxRow;
//   return base + (income - min) * rate;
// }

// console.log(calcuateTax(200_000,TAX_TABLE_2023));

//写法2:

const TAX_TABLE_2023 = [
  {min: 0, max: 18_200, base: 0, rate: 0},
  {min: 18_201, max: 37_000, base: 0, rate: 0.19},
  {min: 37_001, max: 90_000, base: 3572,rate: 0.325},
  {min: 90_001, max:180_000, base: 20797 ,rate: 0.37},
  {min: 180_001, max: Number.POSITIVE_INFINITY, base: 54096, rate: 0.45}
]

const calcuateTax = (income, taxTable) => {
  const { min, base, rate } = taxTable.find(taxRow => income <= taxRow.max && income > taxRow.min)
  return base + (income - min) * rate;
}

console.log(calcuateTax(200_000,TAX_TABLE_2023));
```
