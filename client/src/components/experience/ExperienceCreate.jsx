import React, { Component } from "react";
import ExperienceableService from "../../lib/ExperienceableService";
import ExperienceForm from "./ExperienceForm";

export default class ExperienceCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        title: "",
        start_time: new Date(),
        end_time: new Date(),
        content: ""
      }
    };
    this.service = new ExperienceableService(props.resource);
  }

  onChange = event => {
    const { experience } = this.state;
    experience[event.target.id] = event.target.value;
    this.setState({
      experience
    });
  };

  onSubmit = async event => {
    const { experience } = this.state;
    event.preventDefault();
    this.service.create(experience);
    window.location.reload();
  };

  render() {
    const { resource } = this.props;
    const { experience } = this.state;
    return (
      <div>
        <ExperienceForm
          experience={experience}
          resource={resource}
          onChange={this.onChange}
        />
        <div className="ui hidden divider" />
        <button className="ui button" onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
