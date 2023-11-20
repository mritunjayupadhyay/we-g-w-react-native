import { View } from "react-native"
import React from 'react';
import styles from "./card.style";
import { Card } from "./card";
import { CardDataType, SavedCardDataType} from '../../types/card.type';

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