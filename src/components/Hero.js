import React from "react";
import Plate from "../assets/Mango.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <section className="w-full min-h-screen bg-green-50 flex items-center">
  <div className="w-full">
    <div className="container mx-auto px-6 py-12 sm:py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">

        {/* Image first on mobile */}
        <div className="order-1 sm:order-2 relative">
          <img
            src={Plate}
            alt="Healthy food bowls"
            className="
              rounded-2xl mx-auto
              w-[250px] sm:w-[400px] md:w-[400px] lg:w-[600px] xl:w-[800px]
              transform sm:translate-y-8
              hover:scale-105
              transition-transform duration-[2500ms] ease-in-out
              animate-floating
            "
          />
        </div>

        {/* Text */}
        <div className="order-2 sm:order-1 text-center sm:text-left space-y-7">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Plan Your <span className="text-green-600">Meals</span> Smartly,
            <br /> Eat <span className="text-green-600">Healthy</span> Every Day
          </h1>

          <p className="text-gray-600 text-lg md:w-3/4 mx-auto sm:mx-0">
            Create your personalized meal plans, explore nutritious recipes,
            and make healthy eating simple with NutriPlan.
          </p>

          <div className="flex items-center justify-center sm:justify-start gap-4">
            <Link
              to="/planner"
              className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
            >
              Plan Your Meal
            </Link>

            <Link
              to="/recipes"
              className="border border-green-600 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 hover:shadow-md transition duration-300"
            >
              Explore Recipes
            </Link>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Floating animation */}
  <style>
    {`
      @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-floating {
        animation: floating 2.5s ease-in-out infinite;
      }
    `}
  </style>
</section>

     
  );
};

export default Hero;
