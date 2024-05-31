import type { Footer, Header } from '@repo/cms'
import { getPayloadDocument } from './api.service'

export async function getFooterGlobals() {
  const path = '/globals/footer'
  return getPayloadDocument<Footer>(path)
}

export async function getHeaderGlobals() {
  const path = '/globals/header'
  return getPayloadDocument<Header>(path)
}
