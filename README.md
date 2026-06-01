# Kaan Güler — Portfolio

Personal portfolio site for [kaanguler14.github.io](https://kaanguler14.github.io). Built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Framer Motion & GSAP
- HLS.js (Mux background video)

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: preview production build
```

Output is written to `dist/`.

## Deploy (GitHub Pages)

On every push to `main`, the workflow builds the app and publishes `dist/` to the **`gh-pages`** branch.

**One-time setup in the GitHub repo:**

1. **Settings → Pages → Build and deployment**
2. Source: **Deploy from a branch**
3. Branch: **`gh-pages`** / folder **`/ (root)`**
4. Save

Live site: **https://kaanguler14.github.io**

## Project structure

```
src/
  components/   # UI sections (Hero, Resume, Journal, …)
  hooks/        # Shared hooks (e.g. useHlsVideo)
  constants/    # Shared constants (media URLs)
public/         # Static assets, blog HTML, chatbot.js
```
