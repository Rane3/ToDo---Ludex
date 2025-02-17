import React, { useState } from 'react';
import './styles/App.css';
import './styles/Mobile.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { SelectedTodoList } from './types/todo.ts';
import ListNav from './components/ListsNav.tsx';

import MainListView from './components/MainListView.tsx';


function App() {
  AOS.init();
  const [todoLists, setTodoLists] = useState<SelectedTodoList[]>([
    {
      id: '1',
      name: 'My Day',
      todoItems: [{ id: '1', text: 'Delete me', completed: false, listId: '1'}]
    },
    {
      id: '2',
      name: 'Important',
      todoItems: []
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
