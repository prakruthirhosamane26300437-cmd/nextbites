# NextBites — Part 1

A Next.js App Router and TypeScript recipe home page, scaffolded with create-next-app.

## Run

Requires Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000. Stop with Ctrl+C.

## Verify

```bash
npx tsc --noEmit
npx eslint .
npm run build
```

## Assignment requirements

- app/data/recipes.ts: one exported Recipe type and four recipes.
- components/RecipeCard.tsx: reusable component with a typed recipe prop.
- app/layout.tsx: shared navbar wrapping children.
- app/page.tsx: data-driven grid using map and stable recipe IDs.
- app/globals.css: responsive auto-fit grid and page styling.

Recipe illustrations use emoji, so no external image service is needed.
Search, recipe detail pages, and deployment belong to later parts.

## GitHub submission

This archive includes real local Git history. Enable hidden files when inspecting .git.
The main branch has the scaffold; feature/home-page has the assignment changes.
After extracting, open a terminal INSIDE this folder. Do not run git init again.
Create an EMPTY PUBLIC repository named nextbites on GitHub (no README or license).
Replace YOUR_USERNAME in the command below:

```bash
git remote add origin https://github.com/YOUR_USERNAME/nextbites.git
git push -u origin main
git push -u origin feature/home-page
```

On GitHub open a PR with base main and compare feature/home-page.
Use title: Build NextBites Part 1: Repo setup and home page
Use PR_DESCRIPTION.md as the description, updating checks to reflect your results.
Leave the PR open and submit its actual URL in Kalvium.
Do not submit a repository URL or this ZIP in place of the PR URL.

## Understand the code

Recipe defines the shape of data. RecipeCard receives one recipe through props.
The home page maps the array to cards, using recipe.id as a stable key.
RootLayout renders the navbar around the current page through children.
CSS auto-fit changes the number of columns with available width.
