import type { GlobalConfig } from 'payload/types'

import { admins } from '@/access'
import link from '@/fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: admins,
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
              appearances: false,
              overrides: {
                label: false,
              },
            }),
          ],
          admin: {
            initCollapsed: true,
          },
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
  ],
}
