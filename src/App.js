import React from "react";
import "./styles.css";
import Navbar from "./components/NavigationBar/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </article>
      </div>
    </React.Fragment>
  );
}

export default App;
