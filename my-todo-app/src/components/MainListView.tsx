import React from 'react';
import { FC } from 'react';
import { TodoList } from '../types/todo';
import '../styles/MainViewStyles.css';
const MainListView: FC<TodoList> = (props) => {
    return (
        <section id='main-list-view'>
            <div id="main-view-top">

            </div>
            <div id="main-view-bottom">
            <input type="text"
               
                    name="text" className="add-task-input" placeholder="Add Task"></input>
            </div>
        </section>
    );
};

export default MainListView;