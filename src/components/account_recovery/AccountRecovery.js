import React from 'react';
import '../../styles/register.css';
import {Link} from 'react-router';
import { Redirect } from 'react-router';


class AccountRecovery extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      confirmEmail: ''
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
    if(this.refs.email.value === this.refs.confirmEmail.value ){
      alert('A new password was sent to your email');
      return <Redirect to={'/'} />
    }else{
      alert('Emails don\'t match' );
    }
    event.preventDefault();
  }  
render() {
      return (
        <div id="pagedivR">
          <div id="contentdivR">
          <label>
          <h3>Account Recovery</h3>
          </label>
          <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input id="emailidR" ref = "email"type="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Confirm Email:
            <input id="emailidR" ref = "confirmEmail" type="email" value={this.state.confirmEmail} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Submit"/>
        </form>
        </div>
      </div>
      );
    }
}
  
  export default AccountRecovery;