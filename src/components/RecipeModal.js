import React from "react";

export default function RecipeModal({ recipe, onClose }) {
  if (!recipe) return null; // If no recipe, do not render

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full flex overflow-hidden">
        
        {/* Left: Image */}
        <div className="w-1/2">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Info */}
        <div className="w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{recipe.name}</h2>
            <p className="text-gray-600 mb-4">{recipe.description}</p>
            {recipe.calories && (
              <p className="text-sm text-gray-500">
                Calories: {recipe.calories} kcal
              </p>
            )}
            <br/>
           <p className="text-gray-600 mb-4">Protein: {recipe.protein} g </p>
           <p className="text-gray-600 mb-4">Fats: {recipe.fats}g</p>
           <p className="text-gray-600 mb-4">Carbs: {recipe.carbs}g</p>

          {/* Close button */}
          <button
            onClick={onClose}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
      </div>
  );
}
