import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import AuthProvider from "./components/Provider/AuthProvider";
import PrivateRoute from "./components/Route/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/Blog/Blog";
import FAQSection from "./components/FAQSection/FAQSection";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
      {
        path: "/faqSection",
        element: (
          <PrivateRoute>
            <FAQSection></FAQSection>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-right" />
    </AuthProvider>
  </React.StrictMode>
);
