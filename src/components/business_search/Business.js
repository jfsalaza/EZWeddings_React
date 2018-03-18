import React from 'react';
import {Link} from 'react-router';
import BusContact from './BusContact'
import '../../styles/request.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadUsers, getCurrentUser} from '../../actions/usersActions';


class Business extends React.Component{
    render(){
        const users = this.props.users;
        const business = this.props.business;
        let business_list = [];
        let filteredBus = this.props.category;
        //console.log(this.props.business[0].uid);
        //console.log(this.props.users);

        for(let i = 0; i < business.length; i++) {
            let bus = users[business[i].uid];
            let uid = bus.uid;
            //console.log("business id " + bus.uid);
            let profile_pic = bus.profile_pic;
            let name = bus.fname ;
            //console.log(bus.fname);
            let number = bus.phone_number;
            let email = bus.email;
            let lol = bus.category.indexOf(filteredBus);
            if(lol !== -1){
            //console.log("Hello " + bus.profile_pic);
           business_list.push(<BusContact business={bus} img={profile_pic} uid={uid} num={number} email = {email}>{name}</BusContact>);
            }
        }

        return <div id="client-info" style={{textAlign: "center"}}>{business_list}</div>;
        }
}

function mapStateToProps(state){
    return{
      business: state.business,
      users: state.users
    };
  }

//   function matchDispatchToProps(dispatch) {
//     return bindActionCreators({loadUsers: loadUsers, getCurrentUser: getCurrentUser}, dispatch)
//   }

export default connect(mapStateToProps)(Business);