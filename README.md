# iptvsubscription.top

Astro marketing site for **iptvsubscription.top**, inspired by the layout of iptvsubscription.us.

## Stack
- [Astro 5](https://astro.build) — static site generator
- `@astrojs/sitemap` — auto sitemap
- No client framework; a tiny bit of vanilla JS for the mobile menu

## Commands
```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build to ./dist
npm run preview  # preview the production build
```

## Project structure
```
src/
  data/          site.ts (nav, features, FAQ), plans.ts (pricing), posts.ts (blog)
  layouts/       Base.astro (head + header/footer), Legal.astro
  components/     Header, Footer, PlanCard
  pages/         index, apps, contact, terms, privacy, refund, blog/
  styles/        global.css (design tokens + utilities)
public/          favicon.svg, robots.txt
```

## Customize
- **Brand / contact / order link**: edit `src/data/site.ts` (`orderUrl`, `email`, etc.).
  Point `orderUrl` at your real checkout/order page.
- **Pricing & plans**: edit `src/data/plans.ts`.
- **Blog posts**: add entries to `src/data/posts.ts` (pages are generated automatically).
- **Colors**: edit the CSS variables in `src/styles/global.css` (`:root`).
- **Domain**: set in `astro.config.mjs` (`site`) and `public/robots.txt`.

## Deploy
The build output in `./dist` is fully static — deploy to Netlify, Vercel, Cloudflare Pages,
GitHub Pages, or any static host. Point the host at `npm run build` with output dir `dist`.

> Note: placeholder channel/movie counts and prices are illustrative — update them in
> `src/data/plans.ts` to match your actual service.
