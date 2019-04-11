import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

export default class Markdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      source: props.source
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      source: newProps.source
    })
  }

  render() {
    const markdownAreaStyle = {
      border: "none",
      backgroundColor: "#efefef",
      overflowY: "hidden",
      padding: "0.5rem",
      resize: "none",
      boxShadow: "2px 2px 0px 0px #eee",
      width: "100%",
      height: "100%"
    }
    return (
      <div style={markdownAreaStyle}>
        <ReactMarkdown source={this.state.source} />
      </div>
    );
  }
}