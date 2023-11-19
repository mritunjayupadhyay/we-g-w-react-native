import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import  {EmptyCardComponent}  from '../components/empty-card/empty-card'
import { CardsNavigationProp } from "../types/navigation.type";
import { COLORS, SIZES } from "../constants";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { CardList } from "../components/card/cardList";
import { RootState } from "../store";
import useGetCard from "../hooks/useGetCard.hook";
import { Screen } from "react-native-screens";
import { userActions } from "../store/user.slice";

type Props = {
  navigation: CardsNavigationProp;
};

export const CardsScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();

  const cust_id = useSelector((state: RootState) => state.user.cust_id);
  const cards = useSelector((state: RootState) => state.user.cards);


  const { data, isLoading, error } = useGetCard(cust_id)
  useEffect(() => {
    dispatch(userActions.setCards(data));
  }, data)
  if (isLoading) {
    return (
      <View style={{ alignItems: "center", marginTop: 40}}>
        <ActivityIndicator />
      </View>
    )
  }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, padding: SIZES.padding2 }}>
      { cards.length === 0 
        ? <EmptyCardComponent navigation={navigation} />
        : <CardList cards={cards} />
      }
      </SafeAreaView>
    );
}