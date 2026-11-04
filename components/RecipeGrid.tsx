"use client";

import { useState } from "react";
import RecipeCard from "./RecipeCard";
import type { Recipe } from "../app/data/recipes";

export default function RecipeGrid({
  recipes,
}: {
  recipes: Recipe[];
}) {
  const [query, setQuery] = useState("");

  const visibleRecipes = recipes.filter((recipe) =>
    `${recipe.title} ${recipe.cuisine}`
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  return (
    <section>
      <label htmlFor="recipe-search">Search recipes</label>

      <input
        id="recipe-search"
        className="search-input"
        type="search"
        placeholder="Search recipes or cuisines..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {visibleRecipes.length === 0 ? (
        <p>No recipes match your search. Try another name or cuisine.</p>
      ) : (
        <div className="grid">
          {visibleRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}