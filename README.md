# Snehal Shelke — Portfolio

A premium, animated portfolio built with React + Vite + Framer Motion, tailored to Snehal Shelke's
DevOps / Cloud (AWS) background, based on the content in `snehal_cv.pdf` and the structure in
`Portfolio_Design_Blueprint.pdf`.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Before you deploy

1. **Profile photo** — drop your headshot into `public/profile.jpg` (square, at least 500x500px).
   If it's missing, the hero and about sections automatically fall back to an "SS" monogram.
2. **Resume PDF** — put your resume at `public/resume.pdf` so the footer's "Resume (PDF)" link works.
3. **Contact form** — the form currently only simulates sending (for the demo animation). Wire it up
   to a real backend or a service like Formspree / EmailJS in `src/components/Contact.jsx`
   (`handleSubmit`).
4. **Links** — update GitHub/LinkedIn URLs and project demo links in `src/data.js`.

## Structure

- `src/data.js` — all content (profile info, skills, projects, timeline). Edit this file to update copy.
- `src/components/` — one component per section (Hero, About, Skills, Projects, Contact, etc.)
- `src/index.css` — the entire design system: colors, typography, animations, responsive rules.

## Tech

- React 18 + Vite
- Framer Motion for all animations (typing effect, floating profile, orbiting tech badges, scroll
  reveals, magnetic buttons, 3D project card tilt, animated counters, skill bars)
- Plain CSS (no Tailwind) — glassmorphism navbar, animated gradient text, particle canvas background,
  mouse-follow glow, custom cursor
- `react-icons` for all iconography
