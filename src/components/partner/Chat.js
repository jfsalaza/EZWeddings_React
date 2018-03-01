import React from 'react';
import {Link} from 'react-router';
import Message from './Message';
import '../../styles/business.css';

class Chat extends React.Component {
    state = {
        messages: [
        ]
    };

    sendMessage = (e) => {
            if(e.keyCode == 13) {
                console.log("HELLO!");
                this.setState((prevState) => 
                {
                        var next = prevState.messages.slice();
                        next.push({sender:"Me: ", msg:"New"})                        
                        return {messages: next}
                });
            }
    }

    render(){
        return(
            <div className="page-section">
                <h3>Chat</h3>
                <div id="chat-box">
                    {
                        this.state.messages.map((message) => {
                            return <Message sender={message.sender} message={message.msg}></Message>
                        })
                    }
                </div>
                <input id="msg-input" type="text" name="msg" placeholder="Type message..." onKeyUp={this.sendMessage}/>
            </div>
        );
    }    
}

export default Chat;