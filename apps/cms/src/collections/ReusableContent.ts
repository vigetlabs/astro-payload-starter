import type { CollectionConfig } from 'payload/types'

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Reusable Content',
    plural: 'Reusable Content',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
