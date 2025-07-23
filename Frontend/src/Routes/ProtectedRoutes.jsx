import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useFetch from "../Utils/useFetch";
import toast from "react-hot-toast";

const ProtectedRoutes = () => {
  const location = useLocation();
  const { user, exist } = useFetch();

  if (exist === null)
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl font-semibold text-gray-600">
        Checking authentication...
      </div>
    );

  if (location.pathname === "/adminDashboard") {
    if (user.role === "admin") {
      return <Outlet />;
    } else {
      toast.error("Only admin can access this Realm ;(");
      return <Navigate to="/dashboard" replace />;
    }
  }
  return exist ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
