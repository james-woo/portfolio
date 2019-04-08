import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {  
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/auth/login" exact component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
