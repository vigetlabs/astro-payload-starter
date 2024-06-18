import { Field } from 'payload/types'
import { validateHexColor } from '@/utilities/validateHexColor'
import InputField from '@/components/ColorPicker/InputField'
// import Cell from '@/components/ColorPicker/Cell'

export const colorField: Field = {
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
