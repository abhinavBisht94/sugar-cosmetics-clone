import React, { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const AuthContext = ({ children }) => {
  const { isLoggedIn } = useContext(UserContext);
  const location = useLocation();

  return isLoggedIn ? (
    { children }
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};

export default AuthContext;
