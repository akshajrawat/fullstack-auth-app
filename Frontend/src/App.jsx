import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <div className="bg-gray-400 w-[100vw] h-[100vh] flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default App;
