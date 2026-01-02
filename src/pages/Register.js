import React, { useState } from "react";
import Food from "../assets/health.jpg";
import axios from "axios";
import { Link ,useNavigate} from "react-router-dom";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const navigate=useNavigate();
const handleRegister = async (e) => {
    // Check if passwords match
    if(password !== confirmPassword) {
        alert("Passwords do not match!");
        setPassword("");
        setConfirmPassword("");
    }
 e.preventDefault();
setError(false);
try {
await axios.post(`${process.env.REACT_APP_API_URL}/register`,{ username, password, email });
alert("Register successfully");
navigate("/loginpage");
}catch{
console.log(error);
setError(true);
}
}

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

        {/* Register Form */}
        <div className="p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Register</h2>

          <form onSubmit={handleRegister} className="flex flex-col space-y-6">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
            />

             <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
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
             <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              className="border border-gray-300 rounded-xl p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-400"
            />

            <button
              type="submit"
              className="bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition"
            
            >
              Register
            </button>
        <Link to="/loginpage"
                      className="text-green-600 "
                                  >
                                    Back
                                  </Link>
          </form>
        </div>
      </div>
    </div>
  );
}