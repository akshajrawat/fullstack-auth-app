import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import Dashboard from "../Pages/Dashboard";
import MainLayout from "../Layout/MainLayout";
import ProtectedRoutes from "./ProtectedRoutes";
import AdminDashboard from "../Pages/AdminDashboard";

const Routing = () => {
  return (
    <Routes>
      {/* app */}
      <Route path="/" element={<App />}>
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* protected routes */}
        <Route element={<ProtectedRoutes />}>
          {/* Routes following main layout */}
          <Route element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="adminDashboard" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Routing;
