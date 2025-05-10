import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { checkAuth } from "./checkAuth";

function PrivateRoutes() {
  const token = checkAuth();
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
