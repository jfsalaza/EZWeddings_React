import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import '../../styles/font.css';
import '../../styles/w3.css';
import '../../styles/nav_bar.css';

const Header = ({location}) => {
  let loc = location.pathname;
  let account_type = localStorage.getItem("account_type");
  console.log(account_type);
  if(loc == "/my_partners") {
    if(account_type == "business") {
      return (
        <div>
          <ul id="nav-bar">
            <li className="nav-item"><Link to="/my_account">Home</Link></li>
            <li className="nav-item"><Link to="/settings">Setting</Link></li>
            <li className="nav-item" style={{float: "right"}}><IndexLink to="/" className="active">Logout</IndexLink></li>
          </ul>
          <div className="title">
              <img id="title-img" src="./title_bg4.jpeg"/>
              <div className="title-centered"><h1>My Clients</h1></div>
          </div>
        </div>
        );
    } else if (account_type == "planner") {
      return (
        <div>
          <ul id="nav-bar">
            <li className="nav-item"><Link to="/my_account">Home</Link></li>
            <li className="nav-item"><Link to="/settings">Setting</Link></li>
            <li className="nav-item" style={{float: "right"}}><IndexLink to="/" className="active">Logout</IndexLink></li>
          </ul>
          <div className="title">
              <img id="title-img" src="./title_bg5.jpeg"/>
              <div className="title-centered"><h1>Collaborators</h1></div>
          </div>
        </div>
        );
    }
  } else if (loc == "/") {
    return (
      <div>
        <ul id="nav-bar">
          <li className="nav-item" style={{float: "right"}}><IndexLink to="/" className="active">Login</IndexLink></li>
        </ul>
      </div>
    );
  } else {
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
