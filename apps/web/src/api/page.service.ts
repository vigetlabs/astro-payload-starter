import type { Page } from '@repo/cms'
import { getPayloadCollection } from './api.service'

export async function getPageCollection(query: any = null) {
  const path = '/pages'
  return getPayloadCollection<Page>(path, query)
}

export async function getPageSingle(slug: string): Promise<Page | undefined> {
  const pages = await getPageCollection({
    where: { slug: { equals: slug } },
  })
  if (pages.docs[0]) return pages.docs[0]
}
