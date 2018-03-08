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
                   checkV: true,
                   checkO: true,
                   checkDC: true,
                   checkFD: true,
                   checkC: true,
                   checkR: true,
                   checkT: true,
                   checkE: true,
                   checkCL: true,
                   checkHM: true,
                   checkPV: true
                  };}
                   
    makeString(){
      let displayS = '';

      if(this.state.checkV){
         displayS = displayS + 'venues, ';
      }
      if(this.state.checkO){
         displayS = displayS + 'officiant, ';
      }
      if(this.state.checkDC){
         displayS = displayS + 'decorations, ';
      }
      if(this.state.checkFD){
         displayS = displayS + 'foodNdrinks, ';
      }
      if(this.state.checkC){
         displayS = displayS + 'cake, ';
      }
      if(this.state.checkR){
         displayS = displayS + 'rings, ';
      }        
      if(this.state.checkT){
         displayS = displayS + 'transportation, ';
      }
      if(this.state.checkE){
         displayS = displayS + 'entertainment, ';
      }    
      if(this.state.checkCL){
         displayS = displayS + 'clothing, ';
      }
      if(this.state.checkHM){
         displayS = displayS + 'hairNmakeup, ';
      }    
      if(this.state.checkPV){
         displayS = displayS + 'photoNvideo, ';
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