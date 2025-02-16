import React, { FC, useEffect, useState } from 'react';
import { SelectedTodoList, TodoListProps } from '../types/todo';
import { useLocalStorage } from '../utils/localStorage.tsx';
import '../styles/NavBarStyles.css';

/**
 * A component to display and manage the Todo Lists in the navigation bar.
 * Allows the user to add a new list and select a list from the available ones.
 */
const ListNav: FC<TodoListProps> = ({ todoLists, setSelectedList, setToDoLists }) => {
    const [theme, setTheme] = useState<"light" | "dark">(() => {
        return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    });
    const [newListName, setNewListName] = useState('');
    const [storedTodoLists, setStoredTodoLists] = useLocalStorage<SelectedTodoList[]>('todoLists', todoLists);
    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme((document.documentElement.getAttribute("theme") as "light" | "dark") || "dark");
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => observer.disconnect();
    }, []);
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
                {storedTodoLists.map((list,index) => (
                    <div  data-aos="fade-right"    data-aos-delay={150 * index} className='list-item' key={list.id}>
                        <img
                            className='item-icon'
                            src={theme === "light" ? '/icons/light-list-icon.png' : '/icons/dark-list-icon.png'}
                            alt='icon'
                        />
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
