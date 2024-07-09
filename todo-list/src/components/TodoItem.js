import axios from 'axios';
import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

const TodoItem = ({ todo, toggleItem,deleteTodo }) => {
  const [completed, setCompleted] = useState(todo.completed);

  const handleToggleCompleted = () => {
    const newCompleted = !completed
    setCompleted(newCompleted);
    axios
      .post(`http://localhost:8001/update-data`, { completed: newCompleted, id: todo.id })
      .then(() => console.log('success !!!'))
      .catch(() => console.log('error sending data !!!'));
  };

  return (
    <li className="flex justify-between items-start bg-white p-4 rounded-md shadow-md hover:opacity-80 hover:scale-[101%] hover:transition-all hover:ease-in">
      <div className="flex gap-3">
        <input
          type="checkbox"
          id={todo.id}
          name={todo.id}
          className="w-6 accent-green-600 cursor-pointer"
          checked={completed} 
          onClick={handleToggleCompleted}
        />
        <label htmlFor={todo.id}>{todo.description}</label>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-3xl text-red-600 hover:text-red-700"
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default TodoItem;