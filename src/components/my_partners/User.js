import React from 'react';
import {Link} from 'react-router';
import '../../styles/client_list.css';

const User = (props) => {
    const user = "/my_partners/"+props.uid;
    return(
        <Link to={user}>
            <div className="client">
                <h3>{props.children}</h3>
                <img src={props.img} className="client-picture"/>
            </div>
        </Link>
    );
};

export default User;