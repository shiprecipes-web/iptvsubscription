import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.iptvsubscription.top',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'always' },
});
