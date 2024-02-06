import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://16SAGG.github.io',
  base: '/RecommendedMovies',
  integrations: [tailwind()],
});