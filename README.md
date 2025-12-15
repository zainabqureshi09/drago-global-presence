# Drago Global Presence

Marketing site for showcasing Drago's global manufacturing and export capabilities, including hero storytelling, product highlights, industry coverage, and contact/WhatsApp entry points.

## Tech stack
- Vite + React 18 + TypeScript
- Tailwind CSS with shadcn/ui (Radix-based components)
- React Router for page routing

## Getting started
Prerequisites: Node.js 18+ and npm.

```sh
npm install
npm run dev      # starts Vite dev server on http://localhost:8080
npm run lint     # run ESLint
npm run build    # production build
npm run preview  # preview the production build locally
```

## Deployment
The site is a static Vite build and can be deployed to platforms like Vercel, Netlify, or any static host. Run `npm run build` and deploy the generated `dist/` directory.

## Project notes
- Update social/SEO metadata in `index.html` to match any future branding assets.
- Public assets live in `public/`; add social cards or favicons there and reference them in the head metadata.
