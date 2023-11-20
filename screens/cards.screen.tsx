import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import AwesomeAlert from 'react-native-awesome-alerts';

import  {EmptyCardComponent}  from '../components/empty-card/empty-card'
import { CardsNavigationProp } from "../types/navigation.type";
import { COLORS, SIZES } from "../constants";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { CardList } from "../components/card/cardList";
import { RootState } from "../store";
import useGetCard from "../hooks/useGetCard.hook";
import { userActions } from "../store/user.slice";
import { chargeCard } from "../services/omise.services";
import { SavedCardDataType } from "../types/card.type";

type Props = {
  navigation: CardsNavigationProp;
};

export const CardsScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState<SavedCardDataType | null>(null);

  const cust_id = useSelector((state: RootState) => state.user.cust_id);
  const cards = useSelector((state: RootState) => state.user.cards);
  const selectedCard = useSelector((state: RootState) => state.user.selectedCard);

  const pay = async() => {
    setLoading(true);
    if (selectedCard !== null) {
      await chargeCard(selectedCard.cust_id, selectedCard.card_id)
      setPaymentSuccess(selectedCard)
    }
    dispatch(userActions.selectCard(null))
    setLoading(false);
  }

  useEffect(() => {
    if (selectedCard) {
      setPaymentSuccess(null)
    }
  }, [selectedCard])

  const { data, isLoading, error } = useGetCard(cust_id)
  useEffect(() => {
    dispatch(userActions.setCards(data));
  }, [data])
  const renderSuccessMessage = () => {
    if (paymentSuccess === null) return;
    return (
      <View style={styles.paymentSuccessContainer}>
        <Text style={styles.paymentSuccessText}>✅ ฿21 is deducted from {paymentSuccess.last_digits}</Text>
      </View>
    )
  }
  if (isLoading || loading) {
    return (
      <View style={{ alignItems: "center", marginTop: 40}}>
        <ActivityIndicator />
      </View>
    )
  }
    return (
      <SafeAreaView style={{ flex: 1, alignItems: "center", backgroundColor: COLORS.white, padding: SIZES.padding2 }}>
      { cards.length === 0 
        ? <EmptyCardComponent navigation={navigation} />
        : <CardList cards={cards} />
      }
      <AwesomeAlert
          show={selectedCard !== null}
          showProgress={false}
          title={'PAY'}
          message={"Are you going to pay ฿21?"}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          showCancelButton={true}
          confirmText="OK"
          cancelText="Cancel"
          confirmButtonColor="#53A77A"
          cancelButtonColor="#F32013"
          onCancelPressed={() => {
            dispatch(userActions.selectCard(null))
          }}
          onConfirmPressed={() => {
            pay()
          }}
        />
        {renderSuccessMessage()}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  paymentSuccessContainer: {
    justifyContent: 'center',
    marginHorizontal: 36,
    width: "90%",
    marginTop: 40,
    alignItems: "center",
    padding: 12,
    
  },
  paymentSuccessText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#078BDC"
  }
});