import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const Title = (props) => {
    return(
        <div className="title">
            <img id="title-img" src={props.img}/>
            <div className="title-centered"><h1>{props.children}</h1></div>
        </div>
    );
};

export default Title;