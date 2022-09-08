import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return children;
  }

  return <Navigate to="/" />;
};
