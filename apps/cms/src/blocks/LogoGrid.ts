import type { Block } from 'payload/types'

import { blockFields } from '@/fields/blockFields'
import { blockWidthField } from '@/fields/blockWidth'

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
          admin: {
            initCollapsed: true,
          },
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
      settings: [blockWidthField],
    }),
  ],
}
