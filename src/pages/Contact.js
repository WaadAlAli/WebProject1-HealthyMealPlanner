import React, { useEffect, useState } from "react";
import axios from "axios";

// Import Material UI icons
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  const [info, setInfo] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


  // Load contact info
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/contact`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/contact/messages`, formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
   
  };

  return (
    // Main container
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 flex flex-col items-center justify-center px-6 py-12">

      {/* ===== Header Section ===== */}
      <div className="text-center mb-12">
        {/* Page title */}
        <h1 className="text-4xl font-semibold text-emerald-600 mb-3">
          Contact Us
        </h1>
        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          We'd love to hear from you! Fill out the form or reach out directly.
        </p>
      </div>

      {/* ===== Main Grid (Form + Info) ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">

        {/* ===== Contact Form ===== */}
        <form
          className="bg-white rounded-2xl shadow-md p-8 space-y-5"
          onSubmit={handleSubmit} // Prevent page reload
        >
          {/* Name field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400"
                         required
            />
          </div>

          {/* Email field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
            onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400"
                         required
            />
          </div>

          {/* Message field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                         focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-emerald-500 text-white py-2 rounded-lg 
                       font-medium hover:bg-emerald-600 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* ===== Contact Info Section ===== */}
        <div className="flex flex-col justify-between">
          {/* Info card */}
          <div className="bg-white rounded-2xl shadow-md p-8 space-y-5">
            <h2 className="text-2xl font-semibold text-emerald-600 mb-3">
              Get in Touch
            </h2>

            {/* Phone */}
            <div className="flex items-center gap-3 text-gray-700">
              <PhoneIcon className="text-emerald-500" />
              <p className="font-medium">{info.phone}</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 text-gray-700">
              <EmailIcon className="text-emerald-500" />
              <p className="font-medium">{info.email}</p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 text-gray-700">
              <LocationOnIcon className="text-emerald-500" />
              <p className="font-medium">{info.location}</p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-6 rounded-2xl overflow-hidden shadow-md">
            <img
                src={`${process.env.REACT_APP_API_URL}/images/${info.map_image}`}
              alt="Map"
              className="w-full h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

