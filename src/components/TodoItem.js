import React, { Component } from "react";


class TodoItem extends Component {
    render() {
        return (
            <li className="completed">
                <div className="view">
                    <input type="checkbox" className="toggle" value="on" checked={true}/>
                    <label>old work</label>
                    <button className="destry" />
                </div>
            </li>
        )
    }
}

export default TodoItem;