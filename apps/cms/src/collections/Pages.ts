import type { CollectionConfig } from 'payload/types'

import { slugField } from '@/fields/slug'
import { Image } from '@/blocks/Image'
import { LogoGrid } from '@/blocks/LogoGrid'
import { ReusableContent } from '@/blocks/ReusableContent'
import { Text } from '@/blocks/Text'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'createdAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      labels: {
        singular: 'Block',
        plural: 'Blocks',
      },
      blocks: [Image, LogoGrid, ReusableContent, Text],
    },
    slugField(),
  ],
}
