import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const Chat = (props) => {
    return(
        <div className="page-section">
            <h3>Chat</h3>
            <div id="chat-box">
            </div>
            <input id="msg-input" type="text" name="msg" placeholder="Type message..." onkeyup="sendMessage(event)"/>
        </div>
    );
};

export default Chat;