import axios from "axios";
import React, { useState } from "react";
import { RiPlayListAddFill } from "react-icons/ri";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue("");
      axios
        .post("http://localhost:8001/send-data", {task: value})
        .then(() => {
          console.log("success !");
        })
        .catch(() => {
          console.log("error sending data !");
        });
    }
  };

  return (
    <form className="flex md:gap-2 gap-1 h-1/5 max-w-full">
      <input
        className="md:p-3 p-2 rounded-l-md focus:outline-blue-600 w-fit"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="add new task"
      />
      <button
        type="submit"
        className="md:text-xl text-lg text-white bg-blue-600 p-3 rounded-r-md hover:bg-white hover:text-blue-600"
        onClick={handleSubmit}
      >
        <RiPlayListAddFill />
      </button>
    </form>
  );
};
export default TodoForm;
