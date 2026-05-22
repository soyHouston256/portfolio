import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Normalize the base so `import.meta.env.BASE_URL` always ends with a slash.
// This makes string-concatenated public/ asset paths
// (`import.meta.env.BASE_URL + 'me.webp'`) correct whether BASE_PATH is set as
// `/portfolio` or `/portfolio/`.
const rawBase = process.env.BASE_PATH || '/';
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

export default defineConfig({
  // `site` and `base` are env-driven so the same codebase builds for both
  // deploy targets:
  //   - maxflow.ink (Docker/nginx): defaults below — root build.
  //   - GitHub Pages subpath: BASE_PATH=/portfolio SITE_URL=https://soyhouston256.github.io
  site: process.env.SITE_URL || 'https://maxflow.ink',
  base,
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
