import React, { Component } from "react";

export default class About extends Component {
  onLinkedIn = () => {
    window.open("https://www.linkedin.com/in/james-woo/", "_blank");
  };

  onGithub = () => {
    window.open("https://github.com/james-woo", "_blank");
  };

  render() {
    return (
      <div className="ui text container">
        <div className="ui hidden divider" />
        <h1 className="ui center aligned header">James Woo</h1>
        <center>
          <i className="ca flag" />
          <i className="kr flag" />
        </center>
        <span role="img" aria-label="passions">
          Hey there, thanks for taking the time to learn more about me. I am a
          Developer at Shopify for the Platform team and our mission is to power
          apps on Shopify. I finished my Bachelors of Software Engineering at
          University of Victoria. My passions include learning 📖, hiking 🌲,
          and space space exploration 🚀.
        </span>
        <center>
          <button
            className="ui circular linkedin icon button"
            onClick={this.onLinkedIn}
          >
            <i className="linkedin icon" />
          </button>
          <button
            className="ui circular github icon button"
            onClick={this.onGithub}
          >
            <i className="github icon" />
          </button>
        </center>
      </div>
    );
  }
}
