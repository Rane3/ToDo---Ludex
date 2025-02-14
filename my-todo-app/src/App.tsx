import React, { useState } from 'react';
import './App.css';
import { TodoList } from './types/todo.ts';
import ListNav from './components/TodoListNav.tsx';


function App() {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);

  return (
    <div className="App">
      <ListNav toDoLists={todoLists} setToDoLists={setTodoLists} />
      {/* Add TodoList here if todoLists */}
    </div>
  );
}

export default App;
