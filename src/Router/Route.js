import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import Work from "../Potifolio/Potifolio";
import App from "../App/App";
import Info from "../About/About";
import Recommend from "../Recomendation/Recommendation";

class Routing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route exact path="/" component={App} />
          <Info path="/about" component={Info} />
          <Work />
          <Recommend />
        </Router>
      </React.Fragment>
    );
  }
}

export default Routing;
