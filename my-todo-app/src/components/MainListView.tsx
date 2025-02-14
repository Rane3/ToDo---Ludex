import React from 'react';
import { FC } from 'react';
import { TodoList } from '../types/todo';

const MainListView:FC<TodoList> = (props) => {
    return (
        <nav>
            <h2>Todo List</h2> 
            {/* Add navigation items here */}
        </nav>
    );
};

export default MainListView;