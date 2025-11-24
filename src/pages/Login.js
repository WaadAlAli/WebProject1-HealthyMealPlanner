import React, { useState } from "react";
import Food from "../assets/health.jpg";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const defaultUser = "waad";
    const defaultPass = "waad123";

    if (username === defaultUser && password === defaultPass) {
      alert("Login successful!");
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid username or password");
       setUsername("");
      setPassword("");
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
            />

            <input
              type="password"
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
            Don’t have an account? <span className="text-green-600 cursor-pointer">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}