import { createContext, useState,useEffect } from "react";
import recipesData from "../Data/Recipes";


// Create the context for recipes
export const RecipesContext = createContext();

export function RecipesProvider({ children }) {
  // State for all recipes
  const [recipes, setRecipes] = useState([]);
   // Load recipes into context when page mounts

   useEffect(() => {
     setRecipes(recipesData);
   }, []);
  // Provide both recipes and setRecipes to any child component
  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
}
