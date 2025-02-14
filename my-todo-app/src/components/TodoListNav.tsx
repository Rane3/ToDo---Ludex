import React from 'react';
import { TodoList } from '../types/todo';

const TodoListNav: React.FC<TodoList> = (props) => {
    return (
        <nav>
            <h2>Todo List Navigation</h2>
            {/* Add navigation items here */}
        </nav>
    );
};

export default TodoListNav;