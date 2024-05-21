import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '@/access/isAdmin'
import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'navColumns',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'navItems',
          type: 'array',
          minRows: 1,
          fields: [
            link({
              overrides: {
                label: false,
              },
              appearances: false,
            }),
          ],
        },
      ],
    },
  ],
}
