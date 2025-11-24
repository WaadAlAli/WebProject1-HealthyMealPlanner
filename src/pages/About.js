import React from "react";
import AboutImage from "../assets/About.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-green-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left – Image with frame effect */}
        <div className="relative flex justify-center">
          <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-green-200 rounded-3xl -z-10"></div>
          <img
            src={AboutImage}
            alt="Healthy meal planning"
            className="w-3/4 max-w-sm rounded-3xl shadow-xl transform hover:scale-105 hover:rotate-1 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Right – Text content */}
        <div className="space-y-6 text-gray-700">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Redefine your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-400">mealtime</span>
          </h2>
          <p className="text-lg leading-relaxed">
            <span className="font-semibold text-green-600">NutriPlan</span> isn’t just a meal planner — 
            it’s your daily partner for mindful eating. 
            We blend smart technology with nutritional balance to make healthy living
            a lifestyle, not a challenge.
          </p>
          <p className="leading-relaxed">
            From tailored plans to inspiring recipes, NutriPlan helps you stay consistent,
            save time, and enjoy every bite with confidence.
          </p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Philosophy</h3>
            <p className="italic text-gray-600">
              “Small choices every day lead to a healthier, happier you.”
            </p>
          </div>
          <div className="pt-6">
            <a
              href="#planner"
              className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
            >
              Start Your Journey
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
