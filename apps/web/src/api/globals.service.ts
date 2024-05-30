import type { Footer, MainMenu } from '@repo/cms'
import { getPayloadDocument } from './api.service'

export async function getFooterGlobals() {
  const path = '/globals/footer'
  return getPayloadDocument<Footer>(path)
}

export async function getMainMenuGlobals() {
  const path = '/globals/main-menu'
  return getPayloadDocument<MainMenu>(path)
}
