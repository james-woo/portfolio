import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import About from "./About";
import Experienceable from "./Experienceable";
import Footer from "./Footer";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      experiences: {}
    };
    this.getExperiences = this.getExperiences.bind(this);
  }

  componentDidMount() {
    this.getExperiences();
  }

  getExperiences() {
    this.fetch("/api/experiences").then(experiences => {
      if (experiences) {
        this.setState({ experiences });
      } else {
        this.setState({ experiences: [] });
      }
    });
  }

  fetch = async endpoint => {
    try {
      const response = await window.fetch(endpoint);
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  };

  render() {
    const { experiences } = this.state;
    return (
      <Container>
        <About />
        <Experienceable
          experienceable={experiences.jobs}
          header="Employment"
          resource="job"
        />
        <Experienceable
          experienceable={experiences.projects}
          header="Projects"
          resource="project"
        />
        <Experienceable
          experienceable={experiences.educations}
          header="Education"
          resource="education"
        />
        <Footer />
      </Container>
    );
  }
}
