import type { Media } from '@repo/cms'
import type { SiteInfo } from '@/data/site-info'

type ImageProps = string | Media | SiteInfo['image']

/**
 * Resolves image URLs using Payload's image `url` property (which is really
 * a path), and the `src` property in the image object in site-info.ts file.
 */
export function resolveImage(image: ImageProps): {
  url: string
  alt: string
} {
  // payload-types.ts says Media can be a string???
  if (typeof image === 'string')
    return {
      url: image,
      alt: '',
    }

  const base = import.meta.env.CMS_URL
  const imageSrc =
    (image as Media).url || (image as SiteInfo['image']).src || ''
  const imageAlt = image.alt ?? ''

  const resolvedImageObject = {
    url: new URL(imageSrc, base).toString(),
    alt: imageAlt,
  }

  return resolvedImageObject
}
