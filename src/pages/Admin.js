import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div className="flex  h-full">
      <Sidebar />

      <div className="flex-1 h-full bg-gray-100 dark:bg-gray-800">
        {/* Topbar */}
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
        
          <Topbar />
        </div>
        {/* Page content */}
        <div className="p-4 bg-white  md:p-6 dark:bg-gray-800">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
