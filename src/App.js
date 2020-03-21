import React, { Component } from 'react';
import {observer} from 'mobx-react';

import TodoEntry from './components/TodoEntry';
import TodoItems from "./components/TodoItems";
import TodoStore from './stores/TodoStore';
import './App.css';

@observer
class App extends Component {
  render() {
    return (
      <div className="todoapp" id="todoapp">
        
        <TodoEntry />
        <TodoItems />
        <footer className="footer" id="footer">
          <div className="todo-count">
            {TodoStore.num} items remain
          </div>
          <ul className="filters">
            <li>
              <a href="#" onClick={() => {
                for (let i = 0; i < TodoStore.todos.length; i++) {
                  document.getElementById(TodoStore.todos[i].id).style.display = 'block';
                }
              }}>all</a>
            </li>
            <li>
              <a href="#" onClick={() => {
                for (let i = 0; i < TodoStore.todos.length; i++) {
                  if(TodoStore.todos[i].completed === true){
                    document.getElementById(TodoStore.todos[i].id).style.display = 'none'
                  }else {
                    document.getElementById(TodoStore.todos[i].id).style.display = 'block'
                  }
                }
              }}>active</a>
            </li>
            <li>
              <a href="#" onClick={() => {
                for (let i = 0; i < TodoStore.todos.length; i++) {
                  if(TodoStore.todos[i].completed !== true){
                    document.getElementById(TodoStore.todos[i].id).style.display = 'none'
                  }else {
                    document.getElementById(TodoStore.todos[i].id).style.display = 'block'
                  }
                }
              }}>completed</a>
            </li>
          </ul>
        </footer>
        
      </div>
    );
  }
}

export default App;
