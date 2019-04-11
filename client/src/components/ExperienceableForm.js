import React, { Component } from "react";
import MarkdownEditor from "./MarkdownEditor";

export default class ExperienceableForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      service: props.service,
      title: "",
      startDate: new Date(),
      endDate: new Date(),
      content: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  submit = (event) => {
    event.preventDefault();
    let experienceable = {
      title: this.state.title,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      content: this.state.content
    };
    this.state.service.create(experienceable);
    window.location.reload();
  }

  render() {
    return (
      <div>
        <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input type="text" id="title" placeholder="Title" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Start Date</label>
          <input type="date" id="startDate" placeholder="Start Date" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>End Date</label>
          <input type="date" id="endDate" placeholder="End Date" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label>Content</label>
          <MarkdownEditor editing={true} id="content" onChange={this.handleChange} />
        </div>
        <button className="ui button" onClick={this.submit}>Submit</button>
      </form>
      </div>
      
    )
  }
}