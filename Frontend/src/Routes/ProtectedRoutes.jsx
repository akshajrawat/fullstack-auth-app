import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import useFetch from "../Utils/useFetch";
import toast from "react-hot-toast";

const ProtectedRoutes = () => {
  const location = useLocation();
  const { user, exist } = useFetch();
  const navigate = useNavigate();
  const [authCheckComplete, setauthCheckComplete] = useState(false);

  useEffect(() => {
    if (exist === false) {
      navigate("/", { replace: true });
      return;
    }

    if (exist && location.pathname === "/adminDashboard") {
      if (user.role !== "admin") {
        toast.error("Only admin can access this Realm ;(");
        navigate("/dashboard", { replace: true });
      }
    }

    setauthCheckComplete(true);
  }, [location.pathname, user, exist, navigate]);

  if (exist === null || !authCheckComplete)
    return (
      <div className="w-full h-screen flex justify-center items-center text-xl font-semibold text-gray-600">
        Checking authentication...
      </div>
    );

  return exist ? <Outlet /> : null;
};

export default ProtectedRoutes;
