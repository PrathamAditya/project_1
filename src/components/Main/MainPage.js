import React from "react";
import "./MainPage.css";
import About from "./About/About";
import DAO from "./DAO/DAO";
import Whyus from "./Whyus/Whyus";

const MainPage = () => {
  return (
    <React.Fragment>
      <About />
      <DAO />
      <Whyus />
    </React.Fragment>
  );
};

export default MainPage;
