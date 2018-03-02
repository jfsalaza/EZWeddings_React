import React from 'react';
import '../../styles/register.css';


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
    alert('A name was submitted: ' + this.state.firstName);
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
            <input id="emailidR" type="email" value={this.state.email} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Confirm Email:
            <input id="emailidR" type="email" value={this.state.confirmEmail} onChange={this.handleChange} />
          </label>
          <br />
          <input type="submit" value="Join Now" />
        </form>
        </div>
      </div>
      );
    }
}
  
  export default AccountRecovery;