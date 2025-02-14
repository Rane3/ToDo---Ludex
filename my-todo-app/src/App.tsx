import React from 'react';
import './App.css';
import TodoList from './components/TodoList.tsx';
import TodoListNav from './components/TodoListNav.tsx';

function App() {
  return (
    <div className="App">
      <TodoListNav id={''} name={''} todoList={[]}  />
      <TodoList id={''} todos={[]} />
    </div>
  );
}

export default App;
