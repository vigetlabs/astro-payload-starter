import 'dotenv/config'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://site.com/',
})
