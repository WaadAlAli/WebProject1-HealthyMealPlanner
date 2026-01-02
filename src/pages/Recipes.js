import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Fetch categories
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/categories`) // API endpoint
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Fetch recipes
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/admin/recipes`) //  API endpoint
      .then((res) => setRecipes(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filtered recipes based on selected category
  const filteredRecipes =
    selectedCategory === "all"
      ? recipes
      : recipes.filter(
          (recipe) => recipe.category_id === selectedCategory
        );

  return (
    <div className="min-h-screen p-6 bg-green-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipes</h1>

      {/* Dynamic Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-full font-medium transition
            ${
              selectedCategory === "all"
                ? "bg-green-600 text-white"
                : "bg-white border text-gray-700 hover:bg-green-100"
            }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.category_id}
            onClick={() => setSelectedCategory(cat.category_id)}
            className={`px-4 py-2 rounded-full font-medium transition
              ${
                selectedCategory === cat.category_id
                  ? "bg-green-600 text-white"
                  : "bg-white border text-gray-700 hover:bg-green-100"
              }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.recipe_id}
              recipe={{
                ...recipe,
                image: `${process.env.REACT_APP_API_URL}/images/${recipe.image}`,
              }}
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
          recipe={{
            ...selectedRecipe,
            image: `${process.env.REACT_APP_API_URL}/images/${selectedRecipe.image}`,
          }}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}
