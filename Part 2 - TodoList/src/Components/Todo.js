import React from 'react';
import './Todo.css';

function Todo({ todo, removeTodo }) {
    const handleRemove = () => {
        removeTodo(todo.id);
    };

    return (
        <div className="todo">
            <span>{todo.task}</span>
            <button onClick={handleRemove}>X</button>
        </div>
    );
}

export default Todo;
