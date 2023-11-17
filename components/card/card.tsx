import { View, Text, Image } from "react-native"
import React from 'react';
import styles from "./card.style";
import { CardDataType, CardType } from "../../types/card.type";
import { images } from "../../constants";
import { CardNumber } from "./cardNumber";

type IProp = {
    card: CardDataType
}

const getCardTypeImage = (cardType: CardType): string | null => {
    switch (cardType) {
        case "visa":
            return images.visa.xl;
        case "mastercard":
            return images.mastercard.xl
        case "jcb":
            return images.jcb.xl
        default:
            return null
    }
}

export const Card = ({ card }: IProp) => {
    const cardTypeUrl = getCardTypeImage(card.cardType)
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Image
                    source={cardTypeUrl === null ? images.card : cardTypeUrl}
                    resizeMode="contain"
                    style={styles.cardImage}
                />
                <CardNumber cardNumber={card.cardNumber} />
                <View style={styles.spaceBetweenFlex}>
                    <Text style={styles.label}>Name on Card</Text>
                    <Text style={styles.label}>Expires</Text>
                </View>
                <View style={styles.spaceBetweenFlex}>
                    <Text style={styles.value}>{card.name}</Text>
                    <Text style={styles.value}>{card.expireMonth}/{card.expireYear}</Text>
                </View>
            </View>
        </View>
    )
}