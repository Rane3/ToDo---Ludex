import React, { FC, useEffect, useState } from 'react';
import { SelectedTodoList, TodoListProps } from '../types/todo';
import { useLocalStorage } from '../utils/localStorage.tsx'; 
import '../styles/NavBarStyles.css';

/**
 * A component to display and manage the Todo Lists in the navigation bar.
 * Allows the user to add a new list and select a list from the available ones.
 */
const ListNav: FC<TodoListProps> = ({ todoLists, setSelectedList, setToDoLists }) => {

    const [newListName, setNewListName] = useState('');
    const [storedTodoLists, setStoredTodoLists] = useLocalStorage<SelectedTodoList[]>('todoLists', todoLists);

    const addTodoList = () => {
        if (!newListName.trim()) return; 
        const newList = {
            id: crypto.randomUUID(),
            name: newListName,
            todoItems: [],
        };
        setStoredTodoLists((prevLists) => [...prevLists, newList]);
        setNewListName(''); 
    };
    useEffect(() => {
        setToDoLists(storedTodoLists);
    }, [storedTodoLists, setToDoLists]);

    return (
        <nav id='list-nav'>
            <div id='nav-top'>
                {storedTodoLists.map((list) => (
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
