import { createBrowserRouter, Navigate } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LoginAlreadty from "../components/LoginAlredy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <LoginAlreadty>
            <Home />
          </LoginAlreadty>
        ),
      },
      {
        path: "login",
        element: (
          <LoginAlreadty>
            <Login />
          </LoginAlreadty>
        ),
      },
      {
        path: "register",
        element: (
          <LoginAlreadty>
            <Register />
          </LoginAlreadty>
        ),
      },
    ],
  },
]);

export default router;
