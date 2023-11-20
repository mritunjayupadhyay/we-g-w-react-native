import React from "react";
import { SafeAreaView } from "react-native";
import {CardForm}  from '../components/card-form/card-form'
import { COLORS, SIZES } from "../constants";
import { AddCardNavigationProp } from "../types/navigation.type";

type Props = {
  navigation: AddCardNavigationProp;
};

export const AddCardScreen = ({navigation}: Props) => {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', padding: SIZES.padding2, backgroundColor: COLORS.white, justifyContent: 'center' }}>
        <CardForm navigation={navigation} />
      </SafeAreaView>
    );
}