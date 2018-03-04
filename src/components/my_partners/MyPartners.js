import React from 'react';
import User from './User';
import Title from '../common/Title';
import '../../styles/client_list.css';
import {users, current_user} from '../../index';

class MyPartners extends React.Component {
    render() {
      const partners = users[current_user].partners;
      const account_type = users[current_user].account_type;
      let bg_pic = "../title_bg5.jpeg";
      let title_text = "Collaborators";

      if(account_type == "business") {
        bg_pic = "../title_bg4.jpeg";
        title_text = "My Clients";
      }

      let partners_list = [];

      for(let i = 0; i < partners.length; i++) {
        let partner = users[partners[i]];
        let uid = partner.uid;
        let profile_pic = partner.profile_pic;
        let name = partner.contact_info.name;
        partners_list.push(<User img={profile_pic} uid={uid}>{name}</User>);
      }

    return (
      <div>
        <Title img={bg_pic}>{title_text}</Title>
        <div id="client-list" style={{textAlign: "center"}}>{partners_list}</div>
      </div>
    );
    }
  }
  
  export default MyPartners;