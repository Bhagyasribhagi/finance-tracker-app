import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

const ProtectedRoute : React.FC  = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
