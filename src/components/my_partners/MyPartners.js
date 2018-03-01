import React from 'react';
import User from './User';
import '../../styles/client_list.css';

class MyPartners extends React.Component {
    render() {
      var account_type = localStorage.getItem("account_type");
      if(account_type == "planner") {
        return (
          <div id="client-list" style={{textAlign: "center"}}>
            <User img="wedding_venue_1.jpg">Venue: Fairbanks Ranch Country Club</User>
            <User img="TACOS.png">Food: Tacos El Gordo</User>
            <User img="banda_ms.jpg">Entertainment: Banda MS</User>
          </div>
        );
      } else if(account_type == "business") {
        return (
          <div id="client-list" style={{textAlign: "center"}}>
            <User img="client2.jpeg">Rosa Melano</User>
            <User img="elver_galarga.jpg">Elver Galarga</User>
            <User img="jane_doe.jpeg">Jane Doe</User>
            <User img="john_smith.jpg">John Smith</User>
          </div>
        );
      } else {
        return (
          <div id="client-list" style={{textAlign: "center"}}>
            <User img="rosa_melano">Rosa Melano</User>
            <User img="elver_galarga">Elver Galarga</User>
          </div>
        );
      }
    }
  }
  
  export default MyPartners;