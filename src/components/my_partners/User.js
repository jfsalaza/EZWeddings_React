import React from 'react';
import {Link} from 'react-router';
import '../../styles/client_list.css';

const User = (props) => {
    return(
        <Link to="partner">
            <div className="client">
                <h3>{props.children}</h3>
                <img src={props.img} className="client-picture"/>
            </div>
        </Link>
    );
};

export default User;