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

  return (
    <div className="bg-[#384454] font-poppins h-screen max-w-full">
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
        <link rel="icon" href="/images/logo.png" />
      </Helmet>
      <div className="flex justify-between flex-wrap items-center p-5">
        <div>
          <img src="/images/logo.png" className="w-16"/>
        </div>
        <h1 className="text-white text-4xl font-bold">Do It Today</h1>
        <div className="m-5 min-w-full"><TodoForm addTodo={addTodo} /></div>
      </div>
    </div>
  );
};

export default App;

/* 
  ajout  2 attributs date d'echeance + importance 
  diviser la list completed et pas completed

*/
