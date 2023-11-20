import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from './LinkButton.style';

type Props = {
    clickHandler: () => void,
    buttonText: string,
    buttonStyle?: object
};

const LinkButton = ({ clickHandler, buttonStyle, buttonText  }: Props) => {
    return (
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={() => clickHandler()}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    )
}

export { LinkButton }