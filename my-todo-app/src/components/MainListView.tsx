import React from 'react';
import { FC, useState, useEffect } from 'react';
import { TodoList } from '../types/todo';
import TodoItem from '../components/TodoItem.tsx';

import '../styles/MainViewStyles.css';
import TodoFilters from './TodoFilters.tsx';

const MainListView: FC<TodoList> = ({ todoItems, name }) => {
    const [currentTodo, setCurrentTodo] = useState('');
    const [currentTodoItems, setcurrentTodoItems] = useState(todoItems);
    const [currentFilter, setFilter] = useState('View All');
    useEffect(() => {
        setcurrentTodoItems(todoItems);
    }, [todoItems]);

    const setCompleted = (id: string, completed: boolean) => {
        setcurrentTodoItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, completed } : item
            )
        );
    };
    const addTodoItem = () => {
        if (!currentTodo.trim()) return;

        const newTodo = {
            id: crypto.randomUUID(),
            text: currentTodo,
            completed: false,
        };

        setcurrentTodoItems((prevLists) => [...prevLists, newTodo]);

    };
    const filteredTodos = currentTodoItems.filter((todo) => {
        if (currentFilter === 'Completed') return todo.completed;
        if (currentFilter === 'Pending') return !todo.completed;
        return true;
    });
    const fillerCount = 20 - filteredTodos.length;
    const fillerItems = Array(fillerCount).fill(null);

    return (
        <section id='main-list-view'>
            <div id="main-view-top">
                <div id="main-view-top-filters">
                    <div id='list-header'>{name}</div>
                        <TodoFilters currentFilter={currentFilter} setFilter={setFilter} /> 
                </div>
                {filteredTodos.map((todo) => (
       
                    <TodoItem key={todo.id} todo={todo} setCompleted={setCompleted} />
                ))}
                {fillerItems.map((_, index) => (
                    <div key={`filler-${index}`} className='filler-item'></div>
                ))}
            </div>
            <div id="main-view-bottom">
                <div className="add-task-input">
                    <button onClick={addTodoItem} id="invisible-button"><img className='item-icon' src='/icons/send.png' alt='icon' /></button>
                    <input value={currentTodo} type="text" name="text" onChange={(e) => setCurrentTodo(e.target.value)} placeholder="Add Task"></input>
                </div>
            </div>
        </section>
    );
};

export default MainListView;