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
                  checkDC: false,
                  checkF: true,
                  checkD: true,
                  checkM: false,
                  checkE: false,
                  checkO: false,
                  checkS: false,
                  checkFL: false     
                 };

    this.handleTitlechange = this.handleTitlechange.bind(this);
    this.handleNamechange = this.handleNamechange.bind(this);
    this.handleDescriptionchange = this.handleDescriptionchange.bind(this);
    this.handleEmailchange = this.handleEmailchange.bind(this);
    this.handlePnumberchange = this.handlePnumberchange.bind(this);
    
    this.handleCheckDCchange = this.handleCheckDCchange.bind(this);
    this.handleCheckFchange = this.handleCheckFchange.bind(this);
    this.handleCheckDchange = this.handleCheckDchange.bind(this);
    this.handleCheckMchange = this.handleCheckMchange.bind(this);
    this.handleCheckEchange = this.handleCheckEchange.bind(this);
    this.handleCheckOchange = this.handleCheckOchange.bind(this);
    this.handleCheckSchange = this.handleCheckSchange.bind(this);
    this.handleCheckFLchange = this.handleCheckFLchange.bind(this);
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
    
  handleCheckDCchange(event) {
    this.setState({checkDC: !(this.state.checkDC)});
  }  

  handleCheckFchange(event) {
    this.setState({checkF: !(this.state.checkF)});
  }  

  handleCheckDchange(event) {
    this.setState({checkD: !(this.state.checkD)});
  }  

  handleCheckMchange(event) {
    this.setState({checkM: !(this.state.checkM)});
  }  

  handleCheckEchange(event) {
    this.setState({checkE: !(this.state.checkE)});
  }  

  handleCheckOchange(event) {
    this.setState({checkO: !(this.state.checkO)});
  }  

  handleCheckSchange(event) {
    this.setState({checkS: !(this.state.checkS)});
  }  

  handleCheckFLchange(event) {
    this.setState({checkFL: !(this.state.checkFL)});
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

     
                  <br></br>
                  Categories:                     
                  <br></br>
                  <input type="checkbox" name="vendortype" value="Decorations" 
                  onChange={this.handleCheckDCchange} checked={this.state.checkDC}></input> 
                  Decorations
                  <br></br>


                  <input type="checkbox" name="vendortype" value="Food"
                  onChange={this.handleCheckFchange} checked={this.state.checkF}></input> 
                  Food
                  <br></br>

                  <input type="checkbox" name="vendortype" value="Drinks"
                  onChange={this.handleCheckDchange} checked={this.state.checkD}></input> 
                  Drinks
                  <br></br>          
     
                  <input type="checkbox" name="vendortype" value="Music"
                  onChange={this.handleCheckMchange} checked={this.state.checkM}></input> 
                  Music
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="Entertainment"
                  onChange={this.handleCheckEchange} checked={this.state.checkE}></input> 
                  Entertainment
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="Officiant"
                  onChange={this.handleCheckOchange} checked={this.state.checkO}></input> 
                  Officiant
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="Security"
                  onChange={this.handleCheckSchange} checked={this.state.checkS}></input> 
                  Security
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="Florist"
                  onChange={this.handleCheckFLchange} checked={this.state.checkFL}></input> 
                  Florist
                  <br></br>
                  

                  {/*                  
                  <br></br>       
                  <input type="checkbox" name="vendortype" value="Music"></input>
                  Music
                  <br></br>
                  */}
                  <br></br>
                  <input id="submitidUL" type="submit" name="submit" value="Save Changes"></input>        
                </form>  
            </div>
        </div>
      );
    }
  }
  
  export default UpdateAd;