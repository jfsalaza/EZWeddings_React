import React from 'react';
import {Link} from 'react-router';
import Message from './Message';
import '../../styles/business.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sendMessage} from '../../actions/myPartnersActions';
class Chat extends React.Component {
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
            const message = {from: current_user, to: partner, chat: chat}
            this.props.sendMessage(message);
            this.textInput.value = "";

        }
    }

    render(){
        const chat = this.props.my_partners[this.props.puid].chat.slice(0);

        return(
            <div className="page-section">
                <h3>Chat</h3>
                <div id="chat-box">
                    {   
                        chat.map((message) => {
                            const sender = this.props.current_user.slice(0);
                            return <Message sender={sender+": "} message={message}></Message>
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
