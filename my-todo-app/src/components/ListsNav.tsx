import React, { FC, useState } from 'react';
import { TodoList } from '../types/todo';

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
        <nav className='list-nav'>
            <h2>Todo List Navigation</h2>
            <ul>
                {toDoLists.map((list) => ( 
                    <li key={list.id}>{list.name}</li>
                ))}
            </ul>
            <input
                type='text'
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
                placeholder='New list name'
            />
            <button onClick={addTodoList}>Add Empty List</button>
        </nav>
    );
};

export default ListNav;
