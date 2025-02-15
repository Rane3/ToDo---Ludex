import React from 'react';
import { FC } from 'react';
import { TodoItemProps } from '../types/todo';



const TodoItem: FC<TodoItemProps> = ({ todo, setCompleted, deleteTodo }) => {
    const handleCheckboxChange = () => {
        console.log(!todo.completed)
        setCompleted(todo.id, !todo.completed);
    };

    return (
        <div className="todo-item" key={todo.id}>
            <div className="checkbox-wrapper-31">
                <input
                    checked={todo.completed}
                    onChange={handleCheckboxChange}
                    type="checkbox"
                />
                <svg viewBox="0 0 35.6 35.6">
                    <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                    <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                    <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                </svg>
            </div>
           
            <span className='todo-item-text'>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} >X</button>
        </div>
    );
};

export default TodoItem;