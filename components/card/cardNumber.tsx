import { View, Text } from "react-native";
import React from 'react';
import styles from "./card.style";

const dummyArr = [1, 2, 3, 4]

type Prop = {
    cardNumber: string
}
export const CardNumber = ({ cardNumber}: Prop) => {
    const renderOneCircle = () => {
        return <View style={styles.circle} />
    }
    const render4Circle = () => {
        return (
            <View style={{ gap: 3, flex: 1, flexDirection: "row"}}>
                {dummyArr.map(_ => renderOneCircle())}
            </View>
        )
    }
    const renderNumber = () => {
        const last4digit = cardNumber.substring(cardNumber.length - 4)
        return <Text style={styles.cardNum}>{last4digit}</Text>
    }
    return (
        <View style={styles.cardNumberContainer}>
                {render4Circle()}
                {render4Circle()}
                {render4Circle()}
                {renderNumber()}
        </View>
    )
}