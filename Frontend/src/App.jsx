import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#FFF9E5]">
      <Toaster position="top-center" reverseOrder={false} />
      <Outlet />
    </div>
  );
};

export default App;
