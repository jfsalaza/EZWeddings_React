import React from 'react';
import {Link} from 'react-router';
import '../../styles/business.css';

const AddModal = (props) => {
    return (
        <div id="add-item-modal" className="modal" ref={props.modalRef}>
            <div className="modal-content">
            <div className="modal-header">
                <span className="close" onClick={props.closeModal}>&times;</span>
                <h2>Add To Do Item</h2>
            </div>
            <div className="modal-body">
                <form>
                <input id="add-modal-text" className="modal-input" placeholder="To do" type="text" ref={props.modalTextRef}/>
                <input className="modal-submit" type="button" value="Add Item" onClick={props.addItem}/>
                </form>
            </div>
            </div>
        </div>
    );
};

export default AddModal;