import type { Field, GroupField } from 'payload/types'

import deepMerge from '@/utilities/deepMerge'

interface Args {
  name: string
  interfaceName?: string
  fields: Field[]
  settings?: Field[]
  overrides?: Partial<GroupField>
}

export const blockFields = ({
  name,
  interfaceName,
  fields,
  settings = [],
  overrides,
}: Args): Field =>
  deepMerge(
    {
      name,
      interfaceName,
      label: false,
      type: 'group',
      fields: [
        ...fields,
        {
          type: 'collapsible',
          label: 'Settings',
          admin: {
            initCollapsed: true,
          },
          fields: settings,
        },
      ],
      admin: {
        hideGutter: true,
      },
    },
    overrides,
  )
