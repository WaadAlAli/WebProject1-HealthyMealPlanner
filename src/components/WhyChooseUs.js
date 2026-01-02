import React from "react";
import {
  LocalDining,
  Favorite,
  AccessTime,
  EmojiEmotions,
} from "@mui/icons-material"; // Import MUI icons

const features = [
  {
    icon: <LocalDining />,
    title: "Personalized Meal Plans",
    desc: "Smart and balanced plans tailored to your health goals and preferences.",
  },
  {
    icon: <Favorite />,
    title: "Healthy & Delicious",
    desc: "Enjoy meals that are both nutritious and full of flavor — no compromises.",
  },
  {
    icon: <AccessTime />,
    title: "Save Time & Stay Consistent",
    desc: "No more guessing what to eat — NutriPlan keeps you organized effortlessly.",
  },
  {
    icon: <EmojiEmotions />,
    title: "Feel Great Every Day",
    desc: "Experience more energy, better focus, and an overall improved lifestyle.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b  from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-green-500">NutriPlan</span>?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We combine nutrition science, simplicity, and a touch of creativity to make
          your healthy journey easier than ever.
        </p>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md transition-all duration-300 hover:shadow-green-400 hover:-translate-y-2"
            >
              {/* Icon Circle */}
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 text-green-500 rounded-full p-4 inline-flex items-center justify-center shadow-sm">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
