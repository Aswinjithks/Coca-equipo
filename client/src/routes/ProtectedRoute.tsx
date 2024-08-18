import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ReactElement;
  token: string | null;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, token }) => {
  const location = useLocation();

  if (location.pathname === "/landing" && token) {
    return <Navigate to="/home" replace />;
  }

  return token ? element : <Navigate to="/landing" state={{ from: location }} replace />;
};

export default ProtectedRoute;
