import React from 'react';

import { Todo } from '../types/todo';
const TodoListNav: React.FC<Todo> = ({props}) => {
    return (
        <nav>
            <h2>Todo List Navigation</h2>
            {/* Add navigation items here */}
        </nav>
    );
};

export default TodoListNav;