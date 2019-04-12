import React, { Component } from "react";
import MarkdownEditor from "./MarkdownEditor";
import Moment from "moment";
import ExperienceableService from "../lib/ExperienceableService";
import { Cookies } from "react-cookie";
import ExperienceableForm from "./ExperienceableForm";

export default class Experienceable extends Component {
  constructor() {
    super()
    this.toggleExperienceableForm = this.toggleExperienceableForm.bind(this);
    this.state = {
      controlsHidden: !new Cookies().get("j"),
      hideExperienceableForm: true
    }
  }

  toggleExperienceableForm() {
    console.log("test")
    this.setState({
      hideExperienceableForm: !this.state.hideExperienceableForm
    })
    
  }

  render() {
    let header = this.props.header;
    let resource = this.props.resource;
    let experienceable = this.props.experienceable;
    return (
      <div className="ui text container">
        <div className="ui hidden divider" />
        <div className="ui center aligned header">
          <h1>
            {header}
            {!this.state.controlsHidden && 
              <button 
                style={{marginLeft: '0.3em'}} 
                className="circular huge ui icon button"
                onClick={this.toggleExperienceableForm}>
                <i className="plus icon" />
              </button>
            }
          </h1>
        </div>
        {experienceable && experienceable.map((experienceable) => {
          return (
            <div key={experienceable["id"]} className="ui center aligned text">
              <h2><img className="ui mini spaced left image" src={`/${experienceable["image"]}`} alt={experienceable["image"]}></img>{experienceable["title"]}</h2>
              <p>{Moment(experienceable["start_time"]).format("MMMM YYYY")} - {Moment(experienceable["end_time"]).format("MMMM YYYY")}</p>
              <MarkdownEditor 
                id={experienceable["id"]} 
                content={experienceable["content"]}
                controlsHidden={this.state.controlsHidden}
                service={new ExperienceableService(resource)} />
              <div className="ui hidden divider" />
            </div>
          );
        })}
        {
          !this.state.controlsHidden && !this.state.hideExperienceableForm &&
          <ExperienceableForm service={new ExperienceableService(resource)} />
        }
      </div>
    );
  }
}
