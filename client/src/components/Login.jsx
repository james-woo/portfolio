import React, { Component } from "react";
import { Button, Form, Grid } from "semantic-ui-react";
import { Cookies } from "react-cookie";

export default class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.cookies = new Cookies();
  }

  validateForm = () => {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = async event => {
    console.log("Logging in...");
    const { username, password } = this.state;
    const { history } = this.props;
    event.preventDefault();
    try {
      await window
        .fetch("/auth/login", {
          headers: {
            accepts: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include",
          method: "post",
          body: JSON.stringify({
            authentication: {
              username,
              password
            }
          })
        })
        .then(response => {
          if (response.ok) {
            console.log("Logged in");
            this.cookies.set("j", "w", {
              path: "/",
              secure: process.env.NODE_ENV !== "development"
            });
          } else {
            console.log(`Error: ${response}`);
          }
          history.push("/");
        });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className="login-form">
        {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
        <style>
          {`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Form.Input
                id="username"
                fluid
                autoFocus
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <Form.Input
                id="password"
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
                fluid
                size="large"
              >
                Login
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
