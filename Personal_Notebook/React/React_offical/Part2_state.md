# state的管理

1. 第一步，分析状态。要分析我们的app可以抽象出哪些state（在计算机科学中，你或许听过可处于多种“状态”之一的 “状态机”（state machine）），可以画出状态机图，不同的state，我们会展示不同的内容给user。
2. 第二步，了解触发机制。我们要了解是哪些情况触发了状态变化（一般有2种，第一种是人为触发，比如点击按钮、在表单中输入内容，或导航到链接；第二种是机器触发，比如网络请求得到反馈、定时器被触发，或加载一张图片）。

3. 第三步，优化state。分析列出的state，看看哪些state是可以优化的：
  1. 合并关联的 state。如果你总是同时更新两个或更多的 state 变量，请考虑将它们合并为一个单独的 state 变量。
  2. 避免互相矛盾的 state。当 state 结构中存在多个相互矛盾或“不一致”的 state 时，你就可能为此会留下隐患。应尽量避免这种情况。
  3. 避免冗余的 state。如果你能在渲染期间从组件的 props 或其现有的 state 变量中计算出一些信息，则不应将这些信息放入该组件的 state 中。
  4. 避免重复的 state。当同一数据在多个 state 变量之间或在多个嵌套对象中重复时，这会很难保持它们同步。应尽可能减少重复。
  5. 避免深度嵌套的 state。深度分层的 state 更新起来不是很方便。如果可能的话，最好以扁平化方式构建 state。


这些原则背后的目标是 ***使 state 易于更新而不引入错误***。从 state 中删除冗余和重复数据有助于确保所有部分保持同步。这类似于数据库工程师想要 “规范化”数据库结构，以减少出现错误的机会。用爱因斯坦的话说，***“让你的状态尽可能简单，但不要过于简单。***

### 例子1:
设置x，y来监控鼠标在页面上的位置
```js
const [x, setX] = useState(0);
const [y, setY] = useState(0);
```
如果某两个 state 变量总是一起变化，则将它们统一成一个 state 变量可能更好。这样你就不会忘记让它们始终保持同步
```js
const [position, setPosition] = useState({ x: 0, y: 0 });
```

### 例子2:
```js
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
//
const [isEmpty, setIsEmpty] = useState(true);
const [isTyping, setIsTyping] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [isError, setIsError] = useState(false);

```

这里我们可以把后半部分表示表单状态的 state 合并成为一个，以防止互相冲突。
```js
const [answer, setAnswer] = useState('');
const [error, setError] = useState(null);
const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

```

https://zh-hans.react.dev/learn/choosing-the-state-structure

# 更新函数

```js
import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 5);    //  number是当前的值，把number set到（当前的值+5）
        setNumber(n => n + 1);    //  n => n + 1 是更新函数，这个函数放到更新队列中，按次序更新
      }}>增加数字</button>
    </>
  )
}

```


# Reducer

```js
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, tasksDispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    tasksDispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    tasksDispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    tasksDispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>布拉格的行程安排</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('未知 action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: '参观卡夫卡博物馆', done: true},
  {id: 1, text: '看木偶戏', done: false},
  {id: 2, text: '打卡列侬墙', done: false}
];
```

为什么使用reducer？
reducer的主要目的就是为了减少组件内代码复杂度，减少缩紧，增加的代码可读性。
其实就是把原来在setState内的函数提出来了：
```js
const [tasks, setTasks ] = useState(initialTasks);
const [tasks, tasksDispatch] = useReducer(tasksReducer, initialTasks);
//把原来的 setTasks变为tasksReducer，并且把需要的参数传给他，目前的状态就是tasks，这个在设置的时候就传递了，所以只需要传这个函数的目的{type：'added'}，以及需要的组件内的参数{ id: nextId++, text: text, }

// function handleAddTask(text) {
//   tasksDispatch({
//     type: 'added',
//     id: nextId++,
//     text: text,
//   });
// }

```
