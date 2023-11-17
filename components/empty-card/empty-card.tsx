import React from "react";
import { View, Text, Image } from "react-native";
import styles from './empty-card.style';
import { images } from '../../constants'
import { LinkButton } from "../common/button/LinkButton/LinkButton";
import { CardsNavigationProp } from "../../types/navigation.type";

type Props = {
    navigation: CardsNavigationProp;
};

export const EmptyCardComponent = ({ navigation }: Props) => {
    const addCard = () => {
        navigation.navigate("AddCard")
    }
    return (
        <View style={styles.container}>
           <Image
            source={images.card}
            resizeMode='contain'
            style={styles.cardImage}
          />
          <Text style={styles.text}>No Cards Found</Text>
          <Text style={[styles.text, { marginVertical: 13}]}>We recommend adding a card for easy payment</Text>
          <LinkButton clickHandler={addCard} buttonStyle={{}} buttonText="Add New Card" />
        </View>
    );
}