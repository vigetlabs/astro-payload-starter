import qs from 'qs'

import type { PaginatedDocs } from '@repo/cms'

export async function apiFetch<T = any>(
  url: string | URL,
  options: RequestInit = {},
) {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const res = await fetch(url, { ...defaultOptions, ...options })
  if (res.ok) {
    return res.json() as T
  }
  throw new Error(`Error fetching data: ${res.statusText} (${res.status})}`)
}

export async function getPayloadCollection<CollectionType>(
  url: string | URL,
  query: any = null,
) {
  const stringifiedQuery = qs.stringify(query, { addQueryPrefix: true })
  return apiFetch<PaginatedDocs<CollectionType>>(url + stringifiedQuery)
}

export async function getPayloadDocument<CollectionType>(path: string) {
  const url = `${import.meta.env.ASTRO_PUBLIC_CMS_URL}/api${path}`
  return apiFetch<CollectionType>(url)
}
