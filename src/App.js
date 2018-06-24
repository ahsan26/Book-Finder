import React, { Component, Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardContainer, LogInContainer, SignUpContainer } from "./Containers";
import Navigation from "./Components/navigation";
import AuthRequired from "./Hocs/authRequired";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path="/" component={AuthRequired(DashboardContainer)} />
            <Route path="/logIn" component={LogInContainer} />
            <Route path="/signUp" component={SignUpContainer} />
            <Route render={_ => <h1>404 Not Found</h1>} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
