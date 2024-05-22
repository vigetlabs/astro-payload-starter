import type { CollectionConfig } from 'payload/types'

import { slugField } from '@/fields/slug'
import { LogoGrid } from '@/blocks/LogoGrid'
import { MediaBlock } from '@/blocks/MediaBlock'
import { ReusableContent } from '@/blocks/ReusableContent'

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
      blocks: [LogoGrid, MediaBlock, ReusableContent],
    },
    slugField(),
  ],
}
