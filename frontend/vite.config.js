import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Absolute site URL, needed for social share images (WhatsApp, Instagram, Facebook, LinkedIn, X).
// Order: SITE_URL (set it for a custom domain) -> GitHub Pages URL from GITHUB_REPOSITORY -> empty (local dev).
function siteUrl() {
  let url = process.env.SITE_URL || '';
  if (!url && process.env.GITHUB_REPOSITORY) {
    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
    url = `https://${owner.toLowerCase()}.github.io/${repo}/`;
  }
  return url && !url.endsWith('/') ? `${url}/` : url;
}

const injectSiteUrl = () => ({
  name: 'inject-site-url',
  transformIndexHtml: (html) => html.replaceAll('__SITE_URL__', siteUrl()),
});

// base './' keeps the build working under any GitHub Pages path.
export default defineConfig({
  base: './',
  plugins: [react(), injectSiteUrl()],
  build: { outDir: 'dist', sourcemap: false, chunkSizeWarningLimit: 700 },
});
