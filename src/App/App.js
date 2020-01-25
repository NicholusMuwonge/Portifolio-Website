import React from "react";
import bl from "./black.png";
import "./App.scss";
// import Nav from "../Navbar/navbar";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <header className="App-headers container-fluid">
          <div className="container-fluid">
            <div className="row">
              <div className="welcome col-md-8 col-xs-8">
                nicks<span style={{ color: "red" }}>.</span>
              </div>
            </div>
          </div>
        </header>
        <br />
        <br />
        <br />
        <br />
        <div className="">
          <div className="intro row">
            <div className="col-md-5 col-xs-6">
              <span id="meet">meet </span>
              <span className="dot">...</span>
              <br />
              <span className="name">Nicholus</span>
              <br />
              <span className="name">
                Muwonge<span className="dot">.</span>
              </span>
              <br />
              <br />
              <span className="slogan">
                " A Passionate Software Engineer & <br />
                <span id="nl">
                  a Code Bugs Bounty Hunter ." <br />
                </span>
              </span>
            </div>
            <div className="new col-md-6 col-xs-6">
              <img src={bl} alt="" className="img" />
            </div>
            <div>
              <div className="col-md">
                <button
                  className="btn btn-md tour"
                  style={{
                    background: "none",
                    color: "yellow",
                    border: "yellow 1px solid",
                    marginTop: "0em",
                    padding: "12px",
                    display: "inline-block"
                  }}
                >
                  {" "}
                  <a
                    href="https://linkedin.com/in/muwonge-nicholus-868468144/"
                    target="tab"
                    style={{ color: "yellow" }}
                  >
                    Take A Quick Tour
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
