'use client'
import React, { useEffect, useState, useCallback, Fragment } from 'react'

// original example for Payload v2:
// https://github.com/payloadcms/custom-field-guide/blob/master/src/color-picker/InputField.tsx

import { useField } from '@payloadcms/ui/forms/useField'
import { usePreferences } from '@payloadcms/ui/providers/Preferences'
import { Button } from '@payloadcms/ui/elements/Button'
import { FieldLabel } from '@payloadcms/ui/forms/FieldLabel'
import { FieldError } from '@payloadcms/ui/forms/FieldError'
import { TextInputProps } from '@payloadcms/ui/fields/Text'

import { validateHexColor } from '@/utilities/validateHexColor'
import './styles.scss'

// keep a list of default colors to choose from
const defaultColors = [
  '#333333',
  '#9A9A9A',
  '#F3F3F3',
  '#FF6F76',
  '#FDFFA4',
  '#B2FFD6',
  '#F3DDF3',
]
const baseClass = 'custom-color-picker'

const preferenceKey = 'color-picker-colors'

const InputField: React.FC<TextInputProps> = (props) => {
  const { path, label, required, validate } = props

  const {
    value = '',
    setValue,
    errorMessage,
    showError,
  } = useField({
    path,
    validate,
  })
  const classes = ['field-type', 'text', baseClass, showError && 'error']
    .filter(Boolean)
    .join(' ')

  const { getPreference, setPreference } = usePreferences()
  const [colorOptions, setColorOptions] = useState(defaultColors)
  const [isAdding, setIsAdding] = useState(false)
  const [colorToAdd, setColorToAdd] = useState('')

  useEffect(() => {
    const mergeColorsFromPreferences = async () => {
      const colorPreferences = await getPreference<string[]>(preferenceKey)
      if (colorPreferences) {
        setColorOptions(colorPreferences)
      } else {
        // add current value if not in colorOptions
        if (value && colorOptions.indexOf(value as string) === -1) {
          setColorOptions([value as string, ...colorOptions])
        }
      }
    }
    mergeColorsFromPreferences()
  }, [getPreference, setColorOptions])

  const handleAddColor = useCallback(() => {
    setIsAdding(false)
    setValue(colorToAdd)

    // prevent adding duplicates
    if (colorOptions.indexOf(colorToAdd) > -1) return

    let newOptions = colorOptions
    newOptions.unshift(colorToAdd)

    // update state with new colors
    setColorOptions(newOptions)

    // store the user color preferences for future use
    setPreference(preferenceKey, newOptions)
  }, [colorOptions, setPreference, colorToAdd, setIsAdding, setValue])

  return (
    <div className={classes}>
      <FieldLabel htmlFor={path} label={label} required={required} />
      <FieldError showError={showError} message={errorMessage} />
      {isAdding && (
        <div>
          <input
            className={`${baseClass}__input`}
            type="text"
            placeholder="#000000"
            onChange={(e) => setColorToAdd(e.target.value)}
            value={colorToAdd}
          />
          <Button
            className={`${baseClass}__btn`}
            buttonStyle="primary"
            iconPosition="left"
            iconStyle="with-border"
            size="small"
            onClick={handleAddColor}
            disabled={validateHexColor(colorToAdd) !== true}
          >
            Add
          </Button>
          <Button
            className={`${baseClass}__btn`}
            buttonStyle="secondary"
            iconPosition="left"
            iconStyle="with-border"
            size="small"
            onClick={() => setIsAdding(false)}
          >
            Cancel
          </Button>
        </div>
      )}
      {!isAdding && (
        <Fragment>
          <ul className={`${baseClass}__colors ${showError ? 'error' : ''}`}>
            {colorOptions.map((color, i) => (
              <li key={i}>
                <button
                  type="button"
                  key={color}
                  className={`chip ${color === value ? 'chip--selected' : ''} chip--clickable`}
                  style={{ backgroundColor: color }}
                  aria-label={color}
                  onClick={() => setValue(color)}
                />
              </li>
            ))}
          </ul>
          <Button
            className="add-color"
            icon="plus"
            buttonStyle="icon-label"
            onClick={() => {
              setIsAdding(true)
              setValue('')
            }}
          />
        </Fragment>
      )}
    </div>
  )
}

export default InputField
