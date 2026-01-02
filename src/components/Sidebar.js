// src/components/Sidebar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Utensils,
  Tags,
  Award,
  Mail,
  Settings,
  Info,
  Star,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Dashboard", icon: <LayoutDashboard />, path: "/dashboard" },
    { name: "Users", icon: <Users />, path: "/admin/users" },
    { name: "Recipes", icon: <Utensils />, path: "/admin/recipes" },
    { name: "Categories", icon: <Tags />, path: "/admin/categories" },
    { name: "Why Choose Us", icon: <Award />, path: "/admin/whychooseus" },
    { name: "Messages", icon: <Mail />, path: "/admin/messages" },
    { name: "Contact", icon: <Settings />, path: "/admin/contact" },
    { name: "About", icon: <Info />, path: "/admin/about" },
    { name: "Testimonials", icon: <Star />, path: "/admin/testimonials" },
    { name: "Logout", icon: <LogOut />, path: "/logout" },
  ];

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden flex justify-end p-4 bg-gray-800">
        <button onClick={() => setOpen(!open)} className="text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-64 bg-gray-800 text-white flex flex-col p-4
        transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:block`}
      >
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center  gap-2 p-2 rounded hover:bg-gray-700 ${
                location.pathname === link.path ? "bg-gray-700" : ""
              }`}
              onClick={() => setOpen(false)} // closes sidebar on mobile after click
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
