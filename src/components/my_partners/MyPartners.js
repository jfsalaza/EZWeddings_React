import React from 'react';
import User from './User';
import '../../styles/client_list.css';

class MyPartners extends React.Component {
    render() {
      const users = JSON.parse(localStorage.getItem("users"));
      const current_user = localStorage.getItem("current_user");
      const partners = users[current_user].partners;
      let partners_list = [];

      for(var i = 0; i < partners.length; i++) {
        let partner = users[partners[i]];
        let uid = partner.uid;
        let profile_pic = partner.profile_pic;
        let name = partner.contact_info.name;
        partners_list.push(<User img={profile_pic} uid={uid}>{name}</User>)
      }

      return <div id="client-list" style={{textAlign: "center"}}>{partners_list}</div>;
    }
  }
  
  export default MyPartners;