import React, { useEffect, useState } from "react";
import axios from "axios";

// MUI icons
import {
  LocalDining,
  Favorite,
  AccessTime,
  EmojiEmotions,
} from "@mui/icons-material";

// Icon mapping
const iconMap = {
  LocalDining: <LocalDining />,
  Favorite: <Favorite />,
  AccessTime: <AccessTime />,
  EmojiEmotions: <EmojiEmotions />,
};

const WhyChooseUs = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/whychooseus`)
      .then((res) => setFeatures(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose <span className="text-green-500">NutriPlan</span>?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We combine nutrition science, simplicity, and a touch of creativity to
          make your healthy journey easier than ever.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-2xl shadow-md
              transition-all duration-300 hover:shadow-green-400 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 text-green-500 rounded-full p-4">
                  {iconMap[feature.icon]}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
