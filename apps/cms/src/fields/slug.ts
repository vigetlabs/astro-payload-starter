import { Field } from 'payload/types'

import deepMerge from '@/utilities/deepMerge'
import formatSlug from '@/hooks/formatSlug'

// eslint-disable-next-line no-unused-vars
type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      type: 'text',
      index: true,
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
    },
    overrides,
  )
