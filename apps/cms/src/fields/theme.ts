import type { Field } from 'payload/types'

export const themeField: Field = {
  name: 'theme',
  type: 'select',
  admin: {
    description: 'Leave blank for system default',
  },
  options: [
    {
      label: 'Light',
      value: 'light',
    },
    {
      label: 'Dark',
      value: 'dark',
    },
  ],
}
