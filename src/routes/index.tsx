import * as React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/AboutPage";

function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "/about", element: <About /> },
  ]);

  return element;
}
export default Routes;
