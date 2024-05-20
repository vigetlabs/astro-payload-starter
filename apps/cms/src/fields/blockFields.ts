import type { Field, GroupField } from 'payload/types'

import deepMerge from '@/utilities/deepMerge'
import { themeField } from './theme'

interface Args {
  name: string
  fields: Field[]
  overrides?: Partial<GroupField>
}

export const blockFields = ({ name, fields, overrides }: Args): Field =>
  deepMerge(
    {
      name,
      label: false,
      type: 'group',
      admin: {
        hideGutter: true,
        style: {
          margin: 0,
          padding: 0,
        },
      },
      fields: [
        // {
        //   type: 'collapsible',
        //   label: 'Settings',
        //   admin: {
        //     initCollapsed: true,
        //   },
        //   fields: [
        //     {
        //       type: 'group',
        //       label: false,
        //       admin: {
        //         hideGutter: true,
        //       },
        //       name: 'settings',
        //       fields: [themeField],
        //     },
        //   ],
        // },
        ...fields,
      ],
    },
    overrides,
  )
