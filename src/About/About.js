import React from "react";
import { Element } from "react-scroll";
import "./About.scss";

class InfoPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Element id="about" name="about">
          <div className="container-fluid info">
            <div className="sec">
              <div className="about">
                <h1 className="display-3 text-center">Short Bio</h1>
                <br />
                <br />
                <br />
                <p class="text-justify bio">
                  <span style={{ fontWeight: "bolder", color: "#000000" }}>
                    Muwonge Nicholus{" "}
                  </span>{" "}
                  is a Full-Stack{" "}
                  <span style={{ fontWeight: "bolder", color: "teal" }}>
                    Software Engineer{" "}
                  </span>{" "}
                  /{" "}
                  <span style={{ fontWeight: "bolder", color: "teal" }}>
                    Web Developer
                  </span>{" "}
                  with over a year of professional experience in{" "}
                  <span style={{ fontWeight: "bolder", color: "#000000" }}>
                    {" "}
                    JavaScript(React) and Python(Django and Flask){" "}
                  </span>
                  .
                  <br />
                  <br />
                  I am passionate about building applications' User interfaces
                  and the optimisation that comes with it. Not limited to this,
                  I also build back end Api(s) in more than one language to be
                  consumed in the frontend. I take strong pride in the work that
                  I do as I strive to do it to the best of my abilities with all
                  the Industry accepted standards.
                  <br />
                  <br />
                  Outside work, I enjoy contributing to open source, singing and
                  watching mobile Phone reviews.
                  <br />
                  <br />
                </p>
              </div>
            </div>
          </div>
        </Element>
      </React.Fragment>
    );
  }
}

export default InfoPage;
