import React from 'react';
import {Link} from 'react-router';
import Item from './Item';
import '../../styles/business.css';
/*
class Todo extends React.Component {
    render() {
        return (
            <div className="page-section">
                <h3>To Do List</h3>
                <div id="list-container">
                    <ul id="todo-list">
                        {
                            this.props.children.map((item) => {
                                return <Item item={item}/>
                            })
                        }
                    </ul>
                </div>
                <button id="todo-list-add" onClick={this.props.addModal}>Add</button>
            </div>
        );
    }
}

export default Todo;
*/

const Todo = (props) => {
    return (
        <div className="page-section">
            <h3>To Do List</h3>
            <div id="list-container">
                <ul id="todo-list">
                    {
                        props.children.map((item) => {
                            return <Item item={item}/>
                        })
                    }
                </ul>
            </div>
            <button id="todo-list-add" onClick={props.addModal}>Add</button>
        </div>
    );
};

export default Todo;