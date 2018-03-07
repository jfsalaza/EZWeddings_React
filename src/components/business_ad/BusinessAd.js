import React from 'react';
import {Link} from 'react-router';
import {users, current_user} from '../../index';
import '../../styles/business_ad.css';


class BusinessAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: users["tacos_el_gordo"].ad.title,
                   name: users["tacos_el_gordo"].ad.name,
                   bimg: users["tacos_el_gordo"].ad.img,
                   description: users["tacos_el_gordo"].ad.description,
                   email: users["tacos_el_gordo"].ad.email,
                   phone_number: users["tacos_el_gordo"].ad.phone_number,
                   address: users["tacos_el_gordo"].ad.address,
                   checkDC: false,
                   checkF: true,
                   checkD: true,
                   checkM: false,
                   checkE: false,
                   checkO: false,
                   checkS: false,
                   checkFL: false };}
                   
    makeString(){
      let displayS = '';

      if(this.state.checkF){
         displayS = displayS + "Food, ";
      }
      if(this.state.checkD){
        displayS = displayS + "Drinks, ";
      }     
      if(this.state.checkDC){
        displayS = displayS + "Decorations, ";
      }  
      if(this.state.checkFL){
        displayS = displayS + "Florist, ";
      }  
      if(this.state.checkM){
        displayS = displayS + "Music, ";
      }      
      if(this.state.checkE){
        displayS = displayS + "Entertainment, ";
      }      
      if(this.state.checkO){
        displayS = displayS + "Officaint, ";
      }       
      if(this.state.checkS){
        displayS = displayS + "Security, ";
      }  

      displayS = displayS.substr(0,displayS.length -2);
      /*console.log(displayS + " "+ displayS.length);*/
      return displayS;
    }    

    render() {
      return (
        <div id="pagedivIdBA">                
          <div id="listingIdBA">          
            <img src={require('../../img/business/'+users["tacos_el_gordo"].ad.img)} width="600px" height="400px"></img>
          </div>  
          
          <div id="listingInfoIdBA">
            <h1 id="nameIdBA">{this.state.name}</h1>
            <h3 id="cnameIdBA">{this.state.title}</h3>
            <hr id="hrIdBA"></hr>

            <br></br>
            <p>Contact: </p>
            <p id="pnumberIdBA">Phone Number: {this.state.phone_number}</p>
            <p id="emailIdBA">Email: {this.state.email}</p>
            
            <br></br>
            <p id="descpIdBA">Description: </p>
            <p id="descIdBA" >{this.state.description}</p>            
          </div>
          
          <div id="catdivIdBA">
            <p>Categories:</p>            
            <p id="citemsIdBA">{this.makeString()}</p>
          </div>
        </div>
      );
    }
  }
  
  export default BusinessAd;