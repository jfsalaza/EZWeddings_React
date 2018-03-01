import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const Todo = (props) => {
    return(
        <div className="page-section">
            <h3>To Do List</h3>
            <div id="list-container">
                    <ul id="todo-list">
                    </ul>
                </div>
            <button id="todo-list-add">Add</button>
        </div>
    );
};

export default Todo;