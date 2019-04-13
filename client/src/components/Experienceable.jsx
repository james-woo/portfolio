import React, { Component } from "react";
import { Cookies } from "react-cookie";
import Moment from "moment";
import MarkdownEditor from "./MarkdownEditor";
import EditController from "./EditController";
import ExperienceableService from "../lib/ExperienceableService";

export default class Experienceable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      editing: false,
      content: props.experienceable.content
    };
    this.service = new ExperienceableService(props.resource);
    this.controlsHidden = !new Cookies().get("j");
  }

  onChange = event => {
    this.setState({
      content: event.target.value
    });
  };

  onEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  onSave = async () => {
    const { id, content } = this.state;
    this.service.update(id, content);
    window.location.reload();
  };

  onDelete = () => {
    const { id } = this.state;
    this.service.delete(id);
    window.location.reload();
  };

  render() {
    const { experienceable } = this.props;
    const { editing } = this.state;
    return (
      <div>
        <h2>
          <img
            className="ui mini spaced left image"
            src={`/${experienceable.image}`}
            alt={experienceable.image}
          />
          {experienceable.title}
        </h2>
        <p>
          {`${Moment(experienceable.start_time).format("MMMM YYYY")} - ${Moment(
            experienceable.end_time
          ).format("MMMM YYYY")}`}
        </p>
        <MarkdownEditor
          id={experienceable.id}
          content={experienceable.content}
          editing={editing}
          onChange={this.onChange}
        />
        {!this.controlsHidden && (
          <EditController
            onEdit={this.onEdit}
            onSave={this.onSave}
            onDelete={this.onDelete}
          />
        )}
      </div>
    );
  }
}
