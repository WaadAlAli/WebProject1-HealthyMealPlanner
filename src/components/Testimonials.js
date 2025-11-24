import React from "react";
// Importing star icons from MUI
import { Star, StarBorder } from "@mui/icons-material";
import f1 from "../assets/person1.jpg"
import f2 from "../assets/person2.jpg"
import f3 from "../assets/person3.jpg"

// Testimonial data (you can edit or add more)
const testimonials = [
  {
    name: "Layla H.",
    text: "NutriPlan completely changed how I eat! The meals are healthy, delicious, and perfectly balanced.",
    image: f2,
    rating: 5,
  },
  {
    name: "Omar K.",
    text: "I love how easy it is to plan my meals. I’ve lost 5kg in 2 months without feeling restricted!",
    image: f1,
    rating: 4,
  },
  {
    name: "Sara M.",
    text: "Everything feels so personalized and professional. Highly recommend NutriPlan to everyone.",
    image: f3,
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold text-center text-green-700 mb-12">
        What Our Clients Say
      </h2>

      {/* Testimonials container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl 
            transition-shadow duration-300 hover:shadow-green-400 hover:-translate-y-2"
          >
            {/* Reviewer image */}
            <img
              src={review.image}
              alt={review.name}
              className="w-30 h-40 rounded-full mx-auto mb-4 object-cover"
            />

            {/* Rating stars */}
            <div className="flex justify-center mb-3">
              {/* Create an array of 5 stars and fill according to rating */}
              {[...Array(5)].map((_, i) =>
                i < review.rating ? (
                  <Star key={i} className="text-yellow-500" />
                ) : (
                  <StarBorder key={i} className="text-yellow-500" />
                )
              )}
            </div>

            {/* Review text */}
            <p className="text-gray-600 italic mb-4">"{review.text}"</p>

            {/* Reviewer name */}
            <p className="font-semibold text-green-700">{review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
