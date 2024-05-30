import type { Footer, MainMenu } from '@repo/cms'
import { getPayloadDocument } from './api.service'

export async function getFooterGlobals() {
  const url = `${import.meta.env.ASTRO_PUBLIC_CMS_URL}/api/globals/footer`
  return getPayloadDocument<Footer>(url)
}

export async function getMainMenuGlobals() {
  const url = `${import.meta.env.ASTRO_PUBLIC_CMS_URL}/api/globals/main-menu`
  return getPayloadDocument<MainMenu>(url)
}
