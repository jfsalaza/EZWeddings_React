import React from 'react';

const User = (props) => {
    return(
    <a>
        <div>
            <h3>{props.children}</h3>
            <img src="#"/>
        </div>
    </a>
    );
};

export default User;