import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const HandleSubmit = e => {
        e.preventDefault()
        if (value.trim()){
            addTodo(value);
            setValue('');
        }
    }
  return (
    <form>
        <input
        type='text'
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder='add new task'
        />
        <button type='submit'>add</button>
    </form>
  )
}

export default TodoForm
