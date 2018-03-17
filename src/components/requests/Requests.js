import React, {Component}from 'react';
import ReqUsers from './ReqUsers';
import '../../styles/request.css';

let namesClicked = [];
class Requests extends React.Component {
  state = {
    requests: [ "elver_galarga", "rosa_melano"
    ]
  };

  removeFromList = (e) => {
    const id = e.currentTarget.id;
    this.setState((prevState) => 
    {
            var next = prevState.requests.slice();
            let index = next.indexOf(id);
            next.splice(index,1);
            return {requests: next};
    });
  }
    render() { 
      
      const users = JSON.parse(localStorage.getItem("users"));
      const names = JSON.parse(localStorage.getItem("names"));
      return (
        <div id="client-info" style={{textAlign: "center"}}>
          {
            this.state.requests.map((request) => {
              let user = users[request];
              return <ReqUsers img={user.profile_pic} uid={user.uid} 
              remove={this.removeFromList} email={user.contact_info.email}
              num={user.contact_info.phone_number}
              >{user.contact_info.name}</ReqUsers>
            }) 
          }
        </div>
      );
    }
  }
  
  export default Requests;