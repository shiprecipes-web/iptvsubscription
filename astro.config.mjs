import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://iptvsubscription.top',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
