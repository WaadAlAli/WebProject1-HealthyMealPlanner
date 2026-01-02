import React from "react";
import { Facebook, Instagram, Twitter, GitHub, Send } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700 py-10 mt-10 border-t border-green-200">
      <div className="max-w-6xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-4 gap-3">
        
        {/* Brand section */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-3">MealPlanner</h2>
          <p className="text-sm leading-relaxed">
            Plan your meals effortlessly, eat healthy, and save time.
            Discover recipes designed to fit your lifestyle.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-600 transition">Home</Link>
            </li>
            <li>
              <Link to="/planner" className="hover:text-green-600 transition">Planner</Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-green-600 transition">Recipes</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-600 transition">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-green-600 transition">Login</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to get weekly meal tips and updates.
          </p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md transition"
            >
              <Send fontSize="small" />
            </button>
          </form>
        </div>

        {/* Social links */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-green-600 transition"><Facebook fontSize="inherit" /></a>
            <a href="#" className="hover:text-green-600 transition"><Instagram fontSize="inherit" /></a>
            <a href="#" className="hover:text-green-600 transition"><Twitter fontSize="inherit" /></a>
            <a href="#" className="hover:text-green-600 transition"><GitHub fontSize="inherit" /></a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-green-200 pt-4">
        © 2025 <span className="font-semibold text-green-700">MealPlanner</span>. 
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;