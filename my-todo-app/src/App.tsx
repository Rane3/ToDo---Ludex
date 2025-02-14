import React, { useState } from 'react';
import './App.css';
import { TodoList } from './types/todo.ts';
import ListNav from './components/ListsNav.tsx';


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
    <div className="App">
      <ListNav toDoLists={todoLists} setToDoLists={setTodoLists} />
      {/* Add TodoList here if todoLists */}
    </div>
  );
}

export default App;
