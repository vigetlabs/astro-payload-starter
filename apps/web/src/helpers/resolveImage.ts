import type { Media } from '@repo/cms'
import type { SiteInfo } from '@/data/site-info'

type ImageProps = Media | SiteInfo['image']

/**
 * Resolves image URLs using Payload's image `url` property (which is really
 * a path), and the `src` property in the image object in site-info.ts file.
 */
export function resolveImage(image: ImageProps): { url: string; alt: string } {
  const base = import.meta.env.CMS_URL
  const imageSrc =
    (image as Media).url || (image as SiteInfo['image']).src || ''

  const resolvedImageObject = {
    url: new URL(imageSrc, base).toString(),
    alt: image.alt,
  }

  return resolvedImageObject
}
