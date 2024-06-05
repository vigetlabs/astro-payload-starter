import type { Block } from 'payload/types'
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  StrikethroughFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { blockFields } from '@/fields/blockFields'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    blockFields({
      name: 'mediaBlockFields',
      fields: [
        {
          name: 'position',
          type: 'select',
          defaultValue: 'default',
          options: [
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Fullscreen',
              value: 'fullscreen',
            },
          ],
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'richText',
          // TODO make this a "simple" editor with inline options only:
          // bold, italic, link, strikethrough, etc
          // removing defaultFeatures seems to break lexical's floating select toolbar
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              BoldFeature(),
              ItalicFeature(),
              LinkFeature(),
              StrikethroughFeature(),
            ],
          }),
        },
      ],
    }),
  ],
}
