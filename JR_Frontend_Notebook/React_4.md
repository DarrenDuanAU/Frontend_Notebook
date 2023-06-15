### 组件的拆分

根据什么拆分组件：
- 责任： 渲染责任
- 复用

### React如何传递参数

例如我们有Navbar，我们需要把router的参数和，text参数传给 NavbarItem。

在Navbar中

```javascript
import './Navbar.css';
import NavbarItem form'./NavbarItem';

function Navbar() {
  return (
    <div class='navbar'>
      <NavbarItem to='/home' text='Home'/>
      <NavbarItem to='/resume' text='Resume'/>
      <NavbarItem to='./services' text='Service'/>
      <NavbarItem to='/blog' text='Blog'/>
      <NavbarItem to='/contact' text='Contact'/>
    </div>
  )
}
export default Navbar;
```

在NavbarItem中

```javascript
import css from './NavbarItem.css'

function NavbarItem(props) {  //这里的to 和 text 都会当作对象props传入NavbarItem内
  return (
    <a class='navbar_item' href={props.to}>{props.text}</a>
  )
}
export default NavbarItem;

//JSX 给予了在JavaScript 写HTML的能力，相应的仍然保留着在HTML中写Javascript的能力
//在 JSX 中，所有以 < 开头的语法，默认是 HTML， 在相应的 HTML 中，所有以 { 开头的语法，默认为 JavaScript
```

- 如何在Junior时期，提升自己
  - 好的代码写三遍
  - 自我怀疑 => 自我否定 => 学习 => 自我确认（推翻旧我，创造新我的过程）
  - 保证自己的代码是自己的代码，理解自己的代码，评价自己的代码

可以优化我们的Navbar的代码 => 我们使用的重复代码 => 为了可读可维护可复用 => 优化如下：


```javascript
import './Navbar.css';
import NavbarItem form'./NavbarItem';

//map 遍历数组，拿到数组中的每一个元素，然后对每个元素进行处理（通过callback function），最后返回一个新的数组

//CMS: Content Management System (课后查查看)

const ITEMS = [
  {to: "/home", text: "Home"},
  {to: "/resume", text: "Resume"},
  {to: "/service", text: "Service"},
  {to: "/blog", text: "Blog"},
  {to: "/contact", text: "Contact"},
]

// React 保留了AngularJS 的优点，同时解决了性能问题
// 在前端环境中，性能瓶颈是 DOM 元素的操作，而不是 Javascript的运算
// 绘制 DOM （Document Object Model）的代价是昂贵的
// 这个过程就叫做 协调 Reconciliation

// JS 性能很好，DOM 性能很慢
// Component 的变化 => Virtual DOM => 比较新的 VDOM 和上一个 VDOM（这个比较的过程叫做Reconciliation）=> 只更新需要更新的 DOM => =>DOM的变化

//我们把text写在了 <>{text}<> 中间，目的是写成HTML like的格式 => 更加 readable，maintainable，reusable

function Navbar () {
  return (
    <div className='navbar'>
      {ITEMS.map(({to, text}) => (
        <NavbarItem to={to}>
          {text}
        <NavbarItem>
      ))}
    </div>
   
  )
}

```
所以我们NavbarItem也要改

```javascript
import css from './NavbarItem.css'

function NavbarItem({
  to,
  children
}) {  //所有在<>{text}<>中间传入的参数text，我们在React中就是children。
    <a class='navbar_item' href={to}>{children}</a>
  )
}
export default NavbarItem;

```

个人感受：
- 不用做很多项目，每个项目好好打磨，根据readable，maintainable，reusable和SOLID的方向，不断challenge自己的code，就会有所提升。项目不在多，在于个人的思考和不断提升代码质量。






