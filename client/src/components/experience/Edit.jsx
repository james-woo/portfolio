import React, { Component } from "react";
import MarkdownEditor from "./MarkdownEditor";
import Moment from "moment";
import ExperienceableService from "../../lib/ExperienceableService";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      service: props.service,
      experienceable: props.experienceable
    };
    this.service = new ExperienceableService(props.resource);
  }

  onChange = event => {
    this.props.onChange(event);
  };

  render() {
    const { experienceable } = this.state;
    const startDate =
      experienceable.start_time == null
        ? ""
        : Moment(experienceable.start_time).format("YYYY-MM-DD");
    const endDate =
      experienceable.end_time == null
        ? ""
        : Moment(experienceable.end_time).format("YYYY-MM-DD");
    return (
      <div>
        <form className="ui form">
          <div className="field">
            <label>
              Title
              <input
                type="text"
                id="title"
                defaultValue={experienceable.title}
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
                defaultValue={experienceable.image}
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
            id={experienceable.id}
            content={experienceable.content}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}
