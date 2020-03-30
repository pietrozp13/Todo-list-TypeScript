import React, { useState } from "react";

interface InputTodoProps {
  addTodo: (todoText: string) => void;
}

const InputTodo: React.FC<InputTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    if (text.length > 0) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div>
      <input onChange={handleInput} value={text} />
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default InputTodo;
