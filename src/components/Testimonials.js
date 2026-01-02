import React, { useEffect, useState } from "react";
import axios from "axios";
// Importing star icons from MUI
import { Star, StarBorder } from "@mui/icons-material";
 
 
const Testimonials = () => {
  const [info, setInfo] = useState([]);


  // Load testimonials info
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/testinomials`)
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-6">
      {/* Section Title */}
      <h2 className="text-4xl font-semibold text-center text-green-700 mb-12">
        What Our Clients Say
      </h2>

      {/* Testimonials container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {info.map((review) => (
          <div
            key={review.testimonial_id}
            className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl 
            transition-shadow duration-300 hover:shadow-green-400 hover:-translate-y-2"
          >
            {/* Reviewer image */}
            <img
               src={`${process.env.REACT_APP_API_URL}/images/${review.image}`}
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
