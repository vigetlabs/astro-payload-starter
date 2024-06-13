import type { Block } from 'payload/types'
import {
  AlignFeature,
  BoldFeature,
  HTMLConverterFeature,
  IndentFeature,
  InlineCodeFeature,
  InlineToolbarFeature,
  ItalicFeature,
  lexicalEditor,
  lexicalHTML,
  LinkFeature,
  StrikethroughFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnderlineFeature,
} from '@payloadcms/richtext-lexical'

import { blockFields } from '@/fields/blockFields'
import { blockWidthField } from '@/fields/blockWidth'
import { themeField } from '@/fields/theme'

export const Image: Block = {
  slug: 'image',
  fields: [
    blockFields({
      name: 'imageFields',
      interfaceName: 'ImageFields',
      fields: [
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
          editor: lexicalEditor({
            // For all of the default features see:
            // https://github.com/payloadcms/payload/blob/v3.0.0-beta.43/packages/richtext-lexical/src/field/lexical/config/server/default.ts
            features: () => [
              AlignFeature(),
              BoldFeature(),
              HTMLConverterFeature(),
              IndentFeature(),
              InlineCodeFeature(),
              InlineToolbarFeature(),
              ItalicFeature(),
              LinkFeature(),
              StrikethroughFeature(),
              SubscriptFeature(),
              SuperscriptFeature(),
              UnderlineFeature(),
            ],
          }),
        },
        lexicalHTML('caption', { name: 'caption_html' }),
      ],
      settings: [themeField, blockWidthField],
    }),
  ],
}
