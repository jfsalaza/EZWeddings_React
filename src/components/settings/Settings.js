import React from 'react';
import {Link,browserHistory} from 'react-router';
import '../../styles/settings.css';
//import {users, current_user} from '../../index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadUsers, getCurrentUser,updateUser} from '../../actions/usersActions';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {uid: '',
                  fname:'',
                  lname:'',
                  profile_pic: '',
                  email: '',
                  password: '',
                  phone_number: '',
                  account_type: ''
                 };

   /* 
    this.state = { fname: this.props.current_user.current_user,//users['tacos_el_gordo2'].user_info.fname,
                   lname: users['tacos_el_gordo2'].user_info.lname,  
                   profile_pic: require('../../img/settings/diagonal.jpg'),
                   email: users['tacos_el_gordo2'].user_info.email,
                   password: users['tacos_el_gordo2'].user_info.password,
                   phone_number: users['tacos_el_gordo2'].user_info.phone_number,
                   account_type: users['tacos_el_gordo2'].user_info.account_type
                  };
    */

  this.handleFnamechange = this.handleFnamechange.bind(this);
    this.handleLnamechange = this.handleLnamechange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePnumberChange = this.handlePnumberChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleFnamechange(event) {
    this.setState({fname: event.target.value});
  }

  handleLnamechange(event) {
    this.setState({lname: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handlePnumberChange(event) {
    this.setState({phone_number: event.target.value});
  }

  handleImageChange(event) {
    if(event.target.files && event.target.files[0]){
      let freader = new FileReader();
      freader.onload = (e) => {
            this.setState({image: e.target.result});
        };
        freader.readAsDataURL(event.target.files[0]);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
        
    localStorage.setItem("updated_settings",JSON.stringify(this.state)); 
    console.log(this.props.users);
    
    //this.props.users["tacos_el_gordo"] = this.state;
    //this.props.users[this.props.current_user.current_user] = this.state;    
    //console.log(this.props.users);
    //const tmpUser = "apples";
    const nUser = {
      uid: this.state.uid,
      fname:this.state.fname,
      lname:this.state.lname,
      profile_pic: this.state.profile_pic,
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.password,
      account_type: this.state.account_type
    }
    console.log(nUser);
    var tmp = this.props.updateUser(nUser);
    //console.log(tmp);
    browserHistory.push('/my_account');  
    //JSON.stringify(state)  -- turn javascript to json
    //JSON.parse(state) - turn json into javascript
  }


  componentWillMount() {
   
    if(typeof this.props.current_user.current_user != 'undefined' )
    { 
      console.log("update willMount from " );

      var cuser = this.props.current_user.current_user;
      console.log(cuser);
    
      var userList = Object.assign({}, this.props.users);
      console.log(userList);   
      console.log(userList[cuser].uid);
     
      this.setState({uid: userList[cuser].uid});
      this.setState({fname: userList[cuser].fname});
      this.setState({lname: userList[cuser].lname});
      this.setState({profile_pic: userList[cuser].profile_pic});
      this.setState({email: userList[cuser].email});
      this.setState({password: userList[cuser].password});
      this.setState({phone_number: userList[cuser].phone_number}); 
      this.setState({account_type: userList[cuser].account_type});
  }
}

  componentWillReceiveProps(nextProps) {
    //if (this.props.fname.id != nextProps.fname.id) {
      console.log(nextProps.users);
      
      if(typeof nextProps.current_user.current_user != 'undefined' )
      { 
        //get current user
        var cuser = nextProps.current_user.current_user;
        console.log(cuser);
        
        //get list of all users
        var userList = Object.assign({}, nextProps.users);
        console.log(userList);   
        console.log(userList[cuser].uid);

        //update when current is not equal to new
        if(this.state.fname != userList[cuser].fname)
        {          
          console.log("update willReceive from "+this.state.fname+" to "+userList[cuser].uid );
          this.state.uid = userList[cuser].uid;
          this.state.fname = userList[cuser].fname;
          this.state.lname = userList[cuser].lname;
          this.state.profile_pic = userList[cuser].profile_pic;
          
          if(this.state.email != userList[cuser].email)
          {    
            this.state.email = userList[cuser].email;
            console.log("update email");
          }
          this.state.password = userList[cuser].password;
          this.state.phone_number = userList[cuser].phone_number;
          this.state.account_type = userList[cuser].account_type;

          this.setState({uid: userList[cuser].uid});
          this.setState({fname: userList[cuser].fname});
          this.setState({lname: userList[cuser].lname});
          this.setState({profile_pic: userList[cuser].profile_pic});

          this.setState({email: userList[cuser].email});
          this.setState({password: userList[cuser].password});
          this.setState({phone_number: userList[cuser].phone_number});          
          this.setState({account_type: userList[cuser].account_type});

          this.forceUpdate()
        }
      }
  }


  render() {

    return (
      <div id="pageblockIdS">
        <div id="scontentIdS"> <br></br>
          
          <form onSubmit={this.handleSubmit}>
            {/*<div id="nameIdS">*/}
              <p id="p1IdS">First Name</p>
              <p id="p2IdS">Last Name</p>              
              <br></br>
              <input id="fnameIdS" type="text" name="firstname"
              onChange={this.handleFnameChange} value ={this.state.fname}></input>         
                
              <input id="lnameIdS" type="text" name="lastname"
               onChange={this.handleLnameChange} value ={this.state.lname} ></input> 
              <br></br>
            {/*</div>*/}
                   
            <br></br>
            Photo:<br></br>
            <img src={require("../../img/settings/diagonal.jpg")} width="255" height="200"></img>
            {/*<img src={this.state.profile_pic} width="255" height="200"></img>/*/}

            <br></br>            
            <input id ="photoIdS" type="file" name="photo" accept="image/gif, image/jpeg, image/png"
            onChange={this.handleImageChange}></input> 
            <br></br>
                   
            <br></br>
            Email:<br></br>
            <input id="emailIdS" type="email" name="email"
            value={this.state.email} onChange={this.handleEmailChange}></input> 
            <br></br>
                   
            <br></br>
            Password:<br></br>
            <input id="pwordIdS" type="password" name="password"
            value={this.state.password} onChange={this.handlePasswordChange}></input> 
            <br></br>
                   
            <br></br>
            Phone number:<br></br>
            <input id="phoneIdS" type="tel" name="pnumber"
            value={this.state.phone_number} onChange={this.handlePnumberChange}></input> 
            <br></br>
                    
            <br></br>
            Account Type: {this.state.account_type}
            <br></br>

            <br></br>
            <input id="submitIdS" type="submit" name="submit" value="Save Changes" onChange={function() {}}></input> 
          </form>
        </div>
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
  return bindActionCreators({
    updateUser: updateUser
  }, dispatch)
}


//export default connect(mapStateToProps)(Settings); 
export default connect(mapStateToProps,matchDispatchToProps)(Settings); 
//export default Settings;