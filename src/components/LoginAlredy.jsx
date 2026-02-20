import { Navigate } from "react-router";
import useAuthenStore from "../store/useAuthenStore";

const LoginAlready = ({ children }) => {
  const { authUser } = useAuthenStore();

  // If user is already logged in, redirect to home
  if (authUser) {
    return <Navigate to="/" />;
  }

  // If user is not logged in, show the page (login/register)
  return children;
};

export default LoginAlready;
