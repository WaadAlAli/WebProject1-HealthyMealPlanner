//Breakfast
import avocadoToast from "../assets/Breakfast2.jpg";
import hallomitoast from "../assets/Breakfast.jpg";
import fruitbowl from "../assets/Breakfast3.jpg";
import greekyougret from "../assets/Breakfast4.jpg";

//Dinner
import Egg from "../assets/Dinner1.jpg";
import Spinash from "../assets/Dinner3.jpg";
import Toast from "../assets/Dinner5.jpg";

// Lunch
import Sandwich from "../assets/Lunch3.jpg";
import Steak from "../assets/Lunch2.jpg";
import Salmon from "../assets/Lunch8.jpg";
import Rice from "../assets/Lunch7.jpg";

// Salad
import Taboule from "../assets/Salad7.jpg";
import Potato from "../assets/Salad2.jpg";
import Shrimp from "../assets/Salad5.jpg";

//Snack
import Apple from "../assets/Snack4.jpg";
import Greek from "../assets/Snack7.jpg";
import Granola from "../assets/Snack9.jpg";

// Smoothie
import Mixfruit from "../assets/Smoothie6.jpg";
import Kiwi from "../assets/Smoothie3.jpg";
import Pineapple from "../assets/Smoothie2.jpg";

const recipesData = [
  // ---------------------- BREAKFAST ----------------------
  {
    id: 1,
    name: "Avocado Toast",
    category: "breakfast",
    image: avocadoToast,
    calories: 320,
    description: "A nutritious toast topped with creamy avocado, perfect for an energizing morning.",
    ingredients: ["Bread", "Avocado", "Lemon", "Salt", "Pepper", "Olive oil"]
  },

  {
    id: 2,
    name: "Halloumi Toast",
    category: "breakfast",
    image: hallomitoast,
    calories: 380,
    description: "Crispy toast layered with grilled halloumi cheese for a savory breakfast option.",
    ingredients: ["Bread", "Halloumi cheese", "Tomato", "Herbs"]
  },

  {
    id: 3,
    name: "Fruit Bowl",
    category: "breakfast",
    image: fruitbowl,
    calories: 250,
    description: "A refreshing bowl of mixed fruits rich in vitamins and natural sweetness.",
    ingredients: ["Strawberry", "Banana", "Kiwi", "Grapes", "Honey"]
  },

  {
    id: 4,
    name: "Greek Yogurt Bowl",
    category: "breakfast",
    image: greekyougret,
    calories: 300,
    description: "Creamy Greek yogurt topped with granola and berries for a high-protein breakfast.",
    ingredients: ["Greek yogurt", "Honey", "Granola", "Berries"]
  },

  // ---------------------- DINNER ----------------------
  {
    id: 5,
    name: "Scrambled Eggs",
    category: "dinner",
    image: Egg,
    calories: 220,
    description: "Soft and fluffy scrambled eggs made in minutes.",
    ingredients: ["Eggs", "Milk", "Salt", "Pepper", "Butter"]
  },

  {
    id: 6,
    name: "Spinach Eggs",
    category: "dinner",
    image: Spinash,
    calories: 250,
    description: "Eggs cooked with fresh spinach for a nutrient-rich dinner.",
    ingredients: ["Eggs", "Spinach", "Olive oil", "Salt", "Pepper"]
  },

  {
    id: 7,
    name: "Cheese Toast",
    category: "dinner",
    image: Toast,
    calories: 300,
    description: "Toasted bread topped with melty cheese—simple and satisfying.",
    ingredients: ["Bread", "Cheese", "Butter"]
  },

  // ---------------------- LUNCH ----------------------
  {
    id: 8,
    name: "Chicken Sandwich",
    category: "lunch",
    image: Sandwich,
    calories: 420,
    description: "A high-protein grilled chicken sandwich packed with flavor.",
    ingredients: ["Bread", "Grilled chicken", "Lettuce", "Light mayo"]
  },

  {
    id: 9,
    name: "Steak with Mashed Potato",
    category: "lunch",
    image: Steak,
    calories: 550,
    description: "Juicy steak served with creamy mashed potatoes.",
    ingredients: ["Steak", "Potato", "Butter", "Salt", "Pepper"]
  },

  {
    id: 10,
    name: "Baked Salmon",
    category: "lunch",
    image: Salmon,
    calories: 480,
    description: "Tender baked salmon rich in omega-3 fatty acids.",
    ingredients: ["Salmon", "Lemon", "Garlic", "Olive oil"]
  },

  {
    id: 20,
    name: "Rice with Chicken",
    category: "lunch",
    image: Rice,
    calories: 520,
    description: "Flavorful chicken served with perfectly cooked rice.",
    ingredients: ["Rice", "Chicken", "Spices", "Oil"]
  },

  // ---------------------- SALADS ----------------------
  {
    id: 11,
    name: "Taboule",
    category: "salad",
    image: Taboule,
    calories: 200,
    description: "A refreshing Middle Eastern parsley salad full of flavor.",
    ingredients: ["Parsley", "Tomato", "Bulgur", "Lemon", "Olive oil"]
  },

  {
    id: 12,
    name: "Potato Salad",
    category: "salad",
    image: Potato,
    calories: 260,
    description: "Creamy potato salad with light dressing.",
    ingredients: ["Potato", "Light mayo", "Green onion", "Lemon"]
  },

  {
    id: 13,
    name: "Shrimp Salad",
    category: "salad",
    image: Shrimp,
    calories: 300,
    description: "A refreshing salad with shrimp, lettuce, and avocado.",
    ingredients: ["Shrimp", "Lettuce", "Avocado", "Lemon"]
  },

  // ---------------------- SNACK ----------------------
  {
    id: 14,
    name: "Apple with Cinnamon",
    category: "snack",
    image: Apple,
    calories: 120,
    description: "A light and naturally sweet snack with warm cinnamon flavor.",
    ingredients: ["Apple", "Cinnamon", "Honey"]
  },

  {
    id: 15,
    name: "Granola Bar",
    category: "snack",
    image: Granola,
    calories: 180,
    description: "A wholesome oat bar perfect for quick energy.",
    ingredients: ["Oats", "Honey", "Almonds"]
  },

  {
    id: 16,
    name: "Frozen Greek Yogurt Chocolate",
    category: "snack",
    image: Greek,
    calories: 150,
    description: "A low-calorie frozen yogurt dessert with chocolate flavor.",
    ingredients: ["Greek yogurt", "Cocoa", "Honey"]
  },

  // ---------------------- SMOOTHIES ----------------------
  {
    id: 17,
    name: "Pineapple Smoothie",
    category: "smoothie",
    image: Pineapple,
    calories: 200,
    description: "A refreshing pineapple smoothie that aids digestion.",
    ingredients: ["Pineapple", "Water or milk", "Honey"]
  },

  {
    id: 18,
    name: "Kiwi Smoothie",
    category: "smoothie",
    image: Kiwi,
    calories: 180,
    description: "A vitamin-rich kiwi smoothie packed with freshness.",
    ingredients: ["Kiwi", "Banana", "Water"]
  },

  {
    id: 19,
    name: "Mixed Fruits Smoothie",
    category: "smoothie",
    image: Mixfruit,
    calories: 220,
    description: "A delicious blend of fresh fruits for a healthy drink.",
    ingredients: ["Banana", "Strawberry", "Pineapple", "Water"]
  },
];

export default recipesData;
