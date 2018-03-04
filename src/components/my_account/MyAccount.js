import React from 'react';
import {Link} from 'react-router';
import Todo from '../partner/Todo';
import AddModal from '../partner/AddModal';
import EditModal from '../partner/EditModal';
import BusinessTypes from './BusinessTypes';
import Title from '../common/Title';
import {users, current_user} from '../common/Header';

class MyAccount extends React.Component {
  state = {
    idCounter: 0,
    items: [
    ]
  };
  modal = null;
  modalText = null;
  editModal = null;
  editModalText = null;
  underEdit = null;

  showAddModal = () => {
    this.modal.style.display = "block";
  }
  
  showEditModal = (e) => {
    let items = this.state.items;
    let text = "";
    this.underEdit = e.currentTarget.id;
    for(let i = 0; i<items.length; i++) {
      if(items[i].id == this.underEdit) {
        text = items[i].text;
        break;
      }
    }
    this.editModalText.value = text;
    this.editModal.style.display = "block";
  }

  closeModal = () => {
    this.modal.style.display = "none";
    this.editModal.style.display = "none";
  }

  addToDoItem = (e) => {
    let text = this.modalText.value;
    this.setState((prevState) => 
    {
            var next = prevState.items.slice();
            let idCounter = prevState.idCounter;
            next.push({id: idCounter, text: text});
            idCounter = idCounter + 1;
            this.modalText.value = "";
            return {idCounter: idCounter, items: next}
    });
    this.modal.style.display = "none";
  }

  editToDoItem = (e) => {
    if(this.editModalText.value == "") return;
    let itemsUpdate = this.state.items;
    for(let i = 0; i<itemsUpdate.length; i++) {
      if(itemsUpdate[i].id == this.underEdit) {
        itemsUpdate[i].text = this.editModalText.value;
        break;
      }
    }
    this.setState((prevState) => { return {items: itemsUpdate}; });
    this.editModal.style.display = "none";
  }

  deleteToDoItem = () => {
    let itemsUpdate = this.state.items;
    for(let i = 0; i<itemsUpdate.length; i++) {
      if(itemsUpdate[i].id == this.underEdit) {
        itemsUpdate.splice(i, 1);
        break;
      }
    }
    this.setState((prevState) => { return {items: itemsUpdate}; });
    this.editModal.style.display = "none";
  }

  render() {
    const user = users[current_user];
    if(user.account_type == "business") {
      return (
        <div style={{textAlign: "center"}}>
        <Title img="../title_bg5.jpeg">My Account</Title>
          <Link to="my_partners">
              <div className="card">
                      <h2 className="link">My Clients</h2>
              </div>
          </Link>
          <Link to="requests">
              <div className="card">
                      <h2 className="link">My Requests</h2>
              </div>
          </Link>
          <Link to="update_ad">
              <div className="card">
                  <h2 className="link">Update My Ad</h2>
              </div>
          </Link>
        </div>
      );
    }
    return (
      <div style={{textAlign: "center"}}>
        <Title img="../index1.jpeg">My Wedding Planner</Title>
        <Todo addModal={this.showAddModal} editModal={this.showEditModal}>{this.state.items}</Todo>
        <BusinessTypes/>
        <AddModal modalRef={el => this.modal = el} 
                  modalTextRef={el => this.modalText = el} 
                  closeModal={this.closeModal}
                  addItem={this.addToDoItem}
        />
        <EditModal modalRef={el => this.editModal = el} 
                   modalTextRef={el => this.editModalText = el} 
                   closeModal={this.closeModal}
                   addItem={this.editToDoItem}
                   deleteItem={this.deleteToDoItem}
        />
      </div>
    );
  }
}

export default MyAccount;