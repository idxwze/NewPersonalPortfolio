# Seifeddine Reguige Portfolio

Production-ready personal portfolio for a Backend & Data/ML Engineer, built with Next.js 14 App Router, React, TypeScript, Tailwind CSS, Framer Motion, and `next-themes`.

## Stack

- Next.js 14
- React + TypeScript
- Tailwind CSS
- Framer Motion
- `next-themes`
- Vercel-ready App Router structure

## Project structure

- `app/` routes, layout, pages, API routes, SEO files
- `components/` reusable UI and section components
- `data/` all editable portfolio content and project definitions
- `public/images/` placeholder local images
- `public/files/` placeholder resume file

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## What to edit later

All content-like data is centralized so you can update the portfolio without editing layout logic:

- Site identity, SEO text, nav, hero copy, links: `data/site.ts`
- Experience cards: `data/experience.ts`
- Project cards and detail-page content: `data/projects.ts`
- Skills groups: `data/skills.ts`

## Images and resume placeholders

Current placeholders are local assets and meant to be replaced later:

- `public/images/me.jpg`
- `public/images/optical-flow-car.jpg`
- `public/images/football-premier-league.jpg`
- `public/images/backend-hotels.jpg`
- `public/images/movie-recommendation.jpg`
- `public/images/cyber-anomaly.jpg`
- `public/files/Seifeddine-Reguige-Resume.pdf`

You can swap these files directly without changing component code, as long as the filenames stay the same.

## Contact form

The contact form currently submits to `app/api/contact/route.ts`, which validates the payload, logs it server-side, and returns a dummy success response. Replace it later with a real provider such as Resend, Formspree, or a custom backend.

## SEO

The app includes:

- route metadata
- Open Graph metadata
- dynamic OG image routes
- `app/sitemap.ts`
- `app/robots.ts`
- JSON-LD for the person and project pages

## Deploying to Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Deploy with the default Next.js settings.
