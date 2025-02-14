import React from 'react';
import { TodoList } from '../types/todo';

const TodoList: React.FC<TodoList> = ({props}) => {
    return (
        <nav>
            <h2>Todo List</h2>
            {/* Add navigation items here */}
        </nav>
    );
};

export default TodoList;