import React, { Component } from "react";
import { Cookies } from "react-cookie";
import Header from "./Header";
import Experience from "./experience/Experience";
import ExperienceCreate from "./experience/ExperienceCreate";
import ExperienceableService from "../lib/ExperienceableService";

export default class Experienceable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideExperienceForm: true,
      controlsHidden: !new Cookies().get("j")
    };
    this.service = new ExperienceableService(props.resource);
  }

  onAddExperience = () => {
    const { hideExperienceForm } = this.state;
    this.setState({
      hideExperienceForm: !hideExperienceForm
    });
  };

  onCreated = experience => {
    return;
  };

  onMoveUp = experience => {
    console.log("Move up", experience);
    this.service.move(experience, "up");
    window.location.reload();
  };

  onMoveDown = experience => {
    console.log("Move down", experience);
    this.service.move(experience, "down");
    window.location.reload();
  };

  render() {
    const { experiences, header, resource } = this.props;
    const { controlsHidden, hideExperienceForm } = this.state;
    return (
      <div className="ui text container">
        <div className="ui hidden divider" />
        <Header
          header={header}
          controlsHidden={controlsHidden}
          onAddExperience={this.onAddExperience}
        />
        {experiences &&
          experiences.map(e => (
            <div key={e.id} className="ui center aligned text">
              <div className="ui hidden divider" />
              <Experience
                experience={e}
                resource={resource}
                onMoveUp={this.onMoveUp}
                onMoveDown={this.onMoveDown}
              />
            </div>
          ))}
        <div className="ui hidden divider" />
        {!hideExperienceForm && (
          <ExperienceCreate resource={resource} onCreated={this.onCreated} />
        )}
      </div>
    );
  }
}
