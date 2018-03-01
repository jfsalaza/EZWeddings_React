import React from 'react';
import Contact from './Contact';
import Todo from './Todo';
import Chat from './Chat';


class Partner extends React.Component {
    render() {
      return (
        <div style={{textAlign: "center"}}>
          <h1>Partner</h1>
          <Contact/>
          <Todo/>
          <Chat/>
        </div>
      );
    }
  }
  
  export default Partner;