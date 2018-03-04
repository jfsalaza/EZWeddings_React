import React from 'react';
import {Link} from 'react-router';
import BusContact from './BusContact'
import '../../styles/request.css';


class Business extends React.Component{
    render(){
        const users = JSON.parse(localStorage.getItem("users"));
        const names = JSON.parse(localStorage.getItem("busNames"));
        let planner_list = [];

        let filteredBus = this.props.category;

        for(let i = 0; i < names.length; i++) {
            let planner = users[names[i]];
            let uid = planner.uid;
            let profile_pic = planner.profile_pic;
            let name = planner.contact_info.name;
            let number = planner.contact_info.phone_number;
            let email = planner.contact_info.email;
            console.log(filteredBus);
            console.log(planner.contact_info.name.toLowerCase().indexOf(filteredBus));
            let lol = planner.contact_info.name.toLowerCase().indexOf(filteredBus);
            console.log(lol);
            if(lol !== -1){
            planner_list.push(<BusContact img={profile_pic} uid={uid} num={number} email = {email}>{name}</BusContact>);
            }
        }

        return <div id="client-info" style={{textAlign: "center"}}>{planner_list}</div>;
        }
}

export default Business;