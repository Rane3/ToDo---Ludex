import React from 'react';
import { FC,useState } from 'react';
import { TodoList } from '../types/todo';
import TodoItem from '../components/TodoItem.tsx';
import '../styles/MainViewStyles.css';

const MainListView: FC<TodoList> = (props) => {
   
    const [todoItems, setTodoItems] = useState(props.todoItems);

    const setCompleted = (id: string, completed: boolean) => {
        setTodoItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, completed } : item
            )
        );
    };
    const fillerCount = 20 - props.todoItems.length;
    const fillerItems = Array(fillerCount).fill(null);

    return (
        <section id='main-list-view'>
            <div id="main-view-top">
                {todoItems.map((todo) => (
                    <TodoItem key={todo.id} {...todo} setCompleted={setCompleted} />
                ))}
                {fillerItems.map((_, index) => (
                    <div key={`filler-${index}`} className='filler-item'></div>
                ))}
            </div>
            <div id="main-view-bottom">
                <div className="add-task-input">
                    <img className='item-icon' src='/icons/send.png' alt='icon' />
                    <input type="text" name="text" placeholder="Add Task"></input>
                </div>
            </div>
        </section>
    );
};

export default MainListView;