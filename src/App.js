import React from "react";
import "./styles.css";
import Navbar from "./components/NavigationBar/Navbar";
import MainPage from "./components/Main/MainPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Projects from "./components/Projects/Projects";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);
function App() {
  return (
    <React.Fragment>
      <Navbar> </Navbar>
      <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    </React.Fragment>
  );
}
export default App;
