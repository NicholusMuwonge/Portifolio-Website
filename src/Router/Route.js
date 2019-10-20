import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter  as Router } from "react-router-dom";
import Navbar from '../Navbar/navbar';
import Work from '../Potifolio/Potifolio';
import App from "../App/App";
import Info from "../About/About";
class Routing extends React.Component {
    render(){
        return (
            <React.Fragment>
            {/* <Navbar/> */}
            <Router>
                <Route exact path='/' component={App} />
                <Info/>
                <Work/>
            </Router>
            </React.Fragment>
        );
    }
};


export default Routing;