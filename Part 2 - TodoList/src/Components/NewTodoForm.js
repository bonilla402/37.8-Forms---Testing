import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css';

const INITIAL_STATE = { task: '' };

function NewTodoForm({ addTodo }) {
    
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        
        if (formData.task.trim() === '') {
            // Prevent adding a todo if the task is empty
            return;
        }
        
        addTodo({ id: uuidv4(), ...formData });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">New Todo:</label>
            <input
                type="text"
                id="task"
                name="task"
                value={formData.task}
                onChange={handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
