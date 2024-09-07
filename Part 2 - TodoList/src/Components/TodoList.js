import React, { useState } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <div className="todo-list">
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
                ))}
            </div>
        </div>
    );
}

export default TodoList;
