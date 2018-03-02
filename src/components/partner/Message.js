import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const Message = (props) => {
    if(props.message == "") {
        return null;
    } else {
        return (
            <div className="chat-msg">
                {props.sender} {props.message}
            </div>
        );
    }
};

export default Message;