import React, {Component}from 'react';
import ReqUsers from './ReqUsers';
import '../../styles/request.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {handleRequest} from '../../actions/usersActions';


let namesClicked = [];
class Requests extends React.Component {
  removeFromList = (e) => {
    const id = e.currentTarget.id;
    const accept = e.currentTarget.className == "accept-button";
    ////
    const requests = this.props.requests[this.props.current_user].slice(0);
    for(let i = 0; i < requests.length; i++) {
      if(requests[i].uid == id) {
        requests.splice(i, 1);
        const requestLoad = {
          current_user: this.props.current_user,
          requests: requests
        }
        this.props.handleRequest(requestLoad)
        if(accept) {
          console.log("ADD TO PARTNERS");
        }
        break;
      }
    }
    ////
  }
    render() { 
      const requests = this.props.requests[this.props.current_user];
      const users = this.props.users;
      const names = JSON.parse(localStorage.getItem("names"));
      return (
        <div id="client-info" style={{textAlign: "center"}}>
          {
              requests.map((request) => {
              let user = users[request.uid];
              let name = user.fname+" "+user.lname;
              return <ReqUsers img={user.profile_pic} uid={user.uid} 
              remove={this.removeFromList} email={user.email}
              name={name}
              num={user.phone_number}
              >{request.msg}</ReqUsers>
            }) 
          }
        </div>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      users: state.users,
      requests: state.requests,
      current_user: state.current_user.current_user,
      my_partners: state.my_partners[state.current_user.current_user]
    };
  }


  function matchDispatchToProps(dispatch) {
    return bindActionCreators({
      handleRequest: handleRequest
    }, dispatch)
  }

  export default connect(mapStateToProps, matchDispatchToProps)(Requests);