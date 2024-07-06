import React, { useState } from "react";
import { RiPlayListAddFill } from "react-icons/ri";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form className="flex gap-2">
      <input
        className="p-3 rounded-l-md focus:outline-blue-600"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add new task"
      />
      <button type="submit" className="text-xl text-white bg-blue-600 p-3 rounded-r-md hover:bg-white hover:text-blue-600" onClick={HandleSubmit}>
      <RiPlayListAddFill/>
      </button>
    </form>
  );
};
export default TodoForm;
