import React from 'react';

const TodoItem = React.memo(({ todo, onToggle }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

export default TodoItem;
