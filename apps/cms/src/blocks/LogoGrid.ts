import type { Block } from 'payload/types'

import { blockFields } from '@/fields/blockFields'

export const LogoGrid: Block = {
  slug: 'logoGrid',
  fields: [
    blockFields({
      name: 'logoGridFields',
      interfaceName: 'LogoGridFields',
      fields: [
        {
          name: 'logos',
          type: 'array',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
          ],
        },
      ],
    }),
  ],
}
