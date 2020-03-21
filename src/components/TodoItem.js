import React, { Component } from "react";
import { observer } from "mobx-react";

import TodoStore from '../stores/TodoStore';


@observer

class TodoItem extends Component {

    changeActive = () => {
        this.props.todo.changeToggle()
        TodoStore.countUnDo();
    }

    render() {
        const { todo } = this.props;
        return (
            <li className={todo.completed ? "completed" : " "} id={todo.id}>
                <div className="view">
                    <input 
                        onChange={this.changeActive}
                        type="checkbox" 
                        className="toggle" 
                        value="on" 
                        checked={todo.completed}
                        id={todo.id}
                    />
                    <label htmlFor={todo.id}> {todo.title} </label>
                    <button className="destroy" onClick={() => TodoStore.removeTodo(todo.id)} />
                </div>
            </li>
        )
    }
}

export default TodoItem;