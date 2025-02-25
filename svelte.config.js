import adapter from "@sveltejs/adapter-cloudflare"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Using Cloudflare Workers adapter for deployment
    adapter: adapter(),
    // allow up to 150kb of style to be inlined with the HTML
    // Faster FCP (First Contentful Paint) by reducing the number of requests
    inlineStyleThreshold: 150000,
    prerender: {
      handleMissingId: 'ignore'  // Ignore missing ID errors during build
    }
  },
  preprocess: vitePreprocess(),
}

export default config
