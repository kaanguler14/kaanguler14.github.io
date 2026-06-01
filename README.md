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

Deployment runs automatically on push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time setup in the GitHub repo:**

1. **Settings → Pages → Build and deployment** → Source: **GitHub Actions**
2. Push to `main`; the workflow builds and publishes `dist/`

Live site: **https://kaanguler14.github.io**

## Project structure

```
src/
  components/   # UI sections (Hero, Resume, Journal, …)
  hooks/        # Shared hooks (e.g. useHlsVideo)
  constants/    # Shared constants (media URLs)
public/         # Static assets, blog HTML, chatbot.js
```
