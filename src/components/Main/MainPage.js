import React from "react";
import "./MainPage.css";
import cone from "../../assets/cone.png";

const MainPage = () => {
  return (
    <React.Fragment>
      <img
        src={cone}
        alt="the image of cone"
        width="600"
        height="600"
        className="main-image"
      />
    </React.Fragment>
  );
};

export default MainPage;
