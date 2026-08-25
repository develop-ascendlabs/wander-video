# Wander marketing site

Marketing site for [Wander](https://wander.video) — cinematic map videos for every journey.

Built with **Astro** + **Tailwind CSS**, deployed as a static site on **Cloudflare Pages**.

## Local development

```bash
npm install
npm run dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

```bash
npm run build      # output → dist/
npm run preview    # preview the production build
```

## Cloudflare Pages

### Option A — Git integration (recommended)

1. Create a GitHub repository and push this project.
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → connect the repo.
3. Build settings:
   - **Framework preset:** Astro (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `22` (or set `NODE_VERSION=22` in environment variables)
4. After the first deploy, open **Custom domains** and add:
   - `wander.video`
   - `www.wander.video` (redirect to apex, or vice versa)

DNS: if the domain is already on Cloudflare, Pages will attach the hostname automatically. Otherwise point the domain’s nameservers to Cloudflare, or add the CNAME/records Cloudflare shows.

### Option B — Direct upload (CLI)

```bash
npm run pages:deploy
```

Requires Wrangler auth (`npx wrangler login`) and a Pages project named `wander-video` (see `wrangler.toml`).

Local Pages-like preview:

```bash
npm run pages:dev
```

## Project structure

```
src/
  components/   # landing sections, header, footer
  config/site.ts
  content/      # markdown collections (blog, routes)
  layouts/      # BaseLayout, ArticleLayout
  pages/        # /, /blog, /routes, /help, /terms, /privacy
public/images/  # logo, icon, style previews, hero art
public/videos/  # Wander exports used on the homepage and in posts
```

## Store links

Configured in [`src/config/site.ts`](src/config/site.ts):

| Key | Status |
|---|---|
| `playStoreUrl` | Live Play listing (`video.wander`) |
| `appStoreUrl` | Empty until iOS ships — badge shows “Coming soon” |
| `supportEmail` | `support@wander.video` |

## Analytics & Search Console

### Cloudflare Web Analytics (recommended)

One-click on Pages — no code required:

1. Open [Pages → wander-video → Metrics](https://dash.cloudflare.com/33dabb8c111c10775b5a59e85d26b6c1/pages/view/wander-video)
2. Under **Web Analytics**, click **Enable**
3. Redeploy (or push a commit) so the beacon is injected

Optional manual beacon: set `PUBLIC_CF_WEB_ANALYTICS_TOKEN` in Pages → Settings → Environment variables (production). Use this only if auto-inject is disabled.

### Google Search Console

1. Add a **Domain** property for `wander.video` at [Search Console](https://search.google.com/search-console)
2. Prefer **DNS TXT** verification: add the `google-site-verification=…` record in Cloudflare DNS for `wander.video`
3. After verification, submit `https://wander.video/sitemap-index.xml`

URL-prefix alternative: set `PUBLIC_GOOGLE_SITE_VERIFICATION` to the meta-tag content Google shows, then rebuild/redeploy.

## Follow-ups

- Point Flutter in-app legal links from `wander.app` to `https://wander.video/terms` and `/privacy` when ready.
- Replace App Store placeholder once the listing is live.
- Add route landing pages when a dedicated export exists (Dalmatian Coast first: Split → Hvar → Dubrovnik). Mirror the blog collection in `src/content.config.ts`, put markdown in `src/content/routes/`, and add `src/pages/routes/[...slug].astro` using `ArticleLayout`. Frontmatter is the same as a blog post, plus `region` and `waypoints`.
- These Terms and Privacy pages are starter copy — have them reviewed before relying on them for store compliance.
