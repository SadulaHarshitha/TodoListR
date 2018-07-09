import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./ToDoList";
import LoginController from "./login";
ReactDOM.render(
    <div>
      <TodoList/>
      </div>,
  document.getElementById('container')
);
