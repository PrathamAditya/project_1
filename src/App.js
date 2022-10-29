import React from "react";
import "./styles.css";
import Navbar from "./components/NavigationBar/Navbar";
import MainPage from "./components/Main/MainPage";

function App() {
  return (
    <React.Fragment>
      <Navbar> </Navbar>
      <MainPage></MainPage>
    </React.Fragment>
  );
}

export default App;
