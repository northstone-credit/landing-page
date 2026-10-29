# Northstone landing page

Static site: no build step, no dependencies. Open `index.html`, or run `python3 -m http.server 8000` in this folder (http://localhost:8000).

| Path | What |
|---|---|
| `index.html` | All content (Spanish) |
| `css/tokens.css` | Colours, fonts, spacing. Source: the brand manual |
| `css/base.css` | Reset, typography, buttons, layout primitives |
| `css/sections.css` | One block per section, in page order |
| `js/main.js` | Mobile menu and contact form |
| `assets/` | Logos exported from the brand manual, `hero.jpg`, `favicon.svg`, `og-image.jpg` (1200x630 social preview) |
| `favicon.ico`, `apple-touch-icon.png` | Root-level icons; browsers and iOS look for them there |

Fonts: Baskerville and Helvetica Neue are system fonts (macOS/iOS). Other systems fall back to Georgia and Arial until the font licence and hosting are decided.

## Deploy

Published with GitHub Pages from the `main` branch, folder `/` (root). No build step and no GitHub Actions. Custom domain: `northstonecredit.com` (`CNAME` file at the root, containing only the domain), with DNS on Cloudflare pointing to GitHub Pages.

To update the site: edit, commit and push to `main`, then wait about 1 minute.

Pages serves every file in the repo, including `README.md`, at `northstonecredit.com/<file>`. Keep anything internal out of this repo.
