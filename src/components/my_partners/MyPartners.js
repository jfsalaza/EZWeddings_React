import React from 'react';
import User from './User';
import Title from '../common/Title';
import '../../styles/client_list.css';
import {users, current_user} from '../common/Header';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadUsers, getCurrentUser} from '../../actions/usersActions';

class MyPartners extends React.Component {

    
    printUsers(){
      console.log(this.props.users);
      console.log(this.props.current_user);
      console.log(typeof(this.props.current_user));
    }
    
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

      this.printUsers();
    return (
      <div>
        <Title img={bg_pic}>{title_text}</Title>
        <div id="client-list" style={{textAlign: "center"}}>{partners_list}</div>
      </div>
    );
    }
  }

  
  function mapStateToProps(state) {
    return {
      users: state.users,
      current_user: state.current_user
    };
  }

  function matchDispatchToProps(dispatch) {
    return bindActionCreators({loadUsers: loadUsers, getCurrentUser: getCurrentUser}, dispatch)
  }
  
  export default connect(mapStateToProps, matchDispatchToProps)(MyPartners);
  //export default MyPartners;