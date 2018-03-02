import React from 'react';
import Contact from './Contact';
import Todo from './Todo';
import Chat from './Chat';
import AddModal from './AddModal';
import EditModal from './EditModal';

class Partner extends React.Component {
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
    const users = JSON.parse(localStorage.getItem("users"));
    const partner = users[this.props.params.uid];
    const name = partner.contact_info.name;
    const profile_pic = "../"+partner.profile_pic;
    const phone_number = partner.contact_info.phone_number;
    const email = partner.contact_info.email;
    return (
      <div style={{textAlign: "center"}}>
        <h1>{name}</h1>
        <Contact img={profile_pic} phone_number={phone_number} email={email}/>
        <Todo addModal={this.showAddModal} editModal={this.showEditModal}>{this.state.items}</Todo>
        <Chat/>
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
  
  export default Partner;