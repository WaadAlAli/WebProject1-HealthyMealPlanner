import React from "react";
import Plate from "../assets/plate.png"
import { Link } from "react-router-dom"; // used to navigate between pages inside the app

// This is the Hero section that appears at the top of the homepage
const Hero = () => {
  return (
    // The main container (section) with a gradient background and responsive flex layout
    <section className="bg-gradient-to-r from-green-50 via-white to-green-100 flex flex-col md:flex-row items-center
     justify-between px-8 md:py-20 py-12 overflow-hidden ">

      {/* ===== LEFT SIDE: TEXT CONTENT ===== */}
      <div className="flex-1 text-center md:text-left space-y-6 z-10">
        {/* Title / Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          Plan Your <span className="text-green-600 ">Meals</span> Smartly,
          <br /> Eat <span className="text-green-600">Healthy</span> Every Day
        </h1>

        {/* Short Description */}
        <p className="text-gray-600 text-lg md:w-3/4 mx-auto md:mx-0">
          Create your personalized meal plans, explore nutritious recipes, and make healthy
          eating simple with NutriPlan.
        </p>

        {/* Buttons Section */}
        <div className="flex justify-center md:justify-start gap-4 pt-4">
          {/* Main Button - links to Planner Page */}
          <Link
            to="/planner"
            className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
          >
            Plan Your Meal
          </Link>

          {/* Secondary Button - links to Recipes Page */}
          <Link
            to="/recipes"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 hover:shadow-md transition duration-300"
          >
            Explore Recipes
          </Link>
        </div>
      </div>

      {/* ===== RIGHT SIDE: IMAGE ===== */}
      <div className="flex-1 mt-10 md:mt-0 relative">
        <img
  src={Plate}
  alt="Healthy food bowls"
  className="  md:w-[90%] mx-auto transform hover:scale-105 transition-transform duration-[2500ms] ease-in-out animate-floating"
/>

      </div>

      {/* ===== CSS KEYFRAMES FOR FLOATING ANIMATION ===== */}
      <style>
        {`
          /* Floating effect to make the image move gently up and down */
          @keyframes floating {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          /* Apply the animation infinitely */
          .animate-floating {
            animation: floating 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

// Export the component so it can be imported in Home.js
export default Hero;
