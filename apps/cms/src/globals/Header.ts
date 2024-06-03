import type { GlobalConfig } from 'payload/types'

import { admins } from '@/access'
import link from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
    update: admins,
  },
  fields: [
    {
      name: 'tabs',
      type: 'array',
      label: 'Main Menu',
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
