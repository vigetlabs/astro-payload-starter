import type { Field } from 'payload/types'

export const blockWidthField: Field = {
  name: 'width',
  type: 'select',
  defaultValue: 'content',
  options: [
    {
      label: 'Content',
      value: 'content',
    },
    {
      label: 'Popout',
      value: 'popout',
    },
    {
      label: 'Feature',
      value: 'feature',
    },
    {
      label: 'Full',
      value: 'full',
    },
  ],
}
