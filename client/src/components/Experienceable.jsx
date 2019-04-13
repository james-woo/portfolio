import React, { Component } from "react";
import { Cookies } from "react-cookie";
import Header from "./Header";
import Experience from "./experience/Experience";
import Create from "./experience/Create";

export default class Experienceable extends Component {
  constructor() {
    super();
    this.state = {
      hideExperienceableForm: true,
      controlsHidden: !new Cookies().get("j")
    };
  }

  onAddExperience = () => {
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
        <Header
          header={header}
          controlsHidden={controlsHidden}
          onAddExperience={this.onAddExperience}
        />
        {experienceable &&
          experienceable.map(e => (
            <div key={e.id} className="ui center aligned text">
              <div className="ui hidden divider" />
              <Experience experienceable={e} resource={resource} />
            </div>
          ))}
        <div className="ui hidden divider" />
        {!hideExperienceableForm && <Create resource={resource} />}
      </div>
    );
  }
}
