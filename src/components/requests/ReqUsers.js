import React from 'react';
import {Link} from 'react-router';
import '../../styles/request.css';


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
                <button id={props.uid} className = "accept-button" onClick={props.remove} >Accept</button>
                <button id={props.uid} className = "deny-button" onClick={props.remove}>Deny</button>
            </div>
    )
}

export default ReqUsers;