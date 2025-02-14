import React from 'react';
import { TodoList } from '../types/todo';

const TodoList: React.FC<TodoList> = ({TodoList}) => {
    return (
        <nav>
            <h2>Todo List Navigation</h2>
            {/* Add navigation items here */}
        </nav>
    );
};

export default TodoList;