import type { CollectionConfig } from 'payload/types'

import { LogoGrid } from '@/blocks/LogoGrid'
import { MediaBlock } from '@/blocks/MediaBlock'

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Reusable Content',
    plural: 'Reusable Content',
  },
  admin: {
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
      blocks: [LogoGrid, MediaBlock],
    },
  ],
}
