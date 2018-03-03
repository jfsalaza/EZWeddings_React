import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const Contact = (props) => {
    let add;
    if(props.address == null) {
        add = null;
    } else{
        add = <i><b>Address: </b>{props.address}</i>;
    }
    return(
        <div className="page-section">
            <h3>Contact Information</h3>
            <img id="business-picture" src={props.img} className="client-picture"/><br/>
            <p id="contact-info">
                <i><b>Phone-Number: </b>{props.phone_number}</i><br/>
                <i><b>E-mail: </b>{props.email}</i><br/>
                {add}
            </p>
        </div>
    );
};

export default Contact;