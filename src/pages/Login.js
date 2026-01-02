import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Food from "../assets/health.jpg";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
     e.preventDefault();
    try {
    const res= await axios.post(`${process.env.REACT_APP_API_URL}/login`, {
        username,
        password
      });
      // Dynamic redirect based on ROLE
      if (res.data.role === "admin") {
        alert("Login successfully");
         navigate("/dashboard", { state: { username: res.data.username } });
      } else if (res.data.role === "client") {
        navigate("/");
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl">

        {/* Left Image */}
        <div className="block">
          <img
          src={Food}
            alt="Login image"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Login Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>

          <form onSubmit={handleLogin} className="flex flex-col space-y-6">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
            />

            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
            />

            <button
              type="submit"
              className="bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition"
            >
              Log In
            </button>
          </form>

          <p className="text-sm text-gray-600 mt-4 text-center">
            Don’t have an account? 
              <Link
               to="/register"
              className="text-green-600 "
                          >
                            Register
                          </Link>
              
          </p>
        </div>
      </div>
    </div>
  );
}