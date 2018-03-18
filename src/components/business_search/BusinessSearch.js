import React from 'react';
import Business from "./Business";
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
      let sentParameter = this.props.params.type;
      console.log(sentParameter);
      return (
      <div>
        <div className="title">
          <img id="title-img" src="../cogs.jpeg" alt="wedding"/>
          <div className="title-centered"><h1>Vendor Search</h1></div>
        </div>
        <div id="sresultidBS">
            <Business category = {sentParameter}/>
        </div>
      </div>
      );
    }
  }
  
  export default BusinessSearch;