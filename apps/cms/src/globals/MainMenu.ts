import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '@/access/isAdmin'
import link from '@/fields/link'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'tabs',
      type: 'array',
      label: 'Main Menu Items',
      fields: [
        {
          name: 'type',
          type: 'radio',
          required: true,
          options: [
            {
              label: 'Direct Link',
              value: 'directLink',
            },
            {
              label: 'Dropdown',
              value: 'dropdown',
            },
          ],
        },
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'dropdown',
          },
        },
        {
          label: 'Direct Link',
          type: 'collapsible',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'directLink',
          },
          fields: [
            link({
              appearances: false,
              overrides: {
                label: false,
              },
            }),
          ],
        },
        {
          name: 'dropdownLinks',
          type: 'array',
          minRows: 2,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'dropdown',
          },
          fields: [
            link({
              appearances: false,
              overrides: {
                label: false,
              },
            }),
          ],
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'ctas',
      type: 'array',
      label: 'CTAs',
      labels: {
        singular: 'CTA',
        plural: 'CTAs',
      },
      fields: [
        link({
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
}
