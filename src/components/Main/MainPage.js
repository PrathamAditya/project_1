import React from "react";
import "./MainPage.css";
import cone from "../../assets/cone.png";
import About from "./About/About";
import DAO from "./DAO/DAO";
import Footer from "./Footer/Footer";
import Whyus from "./Whyus/Whyus";

const MainPage = () => {
  return (
    <React.Fragment>
      <About />
      <DAO />
      <Whyus />
      <Footer />
    </React.Fragment>
  );
};

export default MainPage;
