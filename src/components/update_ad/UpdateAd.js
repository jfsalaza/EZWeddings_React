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
                  checkV: true,
                  checkO: false,
                  checkDC: false,
                  checkFD: false,
                  checkC: false,
                  checkR: false,
                  checkT: false,
                  checkE: false,
                  checkCL: false,
                  checkHM: false,
                  checkPV: false,
                  categories: []
                 };

    this.handleTitlechange = this.handleTitlechange.bind(this);
    this.handleNamechange = this.handleNamechange.bind(this);
    this.handleDescriptionchange = this.handleDescriptionchange.bind(this);
    this.handleEmailchange = this.handleEmailchange.bind(this);
    this.handlePnumberchange = this.handlePnumberchange.bind(this);
    
    this.handleCheckVchange = this.handleCheckVchange.bind(this);
    this.handleCheckOchange = this.handleCheckOchange.bind(this);
    this.handleCheckDCchange = this.handleCheckDCchange.bind(this);
    this.handleCheckFDchange = this.handleCheckFDchange.bind(this);
    this.handleCheckCchange = this.handleCheckCchange.bind(this);
    this.handleCheckRchange = this.handleCheckRchange.bind(this);
    this.handleCheckTchange = this.handleCheckTchange.bind(this);
    this.handleCheckEchange = this.handleCheckEchange.bind(this);
    this.handleCheckCLchange = this.handleCheckCLchange.bind(this);
    this.handleCheckHMchange = this.handleCheckHMchange.bind(this);
    this.handleCheckPVchange = this.handleCheckPVchange.bind(this);
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
    
  handleCheckVchange(event) {
    this.setState({checkV: !(this.state.checkV)});
  }  

  handleCheckOchange(event) {
    this.setState({checkO: !(this.state.checkO)});
  }  

  handleCheckDCchange(event) {
    this.setState({checkDC: !(this.state.checkDC)});
  }  

  handleCheckFDchange(event) {
    this.setState({checkFD: !(this.state.checkFD)});
  }  

  handleCheckCchange(event) {
    this.setState({checkC: !(this.state.checkC)});
  }  

  handleCheckRchange(event) {
    this.setState({checkR: !(this.state.checkR)});
  }  

  handleCheckTchange(event) {
    this.setState({checkT: !(this.state.checkT)});
  }  

  handleCheckEchange(event) {
    this.setState({checkE: !(this.state.checkE)});
  }  

  handleCheckCLchange(event) {
    this.setState({checkCL: !(this.state.checkCL)});
  }  

  handleCheckHMchange(event) {
    this.setState({checkHM: !(this.state.checkHM)});
  }  

  handleCheckPVchange(event) {
    this.setState({checkPV: !(this.state.checkPV)});
  }    

  handleSubmit(event) {
    event.preventDefault();

    this.state.categories = [];
    if(this.state.checkV){
      this.state.categories.push('venues');
    }
    if(this.state.checkO){
      this.state.categories.push('officiant');
    }
    if(this.state.checkDC){
      this.state.categories.push('decorations');
    }
    if(this.state.checkFD){
      this.state.categories.push('foodNdrinks');
    }
    if(this.state.checkC){
      this.state.categories.push('cake');
    }
    if(this.state.checkR){
      this.state.categories.push('rings');
    }        
    if(this.state.checkT){
      this.state.categories.push('transportation');
    }
    if(this.state.checkE){
      this.state.categories.push('entertainment');
    }    
    if(this.state.checkCL){
      this.state.categories.push('clothing');
    }
    if(this.state.checkHM){
      this.state.categories.push('hairNmakeup');
    }    
    if(this.state.checkPV){
      this.state.categories.push('photoNvideo');
    }

    //console.log(this.state.categories);
    localStorage.setItem("updated_Ad",JSON.stringify(this.state));          
    browserHistory.push('/business_ad'); 
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
                  <input type="checkbox" name="vendortype" value="Venues" 
                  onChange={this.handleCheckVchange} checked={this.state.checkV}></input> 
                  Venues
                  <br></br>


                  <input type="checkbox" name="vendortype" value="Officiant"
                  onChange={this.handleCheckOchange} checked={this.state.checkO}></input> 
                  Officiant
                  <br></br>

                  <input type="checkbox" name="vendortype" value="decorations"
                  onChange={this.handleCheckDCchange} checked={this.state.checkDC}></input> 
                  Decorations
                  <br></br>          
     
                  <input type="checkbox" name="vendortype" value="foodNdrinks"
                  onChange={this.handleCheckFDchange} checked={this.state.checkFD}></input> 
                  Food and Drinks
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="cake"
                  onChange={this.handleCheckCchange} checked={this.state.checkC}></input> 
                  Cake
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="rings"
                  onChange={this.handleCheckRchange} checked={this.state.checkR}></input> 
                  Rings
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="transportaion"
                  onChange={this.handleCheckTchange} checked={this.state.checkT}></input> 
                  Transportaion
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="entertainment"
                  onChange={this.handleCheckEchange} checked={this.state.checkE}></input> 
                  Entertainment
                  <br></br>

                  <input type="checkbox" name="vendortype" value="clothing"
                  onChange={this.handleCheckCLchange} checked={this.state.checkCL}></input> 
                  Clothing
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="hairNmakeup"
                  onChange={this.handleCheckHMchange} checked={this.state.checkHM}></input> 
                  Hair and Makeup
                  <br></br>
                
                  <input type="checkbox" name="vendortype" value="PhotoNvideo"
                  onChange={this.handleCheckPVchange} checked={this.state.checkPV}></input> 
                  Photo and Video
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