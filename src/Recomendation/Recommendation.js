import React from "react";
import "./Recommendation.scss";
import fb1 from "./fb1.svg";
import Tw from "./Tw.svg";
import git from "./git.svg";
import gmail from "./gmail.svg";
import li from "./li.svg";

class Recommend extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid sliders">
          <h3 className="display-4 center-text">Connect</h3>
          <hr />
          <br />
          <p className="center-text social">
            {" "}
            <a
              href="https://linkedin.com/in/muwonge-nicholus-868468144/"
              target="tab"
            >
              <img src={li} alt="" style={{ height: "8em", width: "8em" }} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=nicholusmuwonge@gmail.com"
              target="_blank tab"
            >
              <img src={gmail} alt="" style={{ height: "8em", width: "8em" }} />
            </a>
            <a href="https://github.com/NicholusMuwonge/" target="tab">
              <img src={git} alt="" style={{ height: "8em", width: "8em" }} />
            </a>
            <a href="https://github.com/NicholusMuwonge/" target="tab">
              <img src={fb1} alt="" style={{ height: "8em", width: "8em" }} />
            </a>
            <a href="https://twitter.com/mwngnchls?s=09" target="tab">
              <img src={Tw} alt="" style={{ height: "8em", width: "8em" }} />
            </a>
          </p>
        </div>

        <div class="footer">
          <p>Designed by Muwonge Nicholus .</p>
          <p>Thanks for visiting !!</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Recommend;
