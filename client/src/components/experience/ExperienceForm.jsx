import React, { Component } from "react";
import MarkdownEditor from "../markdown/MarkdownEditor";
import Moment from "moment";
import ExperienceableService from "../../lib/ExperienceableService";

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      service: props.service,
      experience: props.experience
    };
    this.service = new ExperienceableService(props.resource);
  }

  onChange = event => {
    this.props.onChange(event);
  };

  render() {
    const { experience } = this.state;
    const startDate =
      experience.start_time == null
        ? ""
        : Moment(experience.start_time).format("YYYY-MM-DD");
    const endDate =
      experience.end_time == null
        ? ""
        : Moment(experience.end_time).format("YYYY-MM-DD");
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>
              Title
              <input
                type="text"
                id="title"
                defaultValue={experience.title}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="field">
            <label>
              Image
              <input
                type="text"
                id="image"
                defaultValue={experience.image}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="field">
            <label>
              Start Date
              <input
                type="date"
                id="start_time"
                defaultValue={startDate}
                onChange={this.onChange}
              />
            </label>
          </div>
          <div className="field">
            <label>
              End Date
              <input
                type="date"
                id="end_time"
                defaultValue={endDate}
                onChange={this.onChange}
              />
            </label>
          </div>
          <p>Content</p>
          <MarkdownEditor
            id={experience.id}
            content={experience.content}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}
