import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const Message = (props) => {
    return(
        <div>
           {props.sender} {props.message} 
        </div>
    );
};

export default Message;