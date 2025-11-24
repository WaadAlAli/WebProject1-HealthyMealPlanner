import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => setOpenLinks(!openLinks);

  return (
    <nav className="bg-green-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center ">
            <Link to="/">
      <span class="font-poppins italic font-medium text-xl text-emerald-600 tracking-wide">
  Nutri<span class="text-gray-900">Plan</span>
</span>





              
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-green-700 hover:text-green-600 font-medium">Home</Link>
            <Link to="/recipes" className="text-green-700 hover:text-green-600 font-medium">Recipes</Link>
            <Link to="/about" className="text-green-700 hover:text-green-600 font-medium">About</Link>
            <Link to="/contact" className="text-green-700 hover:text-green-600 font-medium">Contact</Link>
            <Link to="/planner" className="text-green-700 hover:text-green-600 font-medium">Planner</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleNavbar} className="text-green-700 hover:text-green-600 focus:outline-none">
            <ReorderIcon/>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {openLinks && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 text-green-700 hover:bg-gray-100">Home</Link>
          <Link to="/recipes" className="block px-4 py-2 text-green-700 hover:bg-gray-100">Recipes</Link>
          <Link to="/about" className="block px-4 py-2 text-green-700 hover:bg-gray-100">About</Link>
          <Link to="/contact" className="block px-4 py-2 text-green-700 hover:bg- gray-100">Contact</Link>
          <Link to="/planner" className="block px-4 py-2 text-green-700 hover:bg-gray-100">Planner</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
