import React,{useState} from 'react'
import { Helmet } from 'react-helmet';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, text: 'learn react', completed : false },
    {id: 2, text: 'build a todo app', completed : false }
  ]) 
  const addTodo = text => { 
    const newTodos = [...todos, {id: Date.now(), text , completed: false}]
    setTodos(newTodos)
  }

  const toggleComplete = id => {
    const newTodos = todos.map(todo => todo.id === id ? {...todo, completed : !todo.completed} : todo)
    setTodos(newTodos)
  }

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  return (
    <div className='flex flex-col justify-center items-center space-y-12 m-20 bg-green-500 p-10'>
       <Helmet>
        <title>To-Do List App</title>
        <meta name="description" content="To-Do List application built with React" />
        
        
      </Helmet>
      <h1 className='text-5xl font-semibold'>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
