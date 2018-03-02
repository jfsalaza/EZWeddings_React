import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const Item = (props) => {
    if(props.item == "") {
        return null;
    } else {
        return <li className="todo-item"><a>{props.item}</a></li>;
    }
};

export default Item;