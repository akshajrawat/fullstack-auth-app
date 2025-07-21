import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await axios.get("http://localhost:5000/app/user", {
          withCredentials: true,
        });
        setIsAuth(true);
      } catch (error) {
        console.error("Error in protected routes", error.message);
        setIsAuth(false);
      }
    };

    verifyUser();
  }, []);

  if (isAuth === null) return null;

  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
