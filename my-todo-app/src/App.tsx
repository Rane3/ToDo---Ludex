import React, { useState } from 'react';
import './styles/App.css';
import { SelectedTodoList } from './types/todo.ts';
import ListNav from './components/ListsNav.tsx';
import MainListView from './components/MainListView.tsx';


function App() {
  const [todoLists, setTodoLists] = useState<SelectedTodoList[]>([
    {
      id: '1',
      name: 'Default List',
      todoItems: [{ id: '1', text: 'Default Item', completed: false, listId: '1'}]
    }
  ]);
  const [selectedList, setSelectedList] = useState<SelectedTodoList>(todoLists[0]);
  return (
      <>
      <ListNav todoLists={todoLists} setSelectedList={setSelectedList} setToDoLists={setTodoLists} />
      <MainListView {...selectedList} />
      </>
  );
}

export default App;
