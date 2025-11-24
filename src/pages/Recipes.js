import { useState, useContext } from "react";
import { RecipesContext } from "../Context/RecipesContext";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

export default function RecipesPage() {
  const { recipes } = useContext(RecipesContext);

  // Filter by category
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Track recipe for modal
  const [selectedRecipe, setSelectedRecipe] = useState(null);

 const categories = ["all", "breakfast", "lunch", "dinner", "snack", "salad", "smoothie"];


  const filteredRecipes =
    selectedCategory === "all"
      ? recipes
      : recipes.filter((recipe) => recipe.category === selectedCategory);
      

  return (
    <div className="min-h-screen p-6 bg-green-50 ">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>

      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition
              ${selectedCategory === cat ? "bg-green-600 text-white" : "bg-white border text-gray-700 hover:bg-green-100"}
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      

      {/* Recipes grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => setSelectedRecipe(recipe)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No recipes found in this category.
        </p>
      )}

      {/* Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}
