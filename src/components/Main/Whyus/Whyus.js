import React from "react";
import "./Whyus.css";
import img from "../../../assets/whyus.png";

const Whyus = () => {
  return (
    <React.Fragment>
      <div className="main-div">
        <div className="img-div">
          <img className="img-class" src={img}></img>
        </div>
        <div className="text-div">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like)
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Whyus;
