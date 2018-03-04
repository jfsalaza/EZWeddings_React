import React from 'react';
import {Link} from 'react-router';
import '../../styles/client_list.css';

const User = (props) => {
    const user = "/my_partners/"+props.uid;
    return(
        <Link to={user}>
            <div className="client2">
                <h3>{props.children}</h3>
                <img src={props.img} className="client-picture2"/>
            </div>
        </Link>
    );
};

export default User;