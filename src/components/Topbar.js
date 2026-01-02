// src/components/Topbar.js
import React, {  useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";
export default function Topbar() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const username = location.state?.username;


  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="w-full bg-white dark:bg-gray-800 shadow-md flex justify-between items-center p-4">
      <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
        Welcome {username}
      </h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
      </button>
    </div>
  );
}
