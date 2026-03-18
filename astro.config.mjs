import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare'
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans', 'zh-hant', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'ru', 'it'],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
