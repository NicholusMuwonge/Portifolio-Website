/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.scss";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="horizontal navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Scroll.ScrollLink
                  spy={true}
                  smooth={true}
                  duration={500}
                  to="#about"
                >
                  {" "}
                  Home <span className="sr-only">(current)</span>
                </Scroll.ScrollLink>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="#">
                  Potifolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
