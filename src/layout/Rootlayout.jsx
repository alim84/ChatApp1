import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Topmenu from "../pages/Topmenu";

const Rootlayout = () => {
  return (
    <div>
      <div>
        {" "}
        {/* <Topmenu /> */}
      </div>
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Rootlayout;
