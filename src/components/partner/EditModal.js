import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const EditModal = (props) => {
    return (
        <div id="edit-item-modal" className="modal" ref={props.modalRef}>
            <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={props.closeModal}>&times;</span>
                <h2>Edit To Do Item</h2>
            </div>
            <div className="modal-body">
                <input id="edit-modal-text" className="modal-input" placeholder="To do" type="text" ref={props.modalTextRef}/>
                <input className="edit-button" type="button" value="Delete" onClick={props.deleteItem}/>
                <input className="edit-button" type="button" value="Update" onClick={props.addItem}/>
            </div>
            </div>
        </div>
    );
};

export default EditModal;