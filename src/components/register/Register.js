import React from 'react';
import {Link,browserHistory} from 'react-router';
import '../../styles/register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fname: '',
                   lname: '',
                   email: '',
                   password: "",
                   cpassword: "",
                   phone_number: "",
                   account_type: "",
                   cradio: "client"};

    this.handleFnamechange = this.handleFnamechange.bind(this);
    this.handleLnamechange = this.handleLnamechange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleCPasswordChange = this.handleCPasswordChange.bind(this);
    this.handlePnumberChange = this.handlePnumberChange.bind(this);
    this.handleCradioChange = this.handleCradioChange.bind(this);

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
  
  handleCPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handlePnumberChange(event) {
    this.setState({phone_number: event.target.value});
  }

  handleCradioChange(event) {
    this.setState({cradio: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    /*users[current_user].contact_info.name = this.state.name;
    users[current_user].contact_info.name = this.state.name;
    users[current_user].contact_info.email = this.state.email;
    users[current_user].contact_info.phone_number = this.state.phone_number;
    */
   localStorage.setItem("updated_register",JSON.stringify(this.state)); 
   browserHistory.push('/my_account');  
  }
  
  render() {
    return (

      <div>
        <img src={require("../../img/register/hands.jpeg")} className="bg"></img>

      <div id="pagedivIdR">
        <div id="contentdivIdR">
          <h3 id="h3IdR">Register an Account</h3>
          
          <form onSubmit={this.handleSubmit}>
            <div id = "nameIdR">
              Name:<br></br>
              <input id="fnameIdR" type="text" ref="firstName" placeholder="first" value={this.state.fname}  onChange={this.handleFnamechange}></input>            
              <input id="lnameIdR" type="text" ref="lastName" placeholder="last" value={this.state.lname} onChange={this.handleLnamechange}></input>
              <br></br>
            </div>
  
            <br></br>
            Email:<br></br>
            <input id="emailIdR" ref="email"type="email" value={this.state.email} onChange={this.handleEmailChange}></input>
            <br></br>
              
            <br></br>
            Password:<br></br>
            <input id="passwordIdR" ref="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
            <br></br>
            
            <br></br>
            Confirm Password:<br></br>
            <input id="password2IdR" ref="password" type="password" value={this.state.cpassword} onChange={this.handleCPasswordChange}></input>
            <br></br>

            <br></br>
            Phone Number:<br></br>
            <input id="telIdR" type="tel" ref="number"value={this.state.phone_number} onChange={this.handlePnumberChange}></input>
            <br></br>
            
            <br></br>           
            <input id="cradioidR" type="radio" name="clientvendor" value="client" onChange={this.handleCradioChange}></input>  
            Client
                    
            <input id="vradioidR" type="radio" name="clientvendor" value="vendor" onChange={this.handleCradioChange}></input>  
            Vendor
            <br></br>
                   
            <input id="subIdR" type="submit" value="Join Now"></input>          
          </form>

        </div>
      </div></div>
    );
  }
}
 
export default Register;