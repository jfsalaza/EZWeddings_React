import React from 'react';
class Settings extends React.Component {
    render() {
      return (
        <div>
          <h1>Settings</h1>
          <p>This is the settings page for whoever is logged in.
              Will use condtional rendering depending on who is logged in (business or planner).
              Previously planner_settings.html and business_settings.html.
          </p>
        </div>
      );
    }
  }
  
  export default Settings;