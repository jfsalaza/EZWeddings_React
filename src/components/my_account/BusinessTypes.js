import React from 'react';
import {Link} from 'react-router';
import '../../styles/my_account.css';

const BusinessTypes = (props) => {
    return (
        <div className="page-section">
            <h3>Search business for...</h3>
            <div className="list-container">
                <ul id="business-types">
                    <li className="todo-item"><Link to="/business_search/venues">Venues</Link></li> 
                    <li className="todo-item"><Link to="/business_search/officiant">Officiant</Link></li>
                    <li className="todo-item"><Link to="/business_search/decorations">Decorations</Link></li>
                    <li className="todo-item"><Link to="/business_search/foodNdrinks">Food and Drinks</Link></li>
                    <li className="todo-item"><Link to="/business_search/cake">Cake</Link></li> 
                    <li className="todo-item"><Link to="/business_search/rings">Rings</Link></li>
                    <li className="todo-item"><Link to="/business_search/transportation">Transportation</Link></li>
                    <li className="todo-item"><Link to="/business_search/entertainment">Entertainment</Link></li>
                    <li className="todo-item"><Link to="/business_search/clothing">Clothing</Link></li>
                    <li className="todo-item"><Link to="/business_search/hairNmakeup">Hair and Makeup</Link></li> 
                    <li className="todo-item"><Link to="/business_search/photoNvideo">Photographer and Videographer</Link></li>
                </ul>
            </div>
            <button id="collaborators"><Link to="/my_partners">Businesses I'm Connected With</Link></button>
        </div>
    );
};

export default BusinessTypes;