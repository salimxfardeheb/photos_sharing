import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/data")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = (description) => {
    const newTodos = [
      ...todos,
      { id: Date.now(), description, completed: false },
    ];
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    axios
      .post("http://localhost:8001/delete-data", { id })
      .then(() => console.log("deleting ..."))
      .catch(() => console.log("error deliting"));
  };
  const classee = "bg-gradient-to-tl from-teal-600 via-50% to-cyan-500"

  return (
    <div className="flex flex-col items-center space-y-12 bg-[#384454] min-h-screen p-10 font-poppins">
      <Helmet>
        <title>To-Do List App</title>
        <meta
          name="description"
          content="To-Do List application built with React"
        />
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/logo.png"/>
      </Helmet>
      <div className="flex p-4 w-full space-x-5 justify-between items-center shadow-md rounded-3xl">
        <div className="max-w-fit"><img src="/images/logo.png" className="w-32"/></div>
      <h1 className="text-7xl font-bold text-white">DO IT TODAY !</h1>
      <TodoForm addTodo={addTodo} />
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
