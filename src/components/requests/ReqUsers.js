import React from 'react';
import {Link} from 'react-router';
import '../../styles/request.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPartner} from '../../actions/requestAction'


const ReqUsers = (props) => {
    const user = "/requests/"+props.uid;
    return(
        <div className="client">
                <h3>{props.name}</h3>
                <img src={props.img} className="client-picture"/>
                <p id = "request-text">{props.children}</p>
                <br />
                <div className = "moveItem" >Number: {props.num}</div>
                <div className = "moveItem1" >Email: {props.email}</div>
                <button id={props.uid} className = "accept-button" onClick={function(){addPartner(props)}} >Accept</button>
                <button id={props.uid} className = "deny-button" onClick={props.remove}>Deny</button>
            </div>
    )
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({addPartner: addPartner},dispatch);

}

function mapStateToProps(state) {
    return {
      //user: state.requestReducer,
      //current_user: state.current_user,
      //my_partners: state.my_partners[state.current_user.current_user]
    };
  }


export default connect(mapStateToProps,matchDispatchToProps)(ReqUsers);