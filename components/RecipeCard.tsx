import Link from "next/link";
import type { Recipe } from "@/app/data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipe/${recipe.id}`}
      className="recipe-card"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <div className="recipe-art" aria-hidden="true">
        {recipe.emoji}
      </div>

      <div className="recipe-content">
        <span className="cuisine">{recipe.cuisine}</span>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>

        <div className="recipe-meta">
          <span>{recipe.minutes} minutes</span>
          <span className="difficulty">{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}