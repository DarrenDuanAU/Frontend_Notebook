# React

//2023/06/05 Ally课
## Hooks
React的Hooks是一种React框架的功能，它们于React 16.8版本引入，用于让函数组件具有类组件的特性。Hooks允许您在不编写类的情况下使用状态和其他React功能。

常见的React Hooks有：
- useState
- useEffect
- useRef
.
.
.

Hooks 只能用于程序的第一层，不能用if，else包住。

## 如何避免不必要的rerander（渲染）
- useMemo，useCallback

## state 和props的区别
- state: mutable
- props: read only and immutable

## 数据传递
- 父传子：props
- 子传父：callback function
- 跨组件传递数据：context redux

state management

```javaScript
//主要用于静态页面
context API
//低配版的redux
usecontext + useReducer
//企业级
redux + react-redux
```

## Advantage of React
- virtual DOM
- Server side redering
- resuable component

## benefit of JSX
- 用JS写html

## HOC
a function that take a component and return a new component code reuse. hoc is pure function no side effect.

