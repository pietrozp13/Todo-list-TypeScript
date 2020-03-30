import React, { useState } from "react";

import TodoItem from "./components/TodoItem";
import InputTodo from "./components/InputTodo";

interface Props {}

const App = (props: Props) => {
  const [todos, setTodos] = useState<TodoInterface[]>([]);

  const addTodo = (textParam: string) => {
    setTodos([
      ...todos,
      { text: textParam, done: false, id: todos.length + 1 }
    ]);
  };

  const setDone = (idParam: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === idParam) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To do list</h1>
      {todos.map(todo => {
        return <TodoItem setDone={setDone} todo={todo} />;
      })}
      <InputTodo addTodo={addTodo} />
    </div>
  );
};

export default App;
