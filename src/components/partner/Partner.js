import React from 'react';
import Contact from './Contact';
import Todo from './Todo';
import Chat from './Chat2';
import AddModal from './AddModal';
import EditModal from './EditModal';
import Title from '../common/Title';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadUsers, getCurrentUser} from '../../actions/usersActions';
import {sendMessage, addToDoItem} from '../../actions/myPartnersActions';


class Partner extends React.Component {
  modal = null;
  modalText = null;
  editModal = null;
  editModalText = null;
  underEdit = null;

  showAddModal = () => {
    this.modal.style.display = "block";
  }
  
  showEditModal = (e) => {
    const current_user = this.props.current_user;
    const partner = this.props.params.uid;
    const my_partners = this.props.my_partners[current_user];
    const todoList = my_partners[partner].todo.slice(0);
    let text = "";
    this.underEdit = e.currentTarget.id;
    for(let i = 0; i<todoList.length; i++) {
      if(todoList[i].id == this.underEdit) {
        text = todoList[i].text;
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
    const current_user = this.props.current_user;
    const partner = this.props.params.uid;
    const my_partners = this.props.my_partners[current_user];
    const newTodoList = my_partners[partner].todo.slice(0);
    const prevIdCounter = my_partners[partner].idCounter;
    newTodoList.push({id: prevIdCounter, text: text});
    const newIdCounter = prevIdCounter + 1;
    const toDoLoad = {
      current_user: current_user,
      partner: partner,
      idCounter: newIdCounter,
      list: newTodoList
    }

    this.props.addToDoItem(toDoLoad);

    this.modalText.value = "";
    this.modal.style.display = "none";
  }

  editToDoItem = (e) => {
    if(this.editModalText.value == "") return;
    const current_user = this.props.current_user;
    const partner = this.props.params.uid;
    const my_partners = this.props.my_partners[current_user];
    const prevTodoList = my_partners[partner].todo.slice();
    const prevIdCounter = my_partners[partner].idCounter;

    for(let i = 0; i<prevTodoList.length; i++) {
      if(prevTodoList[i].id == this.underEdit) {
        const firstHalf = prevTodoList.slice(0,i);
        const newItem = {id: parseInt(this.underEdit), text: this.editModalText.value};
        const secondHalf = prevTodoList.slice(i+1);
        const newTodoList = [...firstHalf, newItem, ...secondHalf];
        const toDoLoad = {
          current_user: current_user,
          partner: partner,
          idCounter: prevIdCounter,
          list: newTodoList
        }
        this.props.addToDoItem(toDoLoad);
        break;
      }
    }

    this.editModal.style.display = "none";
  }

  deleteToDoItem = () => {
    const current_user = this.props.current_user;
    const partner = this.props.params.uid;
    const my_partners = this.props.my_partners[current_user];
    const prevTodoList = my_partners[partner].todo.slice();
    const prevIdCounter = my_partners[partner].idCounter;

    for(let i = 0; i< prevTodoList.length; i++) {
      if(prevTodoList[i].id == this.underEdit) {
        prevTodoList.splice(i,1);
        const toDoLoad = {
          current_user: current_user,
          partner: partner,
          idCounter: prevIdCounter,
          list: prevTodoList
        }
        this.props.addToDoItem(toDoLoad);
        break;
      }
    }

    this.editModal.style.display = "none";
  }

  render() {
    const partner = this.props.users[this.props.params.uid];
    const account_type = this.props.users[this.props.current_user].account_type;
    let name = partner.fname;
    if(account_type == "business") {
      name += " "+partner.lname;
    }
    const profile_pic = "../"+partner.profile_pic;
    const phone_number = partner.phone_number;
    const email = partner.email;
    const address = partner.address;
    const todo = this.props.my_partners[this.props.current_user][this.props.params.uid].todo;

    let bg_pic = "../title_bg.jpeg";

    if(account_type == "business") {
      bg_pic = "../title_bg4.jpeg";
    }
    return (
      <div style={{textAlign: "center"}}>
        <Title img={bg_pic}>{name}</Title>
        <Contact img={profile_pic} phone_number={phone_number} email={email} address={address}/>
        <Todo addModal={this.showAddModal} editModal={this.showEditModal}>{todo}</Todo>
        <Chat puid={this.props.params.uid}/>
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
    current_user: state.current_user.current_user,
    my_partners: state.my_partners
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    sendMessage: sendMessage, 
    loadUsers: loadUsers, 
    getCurrentUser: getCurrentUser,
    addToDoItem: addToDoItem
  }, dispatch)
}
  
export default connect(mapStateToProps, matchDispatchToProps)(Partner);