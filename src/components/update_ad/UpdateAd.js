import React from 'react';
import {Link,browserHistory} from 'react-router';
import '../../styles/updateAd.css';
import {users, current_user} from '../../index';

class UpdateAd extends React.Component {
  constructor(props) {
    super(props);
    this.state = { /*title: users[current_user].contact_info.name,*/
                  title: users["tacos_el_gordo"].ad.title,
                  name: users["tacos_el_gordo"].ad.name,
                  description: users["tacos_el_gordo"].ad.description,
                  email: users["tacos_el_gordo"].ad.email,
                  phone_number: users["tacos_el_gordo"].ad.phone_number,
                  address: users["tacos_el_gordo"].ad.address
                 };

    this.handleTitlechange = this.handleTitlechange.bind(this);
    this.handleNamechange = this.handleNamechange.bind(this);
    this.handleDescriptionchange = this.handleDescriptionchange.bind(this);
    this.handleEmailchange = this.handleEmailchange.bind(this);
    this.handlePnumberchange = this.handlePnumberchange.bind(this);
    this.handleAddresschange = this.handleAddresschange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitlechange(event) {
    this.setState({title: event.target.value});
  }

  handleNamechange(event) {
    this.setState({name: event.target.value});
  }

  handleDescriptionchange(event) {
    this.setState({description: event.target.value});
  }

  handleEmailchange(event) {
    this.setState({email: event.target.value});
  }

  handlePnumberchange(event) {
    this.setState({phone_number: event.target.value});
  }
  
  handleAddresschange(event) {
    this.setState({address: event.target.value});
  }  

  handleSubmit(event) {
    event.preventDefault();
    /*users["tacos_el_gordo"].ad.title = this.state.title;
    users["tacos_el_gordo"].ad.name = this.state.name;
    users["tacos_el_gordo"].ad.description = this.state.description;
    users["tacos_el_gordo"].ad.email = this.state.email;
    users["tacos_el_gordo"].ad.phone_number = this.state.phone_number;
    users["tacos_el_gordo"].ad.address = this.state.address;    */
    localStorage.setItem("updated_Ad",JSON.stringify(this.state));          
    browserHistory.push('/business_ad'); 
    /*console.log(this.state.description);*/

  }
    render() {
      return (
        <div id="pageblockidUL">
            <div id="scontentidUL"> 
                <br></br>         
                <form onSubmit={this.handleSubmit}>
                  Title:<br></br>
                  <input id="titleidUL" type="text"
                  onChange={this.handleTitlechange} value={this.state.title} ></input>           
                  <br></br>
                    
                  <br></br>
                  Company Name:<br></br>
                  <input id="cnameidUL" type="text" 
                  onChange={this.handleNamechange} value={this.state.name}></input>           
                  <br></br>
                
                  <br></br>Photo:<br></br>
                  <img src={require("../../img/settings/diagonal.jpg")} width="255" height="200"></img>
                  <br></br>
                  <input id ="photoidUL" type="file" name="photo" accept="image/gif, image/jpeg, image/png"></input> 
                  <br></br>
                             
                  <br></br>
                  Email:<br></br>
                  <input id="emailidUL" type="email" name="email"
                  onChange={this.handleEmailchange} value={this.state.email}></input> 
                  <br></br>
                
                  <br></br>
                  Phone number:<br></br>
                  <input id="phoneidUL" type="tel" name="pnumber"
                  onChange={this.handlePnumberchange} value={this.state.phone_number}></input> 
                  <br></br>
                  
                  <br></br>
                  Description:<br></br>
                  <textarea id="descriptionidUL" type="text" name="description"
                  onChange={this.handleDescriptionchange} value={this.state.description}></textarea>           
                  <br></br>

                  {/*
                  <br></br>
                  Address:<br></br>
                  <input id="addressidUL" type="text" name="address"
                  onChange={this.handleAddresschange} value={this.state.address}></input> 
                  <br></br>
                  
                  <br></br>       
                  <input type="checkbox" name="vendortype" value="Music"></input>
                  Music
                  <br></br>
                  */}
                                  
                  <br></br>
                  Categories:                     
                  <br></br>
                  <input type="checkbox" name="vendortype" value="Decorations"></input> 
                  Decorations
                  <br></br>


                  <input type="checkbox" name="vendortype" value="Food"></input> 
                  Food
                  <br></br>

                  <input type="checkbox" name="vendortype" value="Drinks"></input> 
                  Drinks
                  <br></br>          
     
                  <input type="checkbox" name="vendortype" value="Music"></input> 
                  Music
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="Entertainment"></input> 
                  Entertainment
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="Officiant"></input> 
                  Officiant
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="Security"></input> 
                  Security
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="Florist"></input> 
                  Florist
                  <br></br>
                  
                  <br></br>
                  <input id="submitidUL" type="submit" name="submit" value="Save Changes"></input>        
                </form>  
            </div>
        </div>
      );
    }
  }
  
  export default UpdateAd;