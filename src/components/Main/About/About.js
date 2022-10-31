import React from "react";
import "./About.css";
import cone from "../../../assets/cone.png";

const About = () => {
  return (
    <React.Fragment>
      <img
        src={cone}
        alt="the image of cone"
        width="600"
        height="600"
        className="main-image"
      />
      <h2 className="about-text">This is about us on main page.</h2>
    </React.Fragment>
  );
};

export default About;
