import React, { Component } from "react";
export default class About extends Component {
  render() {
    return (
      <div className="ui text">
        <div className="ui hidden divider" />
        <h1 className="ui center aligned header">James Woo</h1>
        <center>
          <i className="ca flag" />
          <i className="kr flag" />
        </center>
        <p className="ui left aligned">
          Hi there, thanks for taking the time to learn more about me.
          I am a Developer at Shopify for the Platform team and our mission is to power apps on Shopify. 
          I finished my Bachelors of Software Engineering at the University of Victoria.
          My passions include learning, hiking, and space exploration.
        </p>
      </div>
    );
  }
}
