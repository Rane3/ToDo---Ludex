import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoList} from './components/TodoList';
import {TodoListNav} from './components/TodoListNav';

function App() {
  return (
    <div className="App">
      <TodoListNav />
      <TodoList />
    </div>
  );
}

export default App;
