import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const Contact = (props) => {
    return(
        <div className="page-section">
            <h3>Contact Information</h3>
            <img id="business-picture" src={props.img} className="client-picture"/><br/>
            <p id="contact-info">{props.info}</p>
        </div>
    );
};

export default Contact;