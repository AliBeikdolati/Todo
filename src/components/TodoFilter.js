import React , {Component} from 'react';

import TodoStore from '../stores/TodoStore';

class TodoFilter extends Component {

    seeAll = () => {
        for (let i = 0; i < TodoStore.todos.length; i++) {
            document.getElementById(TodoStore.todos[i].id).style.display = 'block';
        }
    }

    seeActives = () => {
        for (let i = 0; i < TodoStore.todos.length; i++) {
            if(TodoStore.todos[i].completed === true){
                document.getElementById(TodoStore.todos[i].id).style.display = 'none'
            }else {
                document.getElementById(TodoStore.todos[i].id).style.display = 'block'
            }
        }
    }

    seeCompleted = () => {
        for (let i = 0; i < TodoStore.todos.length; i++) {
            if(TodoStore.todos[i].completed !== true){
                document.getElementById(TodoStore.todos[i].id).style.display = 'none'
            }else {
                document.getElementById(TodoStore.todos[i].id).style.display = 'block'
            }
        }
    }



    render() {
        return (
            <ul className="filters">
                    <li>
                        <a href="#" onClick={this.seeAll}>All</a>
                    </li>
                    <li>
                        <a href="#" onClick={this.seeActives}>Active</a>
                    </li>
                    <li>
                        <a href="#" onClick={this.seeCompleted}>Completed</a>
                    </li>
                </ul>
        )
    }
}

export default TodoFilter;