import React, { Component } from "react";
import { Cookies } from "react-cookie";
import Title from "./Title";
import Date from "./Date";
import Content from "./Content";
import EditController from "./EditController";
import Edit from "./Edit";
import ExperienceableService from "../../lib/ExperienceableService";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlsHidden: !new Cookies().get("j"),
      experienceable: props.experienceable
    };
    this.service = new ExperienceableService(props.resource);
  }

  onEdit = () => {
    const { editing } = this.state;
    this.setState({
      editing: !editing
    });
  };

  onSave = async () => {
    const { experienceable } = this.state;
    console.log(experienceable);
    this.service.update(experienceable.id, experienceable);
    window.location.reload();
  };

  onDelete = () => {
    if (window.confirm("Delete?")) {
      const { experienceable } = this.state;
      this.service.delete(experienceable.id);
      window.location.reload();
    }
  };

  onChange = event => {
    const { experienceable } = this.state;
    experienceable[event.target.id] = event.target.value;
    this.setState({
      experienceable
    });
  };

  render() {
    const { resource, experienceable } = this.props;
    const { editing, controlsHidden } = this.state;
    return (
      <div>
        {!editing && (
          <div>
            <Title experienceable={experienceable} />
            <Date experienceable={experienceable} />
            <Content experienceable={experienceable} />
          </div>
        )}
        {editing && (
          <Edit
            experienceable={experienceable}
            resource={resource}
            onChange={this.onChange}
          />
        )}
        {!controlsHidden && (
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
