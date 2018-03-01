import React from 'react';
import {Link} from 'react-router';
import '../../styles/client_list.css';
import images from '../../img/images';

const User = (props) => {
    return(
        <Link to="partner">
            <div className="client">
                <h3>{props.children}</h3>
                <img src={images[props.img]} className="client-picture"/>
            </div>
        </Link>
    );
};

export default User;