import React from 'react'

const TodoItem = ({ todo, toggleComplete, deleteTodo}) => {
  return (
    <li>
      <span style={{textDecoration: todo.completed ? 'line-trough' : 'none'}}
      onClick={() => toggleComplete(todo.id)}>
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>delete</button>
      </span>
    </li>
  )
}

export default TodoItem
