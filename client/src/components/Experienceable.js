import React, { Component } from "react";
import MarkdownEditor from "./MarkdownEditor";
import Moment from "moment";
import ExperienceableService from "../lib/ExperienceableService";

export default class Experienceable extends Component {
  render() {
    let header = this.props.header;
    let resource = this.props.resource;
    let experienceable = this.props.experienceable;
    return (
      <div className="ui text">
        <div className="ui hidden divider" />
        <div className="ui center aligned header">
          <h1>{header}</h1>
        </div>
        {experienceable && experienceable.map((experienceable) => {
          return (
            <div key={experienceable["id"]} className="ui center aligned text">
              <h2>{experienceable["title"]}</h2>
              <p>{Moment(experienceable["start_time"]).format("MMMM YYYY")} - {Moment(experienceable["end_time"]).format("MMMM YYYY")}</p>
              <MarkdownEditor id={experienceable["id"]} content={experienceable["content"]} service={new ExperienceableService(resource)} />
            </div>
          );
        })}
      </div>
    );
  }
}
