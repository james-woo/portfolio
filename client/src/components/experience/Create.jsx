import React, { Component } from "react";
import Edit from "./Edit";
import ExperienceableService from "../../lib/ExperienceableService";

export default class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experienceable: {
        title: "",
        start_time: new Date(),
        end_time: new Date(),
        content: ""
      }
    };
    this.service = new ExperienceableService(props.resource);
  }

  onChange = event => {
    const { experienceable } = this.state;
    experienceable[event.target.id] = event.target.value;
    this.setState({
      experienceable
    });
  };

  onSubmit = async event => {
    const { experienceable } = this.state;
    event.preventDefault();
    this.service.create(experienceable);
    window.location.reload();
  };

  render() {
    const { resource } = this.props;
    const { experienceable } = this.state;
    return (
      <div>
        <Edit
          experienceable={experienceable}
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
