import React from "react";

export const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        onChange={handleTodoClick}
      />
      {todo.name}
    </div>
  );
};

export default Todo;
