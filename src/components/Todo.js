import React, { useState } from 'react'

function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
        <div className="todo" style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>x</button>
            </div>
        </div>
    )
}

export function TodoForm({ addTodo }) {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        addTodo(value)
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add Todo"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    )
}


export default Todo