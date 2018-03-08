import React from 'react';
import Business from "./Business"

import "../../public/cogs.jpeg";
import '../../styles/businessSearch.css';

class BusinessSearch extends React.Component {

    constructor(){
      super();
      this.state = {
        search: ''
      };
    }

    updateSearch(event){
      this.setState({search: event.target.value});

    }
    render() {
      return (
      <div>
        <div className="title">
          <img id="title-img" src="../cogs.jpeg" alt="wedding"/>
          <div className="title-centered"><h1>Vendor Search</h1></div>
        </div>

        <div id = "searchBar" style = {{alignContent:'center'}}>
          <input className = "SearchBar" style = {{width: '800px', textAlign:'center'}} id="searchidBS" type="text" placeholder="Search..." 
          value={this.state.search}
          onChange = {this.updateSearch.bind(this)} />
        </div>

        <div id="sresultidBS">
            <Business category = {this.state.search}/>
        </div>
      </div>
      );
    }
  }
  
  export default BusinessSearch;