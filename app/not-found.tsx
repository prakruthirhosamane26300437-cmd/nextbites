import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Recipe not found</h1>
      <p>We couldn't find that page. Let's find something delicious.</p>
      <Link href="/">Back to recipes</Link>
    </main>
  );
}