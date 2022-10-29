import React from "react";
import "./MainPage.css";
import DAO from "./DAO/DAO.js";
import About from "./About/About.js";

const MainPage = () => {
  return (
    <React.Fragment>
      <About></About>
      <DAO></DAO>
    </React.Fragment>
  );
};

export default MainPage;
