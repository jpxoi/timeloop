import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { checkAuth } from "./checkAuth";

function PublicRoutes() {
  const token = checkAuth();
  return token ? <Navigate to="/app" /> : <Outlet />;
}

export default PublicRoutes;
