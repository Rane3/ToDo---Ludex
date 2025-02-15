import React, { useState } from 'react';
import './styles/App.css';
import { TodoList } from './types/todo.ts';
import ListNav from './components/ListsNav.tsx';
import MainListView from './components/MainListView.tsx';


function App() {
  const [todoLists, setTodoLists] = useState<TodoList[]>([
    {
      id: '1',
      name: 'Default List',
      todoItems: [{ id: '1', text: 'Default Item', completed: false }]
    }
  ]);
  const [selectedList, setSelectedList] = useState<TodoList>(todoLists[0]);
  return (
      <>
      <ListNav todoLists={todoLists} setSelectedList={setSelectedList} setToDoLists={setTodoLists} />
      <MainListView {...selectedList} />
      </>
  );
}

export default App;
