import type { Block } from 'payload/types'
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from '@payloadcms/richtext-lexical'

import { blockFields } from '@/fields/blockFields'

export const Text: Block = {
  slug: 'text',
  fields: [
    blockFields({
      name: 'textFields',
      interfaceName: 'TextFields',
      fields: [
        {
          name: 'text',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
              ...defaultFeatures,
              HTMLConverterFeature({}),
            ],
          }),
        },
        lexicalHTML('text', { name: 'text_html' }),
      ],
    }),
  ],
}
