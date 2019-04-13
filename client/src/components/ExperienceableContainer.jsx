import React, { Component } from "react";
import { Cookies } from "react-cookie";
import Experienceable from "./Experienceable";
import ExperienceableService from "../lib/ExperienceableService";
import ExperienceableForm from "./ExperienceableForm";

export default class ExperienceableContainer extends Component {
  constructor() {
    super();
    this.state = {
      hideExperienceableForm: true,
      controlsHidden: !new Cookies().get("j")
    };
  }

  toggleExperienceableForm = () => {
    const { hideExperienceableForm } = this.state;
    this.setState({
      hideExperienceableForm: !hideExperienceableForm
    });
  };

  render() {
    
    const { header, resource, experienceable } = this.props;
    const { controlsHidden, hideExperienceableForm } = this.state;
    return (
      <div className="ui text container">
        <div className="ui hidden divider" />
        <div className="ui center aligned header">
          <h1>
            {header}
            {!controlsHidden && (
              <button
                type="button"
                style={{ marginLeft: "0.3em" }}
                className="circular huge ui icon button"
                onClick={this.toggleExperienceableForm}
              >
                <i className="plus icon" />
              </button>
            )}
          </h1>
        </div>
        {experienceable &&
          experienceable.map(e => (
            <div key={e.id} className="ui center aligned text">
              <Experienceable
                id={e.id}
                experienceable={e}
                resource={resource}
              />
              <div className="ui hidden divider" />
            </div>
          ))}
        {!controlsHidden && !hideExperienceableForm && (
          <ExperienceableForm service={new ExperienceableService(resource)} />
        )}
      </div>
    );
  }
}
