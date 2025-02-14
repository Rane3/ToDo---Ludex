import React, { FC, useState } from 'react';
import { TodoList } from '../types/todo';
import  '../styles/NavBarStyles.css';

type TodoListProps = {
    toDoLists: TodoList[];
    setToDoLists: React.Dispatch<React.SetStateAction<TodoList[]>>;
};

const ListNav: FC<TodoListProps> = ({ toDoLists, setToDoLists }) => {
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

                <ul>
                    {toDoLists.map((list) => (
                        <li key={list.id}>{list.name}</li>
                    ))}
                </ul>
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
