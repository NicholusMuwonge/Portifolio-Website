/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./navbar.scss";


function Navbar(){
        return(
            <React.Fragment>
                <nav className="horizontal navbar navbar-expand-lg">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-a" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#">Potifolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-a" href="#">Contact</a>
                    </li>
                    </ul>
                </div>
                </nav>
            </React.Fragment>
        );
    }

export default Navbar;