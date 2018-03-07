import React from 'react';
import {Link,browserHistory} from 'react-router';
import '../../styles/login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '',
                   password: '',
                   show: 'hidden'};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.email == "a@a.com" && this.state.password == "123"){
      //alert(localStorage.getItem("current_user"));
      //localStorage.setItem("current_user", "rosa_melano");
      localStorage.setItem("current_user", "tacos_el_gordo");
      browserHistory.push('/my_account');      
    }
    else
    {
      this.setState((prevState) => {
        return { show: 'visible' }
      });
    }
  }

  render() {
    return (   
      <div>               
        <img src={require("../../img/login/blurflower.jpg")} className="bg"></img>
        <div id="ldivIdL">
          <h1 id="hIdL">EZWeddings</h1>          

          <form id="formdivIdL" onSubmit={this.handleSubmit}>
            <p id="pIdL" style={{visibility:this.state.show}} >Incorrect Email or Password</p>

            <input id="emailIdL" type="email" name="email" placeholder="email" required invalid 
                   value={this.state.email} onChange={this.handleEmailChange}></input> 
            <br></br>  

            <br></br>
            <input id="passwordIdL" type="password" name="password" placeholder="password" required
                   value={this.state.password} onChange={this.handlePasswordChange}></input>
            <br></br>
                  
            <br></br>
            <input id="submitIdL" type="submit" name="submit" value="Log In"></input>
            <br></br>
          </form>
          
          <Link to="register"><p id="p1IdL">Register</p></Link>
          <Link to="account_recovery"><p id="p2IdL">Forgot Passowrd?</p></Link>
        </div>
      </div>
    );
  }
}  

export default Login;