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
                <div className="add-task-input" >
                    <img className='item-icon'  src='/icons/send.png' alt='icon' />
                    <input type="text"
                        name="text" placeholder="Add Task"></input>
                </div>
            </div>

        </section>
    );
};

export default MainListView;