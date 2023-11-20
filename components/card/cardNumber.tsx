import { View, Text } from "react-native";
import React from 'react';
import styles from "./card.style";

const dummyArr = [1, 2, 3, 4]

type Prop = {
    cardNumber: string
}
export const CardNumber = ({ cardNumber}: Prop) => {
    const renderOneCircle = (key: number) => {
        return <View key={key} style={styles.circle} />
    }
    const render4Circle = () => {
        return (
            <View style={{ gap: 3, flex: 1, flexDirection: "row"}}>
                {dummyArr.map(item => renderOneCircle(item))}
            </View>
        )
    }
    const renderNumber = () => {
        return <Text style={styles.cardNum}>{cardNumber}</Text>
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