import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Customer } from "./Customer";
import { NoMatch } from "./NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/customer" component={Customer} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
