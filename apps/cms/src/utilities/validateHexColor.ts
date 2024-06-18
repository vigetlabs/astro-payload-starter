export const validateHexColor = (value: string = ''): true | string => {
  return (
    value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/) !== null ||
    `Please give a valid hex color`
  )
}
