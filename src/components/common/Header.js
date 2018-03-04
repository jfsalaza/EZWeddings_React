import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import Title from './Title';
import '../../styles/font.css';
import '../../styles/w3.css';
import '../../styles/nav_bar.css';

const Header = ({location}) => {
  let loc = location.pathname;
  let users = JSON.parse(localStorage.getItem("users"));
  let current_user = localStorage.getItem("current_user");
  let user = users[current_user];
  let account_type = user.account_type;
  
if (loc == "/") {
    return (
      <div>
        <ul id="nav-bar">
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/login" className="active">Login</IndexLink></li>
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/register" className="active">Register</IndexLink></li>
        </ul>
      </div>
    );
} else if (loc == "/register"){
  return( 
    <div>
      <ul id="nav-bar">
          <li className="nav-item"><Link to="/">Home</Link></li>
        </ul>
    </div>);
}else if (loc == "/account_recovery"){
  return( 
    <div>
      <ul id="nav-bar">
          <li className="nav-item"><Link to="/">Home</Link></li>
        </ul>
    </div>);
}else {
    return (
      <div>
        <ul id="nav-bar">
          <li className="nav-item"><Link to="/my_account">Home</Link></li>
          <li className="nav-item"><Link to="/settings">Setting</Link></li>
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/" className="active">Logout</IndexLink></li>
        </ul>
      </div>
    );
  }
};



export default Header;
