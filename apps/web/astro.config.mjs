import 'dotenv/config'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['localhost'],
  },
  site: process.env.SITE_URL || 'https://site.com/',
})
