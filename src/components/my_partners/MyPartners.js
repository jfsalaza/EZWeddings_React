import React from 'react';
import User from './User';
import '../../styles/client_list.css';

class MyPartners extends React.Component {
    render() {
      return (
        <div id="client-list" style={{textAlign: "center"}}>
          <User img="rosa_melano">Rosa Melano</User>
          <User img="elver_galarga">Elver Galarga</User>
        </div>
      );
    }
  }
  
  export default MyPartners;