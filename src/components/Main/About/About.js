import React from "react";
import "./About.css";
import eyebase from "../../../assets/eyebase.png";
import eyetop from "../../../assets/eyetop.png";
import { useEffect, useState } from "react";


function angle(cx,cy,x,ey){
  const dy=ey-cy;
  const dx=x-cx;
  const theta=Math.atan2(dy,dx);
  return theta*180/Math.PI;
}

const About = () => {
  const [radi,setradi]=useState(0);
  document.addEventListener("mousemove", (e) => {
    const eye = document.getElementById("eyes");
    const mouseX=e.clientX;
    const mouseY=e.clientY;
    const rekt=eye.getBoundingClientRect();
    const eyeX=rekt.left+rekt.width/2;
    const eyeY=rekt.top+rekt.height/2;
    const rad=angle(eyeX,eyeY,mouseX,mouseY);
    setradi(rad);
    const eyes= document.querySelectorAll(".eye-top");
    console.log(radi);
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${180+90+radi}deg)`;
    });
  
  });

  return (
    <React.Fragment>
      <div className="main-eye-class">
        <div id="eyes" >
        <img src={eyebase} alt="eye-base" className="eye-base" />
        <img src={eyetop} alt="eye-top-left" className="eye-top left" />
        <img src={eyetop} alt="eye-top-right" className="eye-top right" />
        </div>
        <h2 className="about-text">This is about us on main page.</h2>
      </div>

      
    </React.Fragment>
  );
};

export default About;
