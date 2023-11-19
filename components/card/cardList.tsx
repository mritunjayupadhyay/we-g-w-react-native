import { View } from "react-native"
import React from 'react';
import styles from "./card.style";
import { Card } from "./card";
import { CardDataType, SavedCardDataType} from '../../types/card.type';

// const cards: CardDataType[] = [
//     {
//         id: 1,
//         cardType: "visa",
//         cardNumber: "4323",
//         name: "Mritunjay",
//         expireMonth: 11,
//         expireYear: 2023,
//         cvv: "333",
//     },
//     {
//         id: 2,
//         cardType: "mastercard",
//         cardNumber: "4323",
//         name: "Mritunjay",
//         expireMonth: 11,
//         expireYear: 2023,
//         cvv: "333",
//     },
//     {
//         id: 3,
//         cardType: "jcb",
//         cardNumber: "4323",
//         name: "Mritunjay",
//         expireMonth: 11,
//         expireYear: 2023,
//         cvv: "333",
//     }
// ]

type Prop = {
    cards: SavedCardDataType[]
}

export const CardList = ({ cards}: Prop) => {
    return (
        <View style={styles.list}>
            {cards.map((item) => <Card key={item.card_id} card={item} />)}
        </View>
    )
}