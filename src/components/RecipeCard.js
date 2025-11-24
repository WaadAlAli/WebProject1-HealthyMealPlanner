import React from "react";

export default function RecipeCard({ recipe, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg transition transform  hover:shadow-green-400 hover:-translate-y-1"
    >
      {/* Recipe image */}
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-[300px] object-cover"
      />

      {/* Recipe info */}
      <div className="p-3 bg-white">
        <h4 className="text-sm font-semibold mb-1">{recipe.name}</h4>
      </div>
    </div>
  );
}
