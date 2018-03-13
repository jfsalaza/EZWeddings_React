import React from 'react';
import '../../styles/register.css';
import {Link} from 'react-router';
import { Redirect } from 'react-router';
import Recovered from './Recovered'


class AccountRecovery extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmEmail: '',
      redirect: 'false'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    const target = event.target;
    const clientBox = target.type === 'checkbox' ? target.checked : target.value;
    const vendorBox = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      email: email,
      confirmEmail: confirmEmail
    });
  }

  handleSubmit(event) {
    if(this.refs.email.value === this.refs.confirmEmail.value){
      alert("Email has been sent with instructions on how to recover your account");
      this.setState({redirect: 'true'});

    }else{
      alert("Emails don't match, please try again");
    }
    event.preventDefault();
  }  
render() {
      if(this.state.redirect === 'false'){
      return (
        <div id="pagedivAR">
          <div id="contentdivAR">
          <label>
          <h3>Account Recovery</h3>
          </label>
          <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input id="emailIdAR" ref = "email"type="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Confirm Email:
            <input id="email2IdAR" ref = "confirmEmail" type="email" value={this.state.confirmEmail} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit"/>
        </form>
        </div>
      </div>
      );
    }else{
      return(
      <div>
      <label>
        <h3>Account Recovery</h3>
      </label>
      <Link to='/login'>
      <input type="submit" value="To Log In"/>
      </Link>
      </div>)
      this.setState({redirect: 'false'});
    }
    }
}
  
  export default AccountRecovery;