import React, {Component} from 'react';

import TodoItem from './TodoItem';

class TodoItems extends Component {
    render() {
        return (
            <section className="main">
                <ul className="todo-list">
                    <li>
                    <div className="view">
                        <input type="checkbox" className="toggle" value="on"/>
                        <label>new work</label>
                        <button className="destry" />
                    </div>
                    </li>
                    <TodoItem />
                </ul>
            </section>

        )
    }
}

export default TodoItems;