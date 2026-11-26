# SVN Technologies website

React + Vite single-page website for SVN Technologies (Peenya, Bengaluru), deployed to GitHub Pages.
Tagline: PRECISION · PERFORMANCE · TRUST. Services shown: Aerospace Components and Defence Components.

## Repository layout

```
.github/workflows/deploy.yml   Manual "Run workflow" deployment to GitHub Pages
frontend/
  index.html, vite.config.js, package.json
  images/                      Put your photos here (see images/README.md for file names)
  public/favicon.svg
  src/
    config/                    All editable content and settings
    components/                Header, hero slider, forms, modal, lightbox, etc.
    pages/                     Home, About, Services, Gallery, Contact, NotFound
    hooks/ utils/ styles/
```

## Run locally

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into frontend/dist
```

## Deploy to GitHub Pages

1. Push this repository to GitHub with the code on the `main` branch.
2. In the repository go to **Settings -> Pages** and set **Source** to **GitHub Actions**.
3. Go to **Actions -> Deploy SVN Technologies website -> Run workflow**, choose `main`, and run it.
4. The site URL appears in the deploy job summary.

The workflow runs only when you trigger it manually, and only builds from `main`.

## URLs

The site uses hash routing, so addresses look like `.../#/services` and `.../#/services/aerospace`.
No file paths are exposed, and refreshing any page works on GitHub Pages.

## Where to change things

| To change | Edit |
|---|---|
| Name, tagline, phone, email, address, hours, menu, form mode | `src/config/site.config.js` |
| Banner slides, intro text, stats, process steps | `src/config/home.config.js` |
| About page text, core services, what we do best, why choose us | `src/config/about.config.js` |
| Aerospace and Defence service content, FAQ | `src/config/services.config.js` |
| Gallery items and categories | `src/config/gallery.config.js` |
| Colours, fonts, spacing, dark/light themes | `src/styles/tokens.css` |

Sample values to review: working hours, the stats numbers, the component and material lists on each
service, and the address (add plot number and pin code).

## Images

Place images in `frontend/images/` with the names in `frontend/images/README.md`. Until then, each slot
shows a labelled placeholder with the expected file name. No code change is needed when an image is added.

## Contact form

Default mode is `mailto`: the visitor's email app opens with the message filled in, so it works with
no backend. When your backend or form service is ready, set in `site.config.js`:

```js
form: { mode: 'endpoint', endpoint: 'https://your-api.example.com/contact', ... }
```

The form POSTs JSON `{ name, phone, email, subject, message }` and handles validation errors,
timeouts, network errors and server errors with clear messages. A hidden honeypot field filters basic bots.

## Features

Auto-sliding banner (pause, previous, next, dots), contact number and email at the top right, sticky
header with light/dark theme, scroll progress bar with up/down buttons, scroll-in animations, animated
counters, drawn CNC toolpath motif, quote popup, gallery with filter and lightbox, FAQ accordion, error
boundary, 404 page, skip link, keyboard focus styles and reduced-motion support.

## Note

`npm install` creates `package-lock.json`. Commit it if you want locked dependency versions.
