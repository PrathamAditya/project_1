import React from "react";
import "./styles.css";
import Navbar from "./components/NavigationBar/Navbar";
import MainPage from "./components/Main/MainPage";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import ApplyPage from "./components/Apply/ApplyPage";
import Footer from "./components/Footer/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/apply",
    element: <ApplyPage />,
  },
]);
function App() {
  return (
    <React.Fragment>
      <Navbar /> 
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      <Footer />
    </React.Fragment>
  );
}
export default App;
