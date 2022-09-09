import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export const PrivateRoute = ({ children,admin }) => {
  const { loggedIn, user } = useAuth();


  if(admin && user.role !== 'admin'){
    return <Navigate to="/" />;
  }


  if (loggedIn) {
    return children;
  }

  return <Navigate to="/" />;
};
