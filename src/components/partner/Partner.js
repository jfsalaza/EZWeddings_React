import React from 'react';
import Contact from './Contact';
import Todo from './Todo';
import Chat from './Chat';
import AddModal from './AddModal';
import Item from './Item';

class Partner extends React.Component {
  state = {
    items: [
    ]
  };
  modal = null;
  modalText = null;

  showAddModal = () => {
    this.modal.style.display = "block";
  }

  closeModal = () => {
    this.modal.style.display = "none";
  }

  addToDoItem = (e) => {
    console.log("adding item...");
    let text = this.modalText.value;
    this.setState((prevState) => 
    {
            var next = prevState.items.slice();
            next.push(text);
            this.modalText.value = "";
            return {items: next}
    });
    this.modal.style.display = "none";
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
        <Todo addModal={this.showAddModal}>{this.state.items}</Todo>
        <Chat/>
        <AddModal modalRef={el => this.modal = el} 
                  modalTextRef={el => this.modalText = el} 
                  closeModal={this.closeModal}
                  addItem={this.addToDoItem}
        />
      </div>
    );
  }
}
  
  export default Partner;