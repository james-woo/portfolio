import React, { Component } from "react";
import { Cookies } from "react-cookie";
import ExperienceTitle from "./ExperienceTitle";
import ExperienceDate from "./ExperienceDate";
import ExperienceContent from "./ExperienceContent";
import EditController from "./EditController";
import ExperienceableService from "../../lib/ExperienceableService";
import ExperienceForm from "./ExperienceForm";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlsHidden: !new Cookies().get("j"),
      experience: props.experience
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
    const { experience } = this.state;
    this.service.update(experience);
    window.location.reload();
  };

  onDelete = () => {
    if (window.confirm("Delete?")) {
      const { experience } = this.state;
      this.service.delete(experience.id);
      window.location.reload();
    }
  };

  onChange = event => {
    const { experience } = this.state;
    experience[event.target.id] = event.target.value;
    this.setState({
      experience
    });
  };

  onMoveUp = () => {
    const { experience } = this.state;
    const { onMoveUp } = this.props;
    onMoveUp(experience);
  };

  onMoveDown = () => {
    const { experience } = this.state;
    const { onMoveDown } = this.props;
    onMoveDown(experience);
  };

  render() {
    const { resource, experience } = this.props;
    const { editing, controlsHidden } = this.state;
    return (
      <div>
        {!editing && (
          <div>
            <ExperienceTitle experience={experience} />
            <ExperienceDate experience={experience} />
            <ExperienceContent experience={experience} />
          </div>
        )}
        {editing && (
          <ExperienceForm
            experience={experience}
            resource={resource}
            onChange={this.onChange}
          />
        )}
        {!controlsHidden && (
          <EditController
            onEdit={this.onEdit}
            onSave={this.onSave}
            onDelete={this.onDelete}
            onMoveUp={this.onMoveUp}
            onMoveDown={this.onMoveDown}
          />
        )}
      </div>
    );
  }
}
