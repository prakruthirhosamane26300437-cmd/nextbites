import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";
export function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}
export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main>
      <Link href="/">← Back to recipes</Link>

      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p>
        {recipe.cuisine} · {recipe.minutes} minutes · {recipe.difficulty}
      </p>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={`${recipe.id}-ingredient-${index}`}>
            {ingredient}
          </li>
        ))}
      </ul>

      <h2>Cooking steps</h2>
      <ol>
        {recipe.steps.map((step, index) => (
          <li key={`${recipe.id}-step-${index}`}>{step}</li>
        ))}
      </ol>
    </main>
  );
}