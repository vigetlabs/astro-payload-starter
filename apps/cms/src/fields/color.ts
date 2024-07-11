import { Field, TextField } from 'payload/types'
import { validateHexColor } from '@/utilities/validateHexColor'
import InputField from '@/components/ColorPicker/InputField'
import deepMerge from '@/utilities/deepMerge'
// import Cell from '@/components/ColorPicker/Cell'

// eslint-disable-next-line no-unused-vars
type ColorType = (options?: { overrides?: Partial<TextField> }) => Field

export const colorField: ColorType = ({ overrides = {} } = {}) => {
  let colorResult: Field = {
    name: 'color',
    type: 'text',
    validate: validateHexColor,
    admin: {
      components: {
        Field: InputField,
        // Cell,
      },
    },
  }

  return deepMerge(colorResult, overrides)
}
