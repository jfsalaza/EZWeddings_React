import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({location}) => {
  var loc = location.pathname;
  console.log(loc);
  if(loc == "/my_partners") {
    return (
      <div>
      <ul id="nav-bar">
        <li className="nav-item"><Link to="/my_account">Home</Link></li>
        <li className="nav-item"><Link to="/settings">Setting</Link></li>
        <li className="nav-item" style={{float: "right"}}><IndexLink to="/">Logout</IndexLink></li>
      </ul>
    </div>
    );
  } else if (loc == "/") {
    return (
      <div>
        <ul id="nav-bar">
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/">Login</IndexLink></li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul id="nav-bar">
          <li className="nav-item"><Link to="/my_account">Home</Link></li>
          <li className="nav-item"><Link to="/settings">Setting</Link></li>
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/">Logout</IndexLink></li>
        </ul>
      </div>
    );
  }
};

export default Header;
