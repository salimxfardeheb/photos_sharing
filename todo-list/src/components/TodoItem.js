import React from "react";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="flex justify-between items-start bg-white p-4 rounded-md shadow-md">
      <span onClick={() => toggleComplete(todo.id)} className="flex gap-3">
        <input
          type="checkbox"
          className="w-6 accent-green-600 cursor-pointer"
        />
        {todo.text}
      </span>
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
