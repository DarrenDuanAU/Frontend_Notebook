
# 思考方式：像傻子一样写 React

## 从设计稿开始

## 第一步：将设计好的UI划分为组件层级

### 树状结构
以为P2为例：

自己划分：
- body:
  - pageBox
    - upperBox
    - lowerBox
      - left_lowerBox
      - right_lowerBox

这样划分有很大问题，主要问题 no readable

重新划分：

- 按照责任划分
- 你的 UI 中的每个组件应该只负责一个功能
- 熬的代码是符合人类思维方式的代码

```css
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('');
}
```

```jsx
const App = () => {
  <div className="container">
    <WeatherCard />
  </div>
}
```

```jsx
const WeatherCard = () => {
  <div className="container">
    <CurrentCity />
    <div>
      <OtherCities />
      <Forecast />
    </div>
  </div>
}
```


划分如下：

（把 redux，路由 隔离出来 写在入口文件index.js内）

- App 
  - WeatherCard 
    - CurrentCity 
      - Temperature 
      - Meta 
        - Humidity 
        - Wind 
      - Name 
    - OtherCities 
      - City[] 
        - Name 
        - Temperature 
        - WeatherIcon 
    - Forecast
      - DayOfWeek[] 
        - Name 
        - WeatherIcon 
        - Temperature


增加责任：

- App （渲染 App 样式，背景图片和布局）
  - WeatherCard （渲染 WeatherCard 样式，细节样式 + 布局）
    - CurrentCity （渲染 CityWeather 样式，背景图片和布局）
      - Temperature （渲染 Temperature 样式，细节样式）
      - Meta （渲染 Meta 样式，布局）
        - Humidity （渲染 Humidity 样式，细节样式）
        - Wind （渲染 Wind 样式，细节样式）
      - Name （渲染 Name 样式，细节样式）
    - OtherCities （渲染 OtherCities 样式，布局 + 统筹所有cities）
      - City[] （渲染 City 样式，布局）
        - Name （渲染 Name 样式，细节样式）
        - Temperature （渲染 Temperature 样式，细节样式）
        - WeatherIcon （渲染 WeatherIcon 样式，细节样式）
    - Forecast （渲染 Forecast 样式，布局和统筹所有 days of week）
      - DayOfWeek[] （渲染 DayOfWeek 样式，布局）
        - Name （渲染 Name 样式，细节样式） 
        - WeatherIcon （渲染 WeatherIcon 样式，细节样式）
        - Temperature（渲染 Temperature 样式，细节样式）



- temperature
- WeatherIcon
- Name
- Subsection (小组件的layout)

相同名称 或者 相同责任 的组件？
在划分组件的时候，出现了相同的名称 或者 相同的责任，说明这个组件**有可能**是一个通用组件，可以被复用。

## 第二步：使用 React 构建一个讲台版本

## 第三步：发现 UI 精简且完整的 State 表示

## 第四步： 验证 state 应该被放置在哪里

## 第五步： 添加反向数据流

# 个人笔记
- 学会看文档 React文档可以直接学：中文，英文的React都可以好好看看
- 查一下 React rudux
- 代码即文档 => **我们给 组件/function 起名的时候，就应该让没有接触过你代码的人一眼可以看懂你的代码**
- 我们应该用carmelCase 不用下划线分割word
- 大部分的if else/ 三元 / switch 都不应该存在，存在的时候就问一下自己，这是不是大脑的自然逻辑，如果不是就应该改一下 => **应该让没有接触过你代码的人一眼可以看懂你的代码**
- 如果我们把 component 分割的很好，代码可以更加简单，更易读
- component 分割就是把功能分割，装箱。 breakdown（把大的逻辑分割成为小的逻辑）/packaging（把小逻辑装箱）
