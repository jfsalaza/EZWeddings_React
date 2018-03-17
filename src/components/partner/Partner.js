import React from 'react';
import Contact from './Contact';
import Todo from './Todo';
import Chat from './Chat';
import AddModal from './AddModal';
import EditModal from './EditModal';
import Title from '../common/Title';
import {connect} from 'react-redux';
import {users, current_user} from '../common/Header';
import {bindActionCreators} from 'redux';
import {loadUsers, getCurrentUser} from '../../actions/usersActions';
import {sendMessage} from '../../actions/myPartnersActions';


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
    const testmsg = {from: "tacos_el_gordo", to: "rosa_melano", msg: "test"};
    this.props.sendMessage(testmsg);
    console.log(this.props.my_partners);
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
    console.log(this.props.my_partners);
    const partner = users[this.props.params.uid];
    const name = partner.contact_info.name;
    const profile_pic = "../"+partner.profile_pic;
    const phone_number = partner.contact_info.phone_number;
    const email = partner.contact_info.email;
    const address = partner.contact_info.address;
    const account_type = users[current_user].account_type;
    let bg_pic = "../title_bg.jpeg";

    if(account_type == "business") {
      bg_pic = "../title_bg4.jpeg";
    }
    return (
      <div style={{textAlign: "center"}}>
        <Title img={bg_pic}>{name}</Title>
        <Contact img={profile_pic} phone_number={phone_number} email={email} address={address}/>
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

function mapStateToProps(state) {
  return {
    users: state.users,
    current_user: state.current_user,
    my_partners: state.my_partners
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({sendMessage: sendMessage, loadUsers: loadUsers, getCurrentUser: getCurrentUser}, dispatch)
}
  
export default connect(mapStateToProps, matchDispatchToProps)(Partner);