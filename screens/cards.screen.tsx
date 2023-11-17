import { SafeAreaView } from "react-native";
import  {EmptyCardComponent}  from '../components/empty-card/empty-card'
import { CardsNavigationProp } from "../types/navigation.type";
import { SIZES } from "../constants";
import { useState } from "react";
import { CardList } from "../components/card/cardList";

type Props = {
  navigation: CardsNavigationProp;
};

export const CardsScreen = ({navigation}: Props) => {
  const [cards, setCards] = useState([1, 2])
    return (
      <SafeAreaView style={{ flex: 1, padding: SIZES.padding2 }}>
      { cards.length === 0 
        ? <EmptyCardComponent navigation={navigation} />
        : <CardList />
      }
      </SafeAreaView>
    );
}