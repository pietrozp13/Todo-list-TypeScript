import React from "react";

interface TodoItemProps {
  todo: TodoInterface;
  setDone: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, setDone }) => {
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onChange={() => setDone(todo.id)} />
      <div style={{ textDecoration: todo.done ? "line-through" : undefined }}>
        {todo.text}
      </div>
    </div>
  );
};

export default TodoItem;
