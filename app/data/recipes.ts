export type Recipe = {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium";
  emoji: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "vegetable-pasta",
    title: "Vegetable Pasta",
    description: "Fresh vegetables tossed with pasta and tomato sauce.",
    cuisine: "Italian",
    minutes: 25,
    difficulty: "Easy",
    emoji: "🍝",
    ingredients: [
      "200 g pasta",
      "1 cup chopped vegetables",
      "1 cup tomato sauce",
      "1 tablespoon olive oil",
      "Salt and pepper",
    ],
    steps: [
      "Boil pasta according to the packet instructions and drain.",
      "Heat olive oil in a pan.",
      "Add the vegetables and cook until tender.",
      "Stir in tomato sauce, salt and pepper.",
      "Add the pasta, mix well and serve hot.",
    ],
  },
  {
    id: "paneer-bowl",
    title: "Paneer Rice Bowl",
    description: "Golden paneer served with rice and vegetables.",
    cuisine: "Indian",
    minutes: 30,
    difficulty: "Medium",
    emoji: "🍚",
    ingredients: [
      "150 g paneer cubes",
      "1 cup cooked rice",
      "1 cup chopped vegetables",
      "1 tablespoon oil",
      "Half a teaspoon cumin powder",
      "Salt to taste",
    ],
    steps: [
      "Heat oil in a pan.",
      "Add paneer cubes and cook until golden.",
      "Add vegetables and cook until tender.",
      "Season with cumin powder and salt.",
      "Serve the paneer and vegetables over hot cooked rice.",
    ],
  },
  {
    id: "veggie-sandwich",
    title: "Vegetable Sandwich",
    description: "A quick sandwich packed with fresh vegetables.",
    cuisine: "International",
    minutes: 10,
    difficulty: "Easy",
    emoji: "🥪",
    ingredients: [
      "2 slices of bread",
      "1 tablespoon butter",
      "4 cucumber slices",
      "4 tomato slices",
      "2 lettuce leaves",
      "Salt and pepper",
    ],
    steps: [
      "Spread butter on the bread slices.",
      "Place lettuce, cucumber and tomato on one slice.",
      "Sprinkle with salt and pepper.",
      "Cover with the second slice of bread.",
      "Cut in half and serve.",
    ],
  },
  {
    id: "banana-pancakes",
    title: "Banana Pancakes",
    description: "Fluffy banana pancakes for a delicious breakfast.",
    cuisine: "American",
    minutes: 20,
    difficulty: "Easy",
    emoji: "🥞",
    ingredients: [
      "1 ripe banana",
      "1 cup plain flour",
      "Three quarters of a cup of milk",
      "1 teaspoon baking powder",
      "1 tablespoon sugar",
      "Butter for cooking",
    ],
    steps: [
      "Mash the banana in a bowl.",
      "Mix in flour, milk, baking powder and sugar.",
      "Heat a little butter in a non-stick pan over medium heat.",
      "Pour small portions of batter into the pan.",
      "Cook until bubbles form, then flip.",
      "Cook until golden on both sides and cooked through.",
    ],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}