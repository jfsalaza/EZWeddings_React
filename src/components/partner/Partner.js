import React from 'react';
import Contact from './Contact';
import Todo from './Todo';
import Chat from './Chat';


class Partner extends React.Component {
    render() {
      const users = JSON.parse(localStorage.getItem("users"));
      const partner = users[this.props.params.uid];
      const name = partner.contact_info.name;
      const profile_pic = "../"+partner.profile_pic;
      return (
        <div style={{textAlign: "center"}}>
          <h1>{name}</h1>
          <Contact img={profile_pic}/>
          <Todo/>
          <Chat/>
        </div>
      );
    }
  }
  
  export default Partner;