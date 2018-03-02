import React from 'react';
import {Link} from 'react-router';
import Item from './Item';
import '../../styles/business.css';

const Todo = (props) => {
    return (
        <div className="page-section">
            <h3>To Do List</h3>
            <div id="list-container">
                <ul id="todo-list">
                    {
                        props.children.map((item) => {
                            return <Item editModal={props.editModal} id={item.id} item={item.text}/>;
                        })
                    }
                </ul>
            </div>
            <button id="todo-list-add" onClick={props.addModal}>Add</button>
        </div>
    );
};

export default Todo;