import React from 'react';
import User from './User';
import '../../styles/client_list.css';

class MyPartners extends React.Component {
    render() {
      return (
        <div id="client-list" style={{textAlign: "center"}}>
          <h1>MyPartners</h1>
          <p>This is the my partners page, will list the businesses connected with if logged in as a planner,
              will list the clients connected with if logged in as a business. Previously businesses_list.html
              and clients_list.html.
          </p>
          <User img="../../img/rosa_melano.jpeg">Rosa Melano</User>
          <User img="../../img/elver_galarga.jpeg">Elver Galarga</User>
        </div>
      );
    }
  }
  
  export default MyPartners;