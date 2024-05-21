import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '@/access/isAdmin'
import link from '../fields/link'

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
          name: 'label',
          type: 'text',
          required: true,
        },
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
          label: 'Direct Link',
          type: 'collapsible',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'directLink',
          },
          fields: [
            link({
              appearances: false,
              disableLabel: true,
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
