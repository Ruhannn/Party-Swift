import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
      path: "/login",
      element:<Login></Login>
    },
      {
      path: "/signup",
      element: <SignUp></SignUp>
    },
      {
      path: "/",
      element:<Home></Home>
    },
  ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
