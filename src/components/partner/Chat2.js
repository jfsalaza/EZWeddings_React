import React from 'react';
import {Link} from 'react-router';
import Message from './Message';
import '../../styles/business.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendMessage} from '../../actions/myPartnersActions';
class Chat extends React.Component {
    state = {
        messages: [
        ]
    };

    textInput = null;

    sendMessage = (e) => {
        const current_user = this.props.current_user.slice(0);
        const partner = this.props.puid;
        if(e.keyCode == 13) {
            let text = this.textInput.value; 
            const current_user = this.props.current_user;
            const partner = this.props.puid;
            let chat = this.props.my_partners[partner].chat.slice(0);
            chat.push(text);
            const message = {from: current_user, to: partner, msg: chat}
            this.props.sendMessage(message);
            this.setState((prevState) => 
            {
                    var next = prevState.messages.slice();
                    next.push({sender:"You: ", msg:text});
                    this.textInput.value = "";
                    return {messages: next}
            });
            const my_partners = Object.assign({}, this.props.all_partners);
            //console.log(my_partners);
            console.log("IN CHAT");
            //console.log(this.props.my_partners[partner].chat.slice(0));
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
                <input id="msg-input" type="text" name="msg" placeholder="Type message..." onKeyUp={this.sendMessage} ref={input => this.textInput = input}/>
            </div>
        );
    }    


}

function mapStateToProps(state) {
    return {
      users: state.users,
      current_user: state.current_user.current_user,
      my_partners: state.my_partners[state.current_user.current_user],
      all_partners: state.my_partners
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({sendMessage: sendMessage}, dispatch)
}


    
export default connect(mapStateToProps, matchDispatchToProps)(Chat);
