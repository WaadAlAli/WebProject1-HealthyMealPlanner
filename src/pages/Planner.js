import { useContext, useEffect } from "react";
import { RecipesContext } from "../Context/RecipesContext";
import PlannerCards from "../components/PlannerCards";
import recipesData from "../Data/Recipes"; // Your array of recipe objects


export default function PlannerPage() {
 // Get the setRecipes function from RecipesContext
// This allows us to update the recipes stored in context so that
//  all components using the context can access them
const { setRecipes } = useContext(RecipesContext);


  // Load recipes into context when page mounts
  useEffect(() => {
    setRecipes(recipesData);
  }, [setRecipes]);
  // Page wrapper
  return <PlannerCards />;
}
