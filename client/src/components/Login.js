import React, { Component } from "react";
import { Button, Form, Grid } from "semantic-ui-react"
import { Redirect } from 'react-router-dom'

export default class LoginForm extends Component {
  constructor() {
    super();
    this.validateForm = this.validateForm.bind(this);
    this.state = {
      username: "",
      password: ""
    }
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    console.log("Logging in...")
    event.preventDefault();
    try {
      await window.fetch("http://localhost:3001/auth/login", {
        headers:{
          "accepts":"application/json"
        },
        method: "post",
        body: JSON.stringify({
          "session": {
            "username": this.state.username,
            "password": this.state.password 
          }
        })
      }).then(login => {
        if (login) {
          alert("Logged in");
        } else {
          alert("Not logged in");
        }
      })
    }
    catch (e) {
      console.log(e);
    }
    return <Redirect to='/' />
  }

  render() {
    return (
      <div className="login-form">
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>
        <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Form.Input 
                fluid 
                icon="user" 
                iconPosition="left" 
                placeholder="Username"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />
              <Button
                disabled={!this.validateForm}
                type="submit"
                fluid size="large" 
              >
                Login
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
