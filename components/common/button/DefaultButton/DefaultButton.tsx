import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { COLORS, SIZES } from '../../../../constants'

type Props = React.ComponentProps<typeof TouchableOpacity> & {
  title: string
}

const Button: React.FC<Props> = (props) => {
  const { title, style, ...restOfProps } = props

  return (
    <TouchableOpacity style={[styles.container, style]} {...restOfProps}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGreen,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.borderRadius2,
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.fontSize4,
    letterSpacing: 0.1,
    fontWeight: "700"
  },
})

export default Button