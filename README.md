# Waruna Jayasundara — Portfolio

Personal portfolio site. A static React app with no backend, so it can be hosted free on Vercel, Netlify or GitHub Pages.

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Lucide icons. There is no animation library: the motion is CSS plus one IntersectionObserver, and it turns off under `prefers-reduced-motion`.

## Run it locally

Requires Node.js 20+.

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:5173.

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check, build to `dist/`, and copy `index.html` to `404.html` |
| `npm run preview` | Serve the production build on http://localhost:4173 |
| `npm run typecheck` | TypeScript only |
| `npm run images` | Regenerate optimised WebP images from `assets-src/` |

## Editing content

You can change all of the text without touching any layout code:

| File | Contents |
|---|---|
| `src/data/profile.ts` | Name, email, phone, links, education, availability line |
| `src/data/projects.ts` | Selected projects, case studies (`caseStudy`), the archive list |
| `src/data/experience.ts` | Roles, leadership, certifications |
| `src/data/skills.ts` | Technology groups and where each one is used |
| `public/Waruna_Jayasundara_CV.pdf` | The downloadable résumé. Replace the file but keep the same name. |

**Adding a project:** append an object to `projects`. If you give it a `caseStudy`, it gets a page at `/work/<slug>` automatically.

**Images:** put the raw files in `assets-src/`, add them to `scripts/optimize-images.mjs`, run `npm run images`, then set `image.base` on the project.

Design tokens (colours, fonts, easing) are all in `src/index.css` under `@theme`.

## Deploying

### Vercel (recommended)

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New → Project** and import the repository. Vercel detects Vite, and `vercel.json` already sets the build command, the output folder, SPA rewrites for `/work/*` and asset caching.
3. Click **Deploy**.

### Netlify

Import the repository on netlify.com. `netlify.toml` already sets `npm run build`, publishes `dist`, and adds the SPA redirect.

### GitHub Pages

1. In the repository go to **Settings → Pages → Source** and choose **GitHub Actions**.
2. Push to `main`. `.github/workflows/deploy-pages.yml` builds with `BASE_PATH=/<repo-name>/` and publishes the site.
3. For a user site (`<username>.github.io`) or a custom domain, change `BASE_PATH` in the workflow to `/`.

Deep links such as `/work/helaiq` work on Pages because the build also writes `404.html`.

### After the first deploy

Set `VITE_SITE_URL` to the live URL with no trailing slash (for example `https://waruna.dev`), either in `.env` or in the host's environment variables, and redeploy. This turns the Open Graph image URL into an absolute URL, which LinkedIn and other link previews need.

### Custom domain later

- **Vercel / Netlify:** open the project's **Domains** settings, add the domain, and create the DNS records they show you (usually an `A` record for the root domain and a `CNAME` for `www`). HTTPS is issued automatically.
- **GitHub Pages:** add the domain under **Settings → Pages → Custom domain**, create a `CNAME` DNS record pointing to `<username>.github.io`, and set `BASE_PATH` to `/`.

## Quality checks (last run 19 Oct 2026, local production build)

- `npm run build`: passes with no TypeScript errors. JS is about 71 kB gzipped; case studies load as a separate 2 kB chunk.
- Lighthouse 12.2.1 on the home page, mobile: Performance 98, Accessibility 100, Best Practices 100, SEO 100.
- Lighthouse 12.2.1 on the home page and `/work/helaiq`, desktop: 100 in all four categories.
- No horizontal overflow at 375 px on the home page or the case studies. The keyboard skip link, focus rings and the Escape key on the mobile menu all work.
