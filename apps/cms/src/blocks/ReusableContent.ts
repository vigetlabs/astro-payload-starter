import type { Block } from 'payload/types'

import { blockFields } from '@/fields/blockFields'

export const ReusableContent: Block = {
  slug: 'reusableContent',
  fields: [
    blockFields({
      name: 'reusableContentFields',
      fields: [
        {
          name: 'reusableContent',
          type: 'relationship',
          relationTo: 'reusable-content',
          required: true,
        },
        {
          name: 'customId',
          label: 'Custom ID',
          type: 'text',
          admin: {
            description: () =>
              'This is a custom ID that can be used to target this block with CSS or JavaScript.',
          },
        },
      ],
    }),
  ],
}
