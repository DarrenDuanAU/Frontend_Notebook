# Framework

Framework is tool to help developer to have end to end experience fo the project development.

# different between React, Angular, Vue

React is a library is web and native user interfaces
Angular & Vue are framework 

### Create React App

- Less to Learn
  - create based-on webpack, Babel, ESLint
    - ESLint： ESLint可以规定代码风格和标准，保证一个team的风格都是一致的。
- Only One Dependency
- No Lock-In

### 前端性能 accessibility

前端的性能，我们说的更多的时候是说的是用户体验的性能，核心web指标，不太是说运算性能。
eSSENTIAL assessment，让残章人士也可以有很好的体验。（例如：我们需要用<Button>Refund</Button>，
而不是<div>Refund<div>，避免残障人士（视障人士）也可以正常使用网站）

- 和UI不同，UI更多的针对普通用户，accessibility主要是针对需要帮助的群体（残障人士）
- 面试非常有用
- 通读并背诵 Airbnb JavaScript Style Guide(入门圣经) https://github.com/airbnb/javascript
- 参考 Google JavaScript Style Guide(很多时候和Airbnb的是不同的，甚至相反的答案，可以看到事物的两面性)

### 个人笔记
- 可以看不同大公司的code，看以及模仿专业人士的code是提高的很好方法
- Interpretive Language （解释型语言，PHP，Ruby，Python，Javascript）/ Compiled Language （编译型语言：例如 C，C++，Go）
- 培养自己看文档来解决问题的能力：
  - 文档是非常可靠的，很多问题都是靠文档解决的，stackoverflow可以用，但是只是前期，中后期就用不上了。要想路走的远，就要培养自己看文档的能力。大后期可能需要看源码才能解决。
  - 如何解决问题：graduate （看视频视频） => junior (stackoverflow + google) => mid (文档docs) => senior （文档/github issues/源码）
- package.json可以了解一个项目的大致结构


```json
//package.json 
//create-react-app
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/user-event": "^13.5.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-router-dom": "^6.10.0",
    "react-scripts": "5.0.1",
    "uuid": "^9.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",   //本地生成环境 wWbpackDevServer
    "build": "react-scripts build",   //开发环境打包 Webpack + Babel
    "test": "react-scripts test",     //暴露配置文件
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx",
    "coverage": "npm run test -- --watchAll=false --coverage"
  },
  "eslintConfig": { //代码规范
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": { //浏览器兼容声明（只是一个声明，并不是有检查功能)
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@testing-library/react": "^12.1.5",
    "cypress": "^12.10.0",
    "eslint": "^8.26.0",
    "eslint-config-standard": "^17.0.0",
    "eslint-plugin-jest": "^27.1.3",
    "eslint-plugin-n": "^15.3.0",
    "eslint-plugin-promise": "^6.1.1",
    "eslint-plugin-react": "^7.31.10"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    "transformIgnorePatterns": [
      "node_modules/(?!axios)"
    ]
  }
}
```

