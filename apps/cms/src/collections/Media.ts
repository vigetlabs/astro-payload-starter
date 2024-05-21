import path from 'path'
import { fileURLToPath } from 'url'
import type { CollectionConfig } from 'payload/types'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
