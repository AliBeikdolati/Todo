import React , { Component } from "react";
import TodoStore from '../stores/TodoStore';
import { observer } from "mobx-react";
import TodoFilter from '../components/TodoFilter';

@observer
class TodoFooter extends Component {

    clearCompleted = () => {
        let i = 0;
        while (i < TodoStore.todos.length) {
            if(TodoStore.todos[i].completed === true){
                TodoStore.removeTodo(TodoStore.todos[i].id);
                i = 0;
                this.clearCompleted;
            }
            i++;
        }
        document.getElementById('clearCompleted').style.display = 'none';
    }

    render() {
        return (
            <footer className="footer" id="footer">
                <div className="todo-count">
                    {TodoStore.num} items left
                </div>
                <TodoFilter />
                <a href="#" className="clear-completed" id="clearCompleted" onClick={this.clearCompleted}>
                    Clear completed
                </a>
            </footer>
                
        )
    }
}

export default TodoFooter;