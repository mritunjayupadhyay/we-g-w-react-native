import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  TextInput,
  View,
  Text
} from 'react-native'
import styles from './form-input.style'
// import LibraryContext from '../LibraryContext'

type Props = React.ComponentProps<typeof TextInput> & {
  label: string
  errorText?: string | null
  endEnhancer?: React.ReactNode,

}

const TextField = React.forwardRef<TextInput, Props>((props, ref) => {
  const {
    label,
    errorText,
    value,
    endEnhancer,
    style,
    onBlur,
    onFocus,
    ...restOfProps
  } = props
//   const { inputColors = {}, fonts, overrides } = useContext(LibraryContext)
//   const {
//     errored: errorColor = '#B00020',
//     focused: focusedColor = '#080F9C',
//     regular: regularColor = '#B9C4CA',
//   } = inputColors


  let color = "#000"
  if (errorText) {
    color = "#F00"
  }

  return (
    <View style={style}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          
        ]}
        ref={ref}
        {...restOfProps}
        value={value}
      />
      {!!errorText && (
        <Text style={styles.error}>{errorText}</Text>
      )}
    </View>
  )
})

export default TextField