import React, {Component}from 'react';
import ReqUsers from './ReqUsers';
import '../../styles/request.css';

let namesClicked = [];
class Requests extends React.Component {
<<<<<<< HEAD

    wasClicked(e){
      console.log(e.currentTarget.id);
      e.currentTarget
      //namesClicked.push(e.currentTarget.id);
      //console.log(namesClicked.length);
      //this.setState({toRemove:'true'});
    }

=======
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
>>>>>>> 6bd7f71f8f9985576a6d92a02fa5d365c5868f13
    render() { 
      
      const users = JSON.parse(localStorage.getItem("users"));
      const names = JSON.parse(localStorage.getItem("names"));
<<<<<<< HEAD
      let planner_list = [];

      for(let i = 0; i < names.length; i++) {
        let planner = users[names[i]];
        let uid = planner.uid;
        let profile_pic = planner.profile_pic;
        let name = planner.contact_info.name;
        let number = planner.contact_info.phone_number;
        let email = planner.contact_info.email;
        let id = name;
        console.log("Hello");
        planner_list.push(<ReqUsers clicked = {this.wasClicked} img={"../"+profile_pic} uid={uid} num={number} email = {email}>{name}</ReqUsers>);
         
      }

      return <div id="client-info" style={{textAlign: "center"}}>{planner_list}</div>;
=======
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
>>>>>>> 6bd7f71f8f9985576a6d92a02fa5d365c5868f13
    }
  }
  
  export default Requests;