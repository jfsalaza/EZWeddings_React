import React from 'react';
import {Link} from 'react-router';
import styles from './my_account.module.css';


const BusinessTypes = (props) => {
    return (
        <div className={styles.page_section}>
            <h3>Search business for...</h3>
            <div className={styles.list_container}>
                <ul id={styles.business_types}>
                    <li><Link className={styles.todo_item} to="/business_search/venues">Venues</Link></li> 
                    <li><Link className={styles.todo_item} to="/business_search/officiant">Officiant</Link></li>
                    <li><Link className={styles.todo_item} to="/business_search/decorations">Decorations</Link></li>
                    <li><Link className={styles.todo_item} to="/business_search/foodNdrinks">Food and Drinks</Link></li>
                    <li><Link className={styles.todo_item} to="/business_search/cake">Cake</Link></li> 
                    <li><Link className={styles.todo_item} to="/business_search/rings">Rings</Link></li>
                    <li><Link className={styles.todo_item} to="/business_search/transportation">Transportation</Link></li>
                    <li><Link className={styles.todo_item} to="/business_search/entertainment">Entertainment</Link></li>
                    <li><Link className={styles.todo_item} to="/business_search/clothing">Clothing</Link></li>
                    <li><Link className={styles.todo_item} to="/business_search/hairNmakeup">Hair and Makeup</Link></li> 
                    <li><Link className={styles.todo_item} to="/business_search/photoNvideo">Photographer and Videographer</Link></li>
                </ul>
            </div>
            <button id={styles.collaborators}><Link to="/my_partners">Businesses I'm Connected With</Link></button>
        </div>
    );
};

export default BusinessTypes;