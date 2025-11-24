import { useState, useContext } from "react";
import { RecipesContext } from "../Context/RecipesContext";
import RecipeCard from "./RecipeCard";

export default function PlannerCards() {
  // Get all recipes from context
  const { recipes } = useContext(RecipesContext);
 
  // Modal open/close
  const [open, setOpen] = useState(false);

  // Track which day & meal category is being edited
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Track the recipe selected in the modal
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Store all saved meals for the week
  const [selectedMeals, setSelectedMeals] = useState({});

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const categories = ["Breakfast", "Lunch", "Dinner", "Snack", "Salad"];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Weekly Meal Planner</h1>

      {/* Grid of Day Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {days.map((day) => (
          <div key={day} className="bg-white shadow-md rounded-2xl p-5">
            <h2 className="text-xl font-semibold mb-3">{day}</h2>

            {categories.map((cat) => (
              <div key={cat} className="mb-2">
                {selectedMeals[day]?.[cat] ? (
                  <div className="flex items-center gap-2 bg-green-50 rounded-lg p-2">
                    <img
                      src={selectedMeals[day][cat].image}
                      alt={selectedMeals[day][cat].name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                    <span className="text-sm font-medium">
                      {selectedMeals[day][cat].name}
                    </span>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setOpen(true);
                      setSelectedSlot({ day, cat });
                    }}
                    className="w-full text-left px-4 py-2 bg-green-50 hover:bg-green-100 rounded-lg transition"
                  >
                    + Add {cat}
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-96 p-6 rounded-2xl shadow-xl max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">
              Select {selectedSlot.cat} for {selectedSlot.day}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recipes
                .filter((r) => r.category === selectedSlot.cat.toLowerCase())
                .map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    selected={selectedRecipe?.id === recipe.id}
                    onClick={() => setSelectedRecipe(recipe)}
                  />
                ))}
            </div>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  setOpen(false);
                  setSelectedRecipe(null);
                }}
                className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (selectedRecipe) {
                    setSelectedMeals((prev) => ({
                      ...prev,
                      [selectedSlot.day]: {
                        ...prev[selectedSlot.day],
                        [selectedSlot.cat]: selectedRecipe,
                      },
                    }));
                    alert(`Saved successfully: ${selectedRecipe.name}`);
                    setOpen(false);
                    setSelectedRecipe(null);
                  } else {
                    alert("Please select a recipe first!");
                  }
                }}
                className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
