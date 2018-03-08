import React, {Component}from 'react';
import ReqUsers from './ReqUsers';
import '../../styles/request.css';

let namesClicked = [];
class Requests extends React.Component {

    wasClicked(e){
      console.log(e.currentTarget.id);
      e.currentTarget
      //namesClicked.push(e.currentTarget.id);
      //console.log(namesClicked.length);
      //this.setState({toRemove:'true'});
    }

    render() { 
      
      const users = JSON.parse(localStorage.getItem("users"));
      const names = JSON.parse(localStorage.getItem("names"));
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
    }
  }
  
  export default Requests;