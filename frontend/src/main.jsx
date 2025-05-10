import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicRoutes from "./Helpers/publicRoutes.jsx";
import PrivateRoutes from "./Helpers/privateRoutes.jsx";
import App from "./Components/Pages/App.jsx";
import Landing from "./Components/Pages/Landing.jsx";
import Login from "./Components/Pages/Login.jsx";
import Signup from "./Components/Pages/Signup.jsx";
import NotFound from "./Components/Pages/NotFound.jsx";
import "./index.css";
import ChangePassword from "./Components/Pages/ChangePassword.jsx";
import DeleteAccount from "./Components/Pages/DeleteAccount.jsx";
import ChangePersonal from "./Components/Pages/ChangePersonal.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<PublicRoutes />} >
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route element={<PrivateRoutes />} >
        <Route path="/app/*" element={<App />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/change-name" element={<ChangePersonal />} />
        <Route path="/change-email" element={<ChangePersonal />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
