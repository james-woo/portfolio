import React, { Component } from "react";
import MarkdownEditor from "./MarkdownEditor";
import Moment from "moment";

export default class Employment extends Component {
  render() {
    let jobs = this.props.jobs;
    return (
      <div className="ui text">
        <div className="ui hidden divider" />
        <h1 className="ui center aligned header">Employment</h1>
        {jobs && jobs.map((job) => {
          return (
            <div key={job["id"]} className="ui center aligned text">
              <h2>{job["title"]}</h2>
              <p>{Moment(job["start_time"]).format("MMMM YYYY")} - {Moment(job["end_time"]).format("MMMM YYYY")}</p>
              <MarkdownEditor content={job["content"]}/>
            </div>
          );
        })}
      </div>
    );
  }
}
