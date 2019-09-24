import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch, HashRouter  as Router } from "react-router-dom";
import App from "../App/App";
// import Navbar from "../Navbar/navbar"

class Routing extends React.Component {
    render(){
        return (
            <React.Fragment>
            {/* <Navbar/> */}
            <Router>
                <Route exact path='/' component={App} />
            </Router>
            </React.Fragment>
        );
    }
};


export default Routing;