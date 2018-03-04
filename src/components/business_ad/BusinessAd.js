import React from 'react';
import {Link} from 'react-router';

class BusinessAd extends React.Component {
    render() {
      return (
        <div id="listingIdBA">
          <h1 id="nameIdBA">BusinessAd</h1>
          <div id="listingInfoIdBA">
            <img src="./img/persian.jpg" alt="./img/diagonal.jpg"></img>
            <p>Phone Number: 858-356-2135</p><br></br>
            <p>E-mail: pcat@gmail.com</p>
          </div>
          <div id="description text"></div>
          <button></button>
        </div>
      );
    }
  }
  
  export default BusinessAd;