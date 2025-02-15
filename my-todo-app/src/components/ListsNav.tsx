import React, { FC, useState } from 'react';
import { TodoList, TodoListProps } from '../types/todo';
import '../styles/NavBarStyles.css';


const ListNav: FC<TodoListProps> = ({ todoLists, setSelectedList, setToDoLists }) => {
    const [newListName, setNewListName] = useState('');

    const addTodoList = () => {
        if (!newListName.trim()) return; // Prevent adding empty list names

        const newList = {
            id: crypto.randomUUID(),
            name: newListName,
            todoItems: [],
        };

        setToDoLists((prevLists) => [...prevLists, newList]);

        setNewListName('');
    };

    return (
        <nav id='list-nav'>
            <div id='nav-top'>
                {todoLists.map((list) => (
                    <div className='list-item' key={list.id}>
                        <img className='item-icon' src='/icons/homework.png' alt='icon' />
                        <button onClick={() => setSelectedList(list)} className='list-item-button'>{list.name}</button>
                    </div>
                ))}
            </div>
            <div id='nav-bottom'>
                <input type="text"
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)} name="text" className="custom-input" placeholder="Add List"></input>
                <button className='add-button' onClick={addTodoList}>+</button>
            </div>
        </nav>
    );
};

export default ListNav;
