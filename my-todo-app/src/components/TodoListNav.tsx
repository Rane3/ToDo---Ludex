import React from 'react';
import { TodoGroup } from '../types/todo';
import { FC } from 'react';
const ListNav: FC<TodoGroup> = (props) => {
    return (
        <nav>
            <h2>Todo List Navigation</h2>
            {/* Add navigation items here */}
        </nav>
    );
};

export default ListNav;