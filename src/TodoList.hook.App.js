import React, { useState } from 'react';
import './App.scss';
import TodoList from './Component/TodoList.hook';
function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'handle click' },
    { id: 2, title: 'handle click 2' },
    { id: 3, title: 'handle click 3' },
    { id: 4, title: 'handle click 4' }
  ]);
  // 1. render todoList on screen.
  // 2. click on item => itemm will be deleted
  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(item => item.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  return (
    <div className="app">
      {/* this is my first react app!
      <ColorBox /> */}
      <h1>Todo List</h1>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
