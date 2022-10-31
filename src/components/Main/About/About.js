import React from "react";
import "./About.css";
import eyebase from "../../../assets/eyebase.png";
import eyetop from "../../../assets/eyetop.png";
import { useEffect, useState } from "react";

const eyes = document.querySelectorAll(".eye-top");
function MousePosition() {
  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePos;
}

const About = () => {
  return (
    <React.Fragment>
      <div className="main-eye-class">
        <img src={eyebase} alt="eye-base" className="eye-base" />
        <img src={eyetop} alt="eye-top-left" className="eye-top left" />
        <img src={eyetop} alt="eye-top-right" className="eye-top right" />
        <h2 className="about-text">This is about us on main page.</h2>
      </div>
    </React.Fragment>
  );
};

export default About;
