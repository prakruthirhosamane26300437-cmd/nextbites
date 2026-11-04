export type Recipe = {
  id: string;
  title: string;
  description: string;
  cuisine: string;
  minutes: number;
  difficulty: "Easy" | "Medium";
  emoji: string;
};

export const recipes: Recipe[] = [
  { id: "vegetable-pasta", title: "Vegetable Pasta", description: "Fresh vegetables and pasta tossed in a rich tomato sauce.", cuisine: "Italian", minutes: 25, difficulty: "Easy", emoji: "🍝" },
  { id: "paneer-bowl", title: "Paneer Rice Bowl", description: "Golden spiced paneer, fluffy rice, and crunchy vegetables.", cuisine: "Indian", minutes: 30, difficulty: "Medium", emoji: "🍚" },
  { id: "veggie-sandwich", title: "Vegetable Sandwich", description: "Crisp toast layered with fresh vegetables and a creamy spread.", cuisine: "International", minutes: 10, difficulty: "Easy", emoji: "🥪" },
  { id: "banana-pancakes", title: "Banana Pancakes", description: "Fluffy banana pancakes for a slow morning or a sweet snack.", cuisine: "American", minutes: 20, difficulty: "Easy", emoji: "🥞" },
];
