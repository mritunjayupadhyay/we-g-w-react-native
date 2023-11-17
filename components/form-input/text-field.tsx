import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  Text
} from 'react-native'
// import LibraryContext from '../LibraryContext'

type Props = React.ComponentProps<typeof TextInput> & {
  label: string
  errorText?: string | null
  endEnhancer?: React.ReactNode
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

const styles = StyleSheet.create({
  input: {
    padding: 24,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  label: {
    fontSize: 14,
  },
  enhancerContainer: {
    position: 'absolute',
    top: 12,
    right: 16,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: 12,
    color: '#B00020',
  },
})

export default TextField