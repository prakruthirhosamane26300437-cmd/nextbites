import RecipeGrid from "../components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <h1>Find your next bite.</h1>
      <p>Search for something delicious to cook.</p>

      <RecipeGrid recipes={recipes} />
    </main>
  );
}