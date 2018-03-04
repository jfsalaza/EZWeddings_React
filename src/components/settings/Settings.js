import React from 'react';
import '../../styles/settings.css';
import {Link} from 'react-router';
import {users, current_user} from '../../index';


class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname: users[current_user].contact_info.name,
                   lname: users[current_user].contact_info.name,    
                   email: users[current_user].contact_info.email,
                   password: '********',
                   phone_number: users[current_user].contact_info.phone_number,
                   account_type: users[current_user].account_type};

    this.handleFnamechange = this.handleFnamechange.bind(this);
    this.handleLnamechange = this.handleLnamechange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handlePnumberChange = this.handlePnumberChange.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    /*users[current_user].contact_info.name = this.state.name;
    users[current_user].contact_info.name = this.state.name;
    users[current_user].contact_info.email = this.state.email;
    users[current_user].contact_info.phone_number = this.state.phone_number;
    */
    localStorage.setItem("updated_settings", "tacos_el_gordo");          
  }

    render() {
      return (
        <div id="pageblockidBS">
            <div id="scontentidBS"> <br></br>
                <form onSubmit={this.handleSubmit}>
                   <div id="nameidBS">
                       <p id="p1idBS">First Name</p>
                       <p id="p2idBS">Last Name</p>
                       <br></br>
                       <input id="fnameidBS" type="text" name="firstname"
                       value={this.state.fname} onChange={this.handleFnameChange}></input>         
                
                       <input id="lnameidBS" type="text" name="lastname"
                       value={this.state.lname} onChange={this.handleLnameChange}></input> 
                       <br></br>
                   </div>
                   
                   <br></br>Photo: <br></br>
                   <img src={require("../../img/settings/diagonal.jpg")} width="255" height="200"></img>
                   <br></br>
                   <input id ="photoidBS" type="file" name="photo" accept="image/gif, image/jpeg, image/png"></input> 
                   <br></br>
                   
                   <br></br>
                   Email:<br></br>
                   <input id="emailidBS" type="email" name="email"
                   value={this.state.email} onChange={this.handleEmailChange}></input> 
                   <br></br>
                   
                   <br></br>
                   Password:<br></br>
                   <input id="pwordidBS" type="password" name="password"
                   value={this.state.password} onChange={this.handlePasswordChange}></input> 
                   <br></br>
                   
                   <br></br>
                   Phone number:<br></br>
                   <input id="phoneidBS" type="tel" name="pnumber"
                   value={this.state.phone_number} onChange={this.handlePnumberChange}></input> 
                   <br></br>
                    
                   <br></br>
                   Account Type: {this.state.account_type}
                   <br></br>
                   <br></br>
                   <input id="submitIdBS" type="submit" name="submit" value="Save Changes" onChange={function() {}}></input> 
                </form>
            </div>
        </div>
      );
    }
  }
  
  export default Settings;