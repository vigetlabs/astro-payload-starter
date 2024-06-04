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
  path: string,
  query: any = null,
) {
  const stringifiedQuery = qs.stringify(query, { addQueryPrefix: true })
  const url = `${import.meta.env.CMS_URL}/api${path}${stringifiedQuery}`
  return apiFetch<PaginatedDocs<CollectionType>>(url)
}

export async function getPayloadDocument<CollectionType>(path: string) {
  const url = `${import.meta.env.CMS_URL}/api${path}`
  return apiFetch<CollectionType>(url)
}
