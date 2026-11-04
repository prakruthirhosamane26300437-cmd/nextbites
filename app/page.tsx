import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/app/data/recipes";

export default function HomePage() {
  return (
    <main className="container">
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">GOOD FOOD. EVERY DAY.</p>
        <h1 id="hero-title">Your next favourite<br />bite starts here.</h1>
        <p className="intro">Simple ingredients, delicious possibilities. Find a little inspiration for whatever you are craving today.</p>
        <a className="button" href="#recipes">Explore recipes <span aria-hidden="true">↗</span></a>
        <div className="hero-decoration" aria-hidden="true">🍋</div>
      </section>
      <section id="recipes" className="recipes-section" aria-labelledby="recipes-title">
        <div className="section-heading">
          <div><p className="eyebrow">FRESH FROM THE KITCHEN</p><h2 id="recipes-title">Something delicious awaits</h2></div>
          <p>{recipes.length} recipes to inspire you</p>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
      </section>
    </main>
  );
}
