// Navbar.js
import "./Navbar.css";
import ReactDOM from "react-dom";
import React, { useState } from "react";

const NavbarRoot = (props) => {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        TheDAO
      </a>

      <div className={"navigation-menu expanded"}>
        <ul>
          <li>
            <a className="each-link" href="/projects">
              Projects
            </a>
          </li>
          <li>
            <a className="each-link apply" href="/apply">
              Apply
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <NavbarRoot />,
        document.getElementById("navbar-root")
      )}
    </React.Fragment>
  );
};

export default Navbar;
