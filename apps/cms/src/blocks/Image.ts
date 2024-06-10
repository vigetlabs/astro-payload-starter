import type { Block } from 'payload/types'
import {
  BoldFeature,
  HTMLConverterFeature,
  ItalicFeature,
  LinkFeature,
  StrikethroughFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'

import { blockFields } from '@/fields/blockFields'

export const Image: Block = {
  slug: 'image',
  fields: [
    blockFields({
      name: 'imageFields',
      interfaceName: 'ImageFields',
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
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
              HTMLConverterFeature({}),
              ItalicFeature(),
              LinkFeature(),
              StrikethroughFeature(),
            ],
          }),
        },
        lexicalHTML('caption', { name: 'caption_html' }),
      ],
    }),
  ],
}