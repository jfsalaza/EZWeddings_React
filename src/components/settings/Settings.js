import React from 'react';
import {Link,browserHistory} from 'react-router';
import '../../styles/settings.css';
import {users, current_user} from '../../index';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname: users['tacos_el_gordo2'].user_info.fname,
                   lname: users['tacos_el_gordo2'].user_info.lname,  
                   profile_pic: require('../../img/settings/diagonal.jpg'),
                   email: users['tacos_el_gordo2'].user_info.email,
                   password: users['tacos_el_gordo2'].user_info.password,
                   phone_number: users['tacos_el_gordo2'].user_info.phone_number,
                   account_type: users['tacos_el_gordo2'].user_info.account_type,
                  };

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
    browserHistory.push('/my_account');  
    //JSON.stringify(state)  -- turn javascript to json
    //JSON.parse(state) - turn json into javascript
  }

  render() {
    return (
      <div id="pageblockIdS">
        <div id="scontentIdS"> <br></br>
          
          <form onSubmit={this.handleSubmit}>
            <div id="nameIdS">
              <p id="p1IdS">First Name</p>
              <p id="p2IdS">Last Name</p>              
              <br></br>
              <input id="fnameIdS" type="text" name="firstname"
              onChange={this.handleFnameChange} defaultValue ={this.state.fname}></input>         
                
              <input id="lnameIdS" type="text" name="lastname"
              onChange={this.handleLnameChange} defaultValue ={this.state.lname} ></input> 
              <br></br>
            </div>
                   
            <br></br>
            Photo:<br></br>
            {/*<img src={require("../../img/settings/diagonal.jpg")} width="255" height="200"></img>*/}
            <img src={this.state.profile_pic} width="255" height="200"></img>

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
 
export default Settings;