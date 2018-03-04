import React from 'react';
import {Link} from 'react-router';
import {users, current_user} from '../../index';

class BusinessAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: users["tacos_el_gordo"].ad.title,
                   name: users["tacos_el_gordo"].ad.name,
                   bimg: users["tacos_el_gordo"].ad.img,
                   description: users["tacos_el_gordo"].ad.description,
                   email: users["tacos_el_gordo"].ad.email,
                   phone_number: users["tacos_el_gordo"].ad.phone_number,
                   address: users["tacos_el_gordo"].ad.address};}

    render() {
      return (
        <div id="listingIdBA">
          <h1 id="nameIdBA">{this.state.name}</h1>
          <div id="listingInfoIdBA">
            <h3 id="cnameIdBA">{this.state.title}</h3>
            <img src={require('../../img/business/'+users["tacos_el_gordo"].ad.img)}></img>
            <br></br><br></br>
            <p>Description: {this.state.description}</p>
            <p>Phone Number:{this.state.phone_number}</p>
            <p>Email: {this.state.email}</p>
          </div>
        </div>
      );
    }
  }
  
  export default BusinessAd;