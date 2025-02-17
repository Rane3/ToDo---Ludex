import React, { FC, useState, useEffect } from 'react';
import { SelectedTodoList, Todo } from '../types/todo';
import TodoItem from '../components/TodoItem.tsx';
import '../styles/MainViewStyles.css';
import TodoFilters from './TodoFilters.tsx';

import { useLocalStorage } from '../utils/localStorage.tsx';

/**
 * Main view, allows users to add toDo's delete them and move them
 */
const MainListView: FC<SelectedTodoList> = ({ id, todoItems, name }) => {
  const [currentTodo, setCurrentTodo] = useState('');

  const [currentTodoItems, setCurrentTodoItems] = useLocalStorage<Todo[]>(
    'todoItems',
    todoItems,
  );
  const [currentFilter, setFilter] = useState('View All');
  //Used to sync currentTodoItems with Local Storage
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(currentTodoItems));
  }, [currentTodoItems]);

  const setCompleted = (id: string, completed: boolean) => {
    setCurrentTodoItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, completed } : item)),
    );
  };
  //Creates new todo item with the current list id
  const addTodoItem = () => {
    if (!currentTodo.trim()) return;
    const newTodo = {
      id: crypto.randomUUID(),
      text: currentTodo,
      completed: false,
      listId: id,
    };
    setCurrentTodoItems((prevLists) => [...prevLists, newTodo]);
    setCurrentTodo('');
  };

  const deleteTodo = (id: string) => {
    setCurrentTodoItems((prevItems) =>
      prevItems.filter((item) => item.id !== id),
    );
  };

  const filteredTodos = currentTodoItems.filter((todo) => {
    if (currentFilter === 'Completed') return todo.completed;
    if (currentFilter === 'Pending') return !todo.completed;
    return true;
  });

  //Adds filler div elements
  const fillerCount = 20 - filteredTodos.length;
  const fillerItems = Array(fillerCount).fill(null);
  return (
    <section id="main-list-view">
      <div id="main-view-top">
        <div id="main-view-top-filters">
          <div id="list-header">{name}</div>

          <TodoFilters currentFilter={currentFilter} setFilter={setFilter} />
        </div>
        {filteredTodos.map((todo, index) => (
          <TodoItem
            index={index}
            listId={id}
            deleteTodo={deleteTodo}
            key={todo.id}
            todo={todo}
            setCompleted={setCompleted}
          />
        ))}
        {fillerItems.map((_, index) => (
          <div key={`filler-${index}`} className="filler-item"></div>
        ))}
      </div>
      <div id="main-view-bottom">
        <div className="add-task-input">
          <button onClick={addTodoItem} id="invisible-button">
            <img className="item-icon" src="/icons/send.png" alt="icon" />
          </button>
          <input
            value={currentTodo}
            type="text"
            name="text"
            onChange={(e) => setCurrentTodo(e.target.value)}
            placeholder="Add Task"
          />
        </div>
      </div>
    </section>
  );
};

export default MainListView;
