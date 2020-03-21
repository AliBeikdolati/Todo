import React, { Component } from "react";


class TodoEntry extends Component {
    render() {
        return (
            <header className="header">
                <h1>todo</h1>
                <input 
                    type="text"
                    className="new-todo"
                    placeholder="What needs to be done?"
                />
            </header>
        )
    }
}

export default TodoEntry;