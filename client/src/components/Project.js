import React, { Component } from "react";
import MarkdownEditor from "./MarkdownEditor";
import Moment from "moment";

export default class Project extends Component {
  render() {
    let projects = this.props.projects;
    return (
      <div className="ui text">
      <div className="ui hidden divider" />
        <h1 className="ui center aligned header">Projects</h1>
        {projects && projects.map((project) => {
          return (
            <div key={project["id"]} className="ui center aligned text">
              <h2>{project["title"]}</h2>
              <p>{Moment(project["start_time"]).format("MMMM YYYY")} - {Moment(project["end_time"]).format("MMMM YYYY")}</p>
              <MarkdownEditor content={project["content"]}/>
            </div>
          );
        })}
      </div>
    );
  }
}
