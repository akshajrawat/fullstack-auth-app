import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
