import React, { Component } from "react";
import MarkdownEditor from "./MarkdownEditor";
import Moment from "moment";

export default class Education extends Component {
  render() {
    let educations = this.props.educations;
    return (
      <div className="ui text">
        <div className="ui hidden divider" />
        <h1 className="ui center aligned header">Education</h1>
        {educations && educations.map((education) => {
          return (
            <div key={education["id"]} className="ui center aligned text">
              <h2>{education["title"]}</h2>
              <p>{Moment(education["start_time"]).format("MMMM YYYY")} - {Moment(education["end_time"]).format("MMMM YYYY")}</p>
              <MarkdownEditor content={education["content"]}/>
            </div>
          );
        })}
      </div>
    );
  }
}
