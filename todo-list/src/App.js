import React,{useState} from 'react'
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
    <div className='App'>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
    </div>
  )
}

export default App
