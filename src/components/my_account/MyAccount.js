import React from 'react';
import {Link} from 'react-router';
import Todo from '../partner/Todo';
import AddModal from '../partner/AddModal';
import EditModal from '../partner/EditModal';
import BusinessTypes from './BusinessTypes';
import Title from '../common/Title';
import {users, current_user} from '../common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addToDoItem} from '../../actions/usersActions'
import '../../styles/my_account.css'

class MyAccount extends React.Component {
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
    const todoList = this.props.planner_todo.todo.slice(0);
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
    const newTodoList = this.props.planner_todo.todo.slice(0);
    const prevIdCounter = this.props.planner_todo.idCounter;
    newTodoList.push({id: prevIdCounter, text: text});
    const newIdCounter = prevIdCounter + 1;
    const toDoLoad = {
      current_user: current_user,
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
    const prevTodoList = this.props.planner_todo.todo.slice(0);
    const prevIdCounter = this.props.planner_todo.idCounter;

    for(let i = 0; i<prevTodoList.length; i++) {
      if(prevTodoList[i].id == this.underEdit) {
        const firstHalf = prevTodoList.slice(0,i);
        const newItem = {id: parseInt(this.underEdit), text: this.editModalText.value};
        const secondHalf = prevTodoList.slice(i+1);
        const newTodoList = [...firstHalf, newItem, ...secondHalf];
        const toDoLoad = {
          current_user: current_user,
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
    const prevTodoList = this.props.planner_todo.todo.slice();
    const prevIdCounter = this.props.planner_todo.idCounter;
    for(let i = 0; i<prevTodoList.length; i++) {
      if(prevTodoList[i].id == this.underEdit) {
        prevTodoList.splice(i,1);
        const toDoLoad = {
          current_user: current_user,
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
    const current_user = this.props.current_user;
    const user = this.props.users[current_user];
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
    const todo = this.props.planner_todo.todo.slice(0);
    return (
      <div style={{textAlign: "center"}}>
        <Title img="../index1.jpeg">My Wedding Planner</Title>
        <Todo addModal={this.showAddModal} editModal={this.showEditModal}>{todo}</Todo>
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


function mapStateToProps(state) {
  return {
    users: state.users,
    current_user: state.current_user.current_user,
    planner_todo: state.planner_todo[state.current_user.current_user],
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addToDoItem: addToDoItem
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(MyAccount);