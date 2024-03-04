# Unit-test

```js
// Todo.js
import React from 'react'

const Todo = ({
  todo
}) => {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return (
    <div data-testid={`todo-${id}`}>{ text }</div>
  )
}

export default Todo;
```

```js
// Todo.test.js
import { render, screen, cleanup } from "@testing-library/react";
import Todo from '../Todo';
import renderer from 'react-test-renderer';

afterEach(() => {
  cleanup();
})

test('should reder non-completed todo',() => {
  const todo = { id: 1, title: 'wash dishes', completed: false, }
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash dishes');

  const innerHTML = todoElement.innerHTML;
  expect(innerHTML).not.toContain('<strike>');
})

test('should reder completed todo',() => {
  const todo = { id: 2, title: 'wash car', completed: true, }
  render(<Todo todo={todo}/>);
  const todoElement = screen.getByTestId('todo-2');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('wash car');

  const innerHTML = todoElement.innerHTML;
  expect(innerHTML).toContain('<strike>');
})

test('matches snapshot!', () => {
  const todo = { id: 1, title: 'wash dishes', completed: false, };
  const tree = renderer.create(<Todo todo={todo}/>).toJSON();
  expect(tree).toMatchSnapshot();
})

// output:
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   1 passed, 1 total
// Time:        0.41 s, estimated 1 s

```