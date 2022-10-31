import React from "react";
import "./DAO.css";
import img from "../../../assets/DAOImage.png";

const DAO = (props) => {
  return (
    <React.Fragment>
      <div className="main-div">
        <div className="text-div">
          <h2>This is heading.</h2>
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
        <div className="img-div">
          <img className="img-class" src={img} alt="This is the img of PI" />
          <p>
            Source of the image:
            <a
              href="https://ethereum.org/en/dao/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              click here.
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DAO;
