import React from 'react';
import { FC } from 'react';
import { Todo } from '../types/todo';
const TodoListNav = (text:string) :Todo => {
    return (
        <nav>
            <h2>Todo List Navigation</h2>
            {/* Add navigation items here */}
        </nav>
    );
};

export default TodoListNav;