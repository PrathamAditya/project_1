import React from "react";
import "./MainPage.css";
import DAO from "./DAO/DAO.js";
import About from "./About/About.js";
import Whyus from "./Whyus/Whyus.js";
import Footer from "./Footer/Footer";

const MainPage = () => {
  return (
    <React.Fragment>
      <About></About>
      <DAO></DAO>
      <Whyus></Whyus>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default MainPage;
