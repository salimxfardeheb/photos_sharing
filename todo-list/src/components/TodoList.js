import React from "react";
import TodoItem from "./TodoItem"

const TodoList = ({ todos, toggleComplete, deleteTodo}) => {
    return (
        <ul className="w-full flex flex-col gap-4">
            {todos.map(todo => (
                <TodoItem 
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList