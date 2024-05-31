import type { Post } from '@repo/cms'
import { getPayloadCollection } from './api.service'

export async function getPostCollection(query: any = null) {
  const path = '/posts'
  return getPayloadCollection<Post>(path, query)
}

export async function getPostSingle(slug: string): Promise<Post | undefined> {
  // TODO: might be able to query by id instead:
  // GET /api/{collection-slug}/{id}
  const posts = await getPostCollection({
    where: { slug: { equals: slug } },
  })
  if (posts.docs[0]) return posts.docs[0]
}
