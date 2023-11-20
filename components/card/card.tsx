import { View, Text, Image, TouchableOpacity } from "react-native"
import React from 'react';
import { useDispatch } from "react-redux";
import styles from "./card.style";
import { SavedCardDataType } from "../../types/card.type";
import { images } from "../../constants";
import { CardNumber } from "./cardNumber";
import { userActions } from "../../store/user.slice";

type IProp = {
    card: SavedCardDataType
}

const getCardTypeImage = (cardType: string): string | null => {
    switch (cardType.toLocaleLowerCase()) {
        case "visa":
            return images.visa.xl;
        case "mastercard":
            return images.mastercard.xl
        case "jcb":
            return images.jcb.xl
        default:
            return images.card
    }
}

export const Card = ({ card }: IProp) => {
    const dispatch = useDispatch();

    const onPress = () => {
        dispatch(userActions.selectCard(card))
    };
    const cardTypeUrl = getCardTypeImage(card.brand)
    return (
        <TouchableOpacity onPress={onPress}  style={styles.container}>
            <View style={{ flex: 1, alignItems: "flex-start" }}>
                <Image
                    source={cardTypeUrl === null ? images.card : cardTypeUrl}
                    resizeMode="contain"
                    style={styles.cardImage}
                />
                <CardNumber cardNumber={card.last_digits} />
                <View style={styles.spaceBetweenFlex}>
                    <Text style={styles.label}>Name on Card</Text>
                    <Text style={styles.label}>Expires</Text>
                </View>
                <View style={styles.spaceBetweenFlex}>
                    <Text style={styles.value}>{card.name}</Text>
                    <Text style={styles.value}>{card.expiration_month}/{card.expiration_year % 100}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}