import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SignUpForm from "../pages/Signup/SignUpForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpForm /> },
    ],
  },
]);

export default router;
