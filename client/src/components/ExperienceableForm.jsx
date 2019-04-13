import React, { Component } from "react";
import MarkdownEditor from "./MarkdownEditor";

export default class ExperienceableForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: props.service,
      title: "",
      startDate: new Date(),
      endDate: new Date(),
      content: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  submit = event => {
    const { title, startDate, endDate, content, service } = this.state;
    event.preventDefault();
    const experienceable = {
      title,
      startDate,
      endDate,
      content
    };
    service.create(experienceable);
    window.location.reload();
  };

  render() {
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>
              Title
              <input
                type="text"
                id="title"
                placeholder="Title"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="field">
            <label>
              Start Date
              <input
                type="date"
                id="startDate"
                placeholder="Start Date"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className="field">
            <label>
              End Date
              <input
                type="date"
                id="endDate"
                placeholder="End Date"
                onChange={this.handleChange}
              />
            </label>
          </div>
          <p>Content</p>
          <MarkdownEditor editing id="content" onChange={this.handleChange} />
          <button type="submit" className="ui button" onClick={this.submit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
