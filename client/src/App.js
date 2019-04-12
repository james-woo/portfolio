import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import Main from "./components/Main";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  render() {  
    return (
      <div className="application">
        <Helmet>
          <title>James Woo</title>
          <link rel="shortcut icon" type="image/x-icon" href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARAAAAAAAAABEQAAAAAAAAAREAAAAAAAAAERAAAAAAAAABEBAAAQAAAAEQEQAREAAAARARERERAAABEAEREBEAAAEQABEAEQAAARAAAAARAAABEAAAABEAAAEQAAAAEQAAARAAAAAREAAAAAAAAAERAAAAAAAAABH//wAAP/8AAB//AACP/wAAx/8AAOXvAADkxwAA5AMAAOYTAADnMwAA5/MAAOfzAADn8wAA5/EAAP/4AAD//AAA"/>
        </Helmet>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/auth/login" exact component={Login} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
      
    );
  }
}

export default App;
