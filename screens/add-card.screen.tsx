import React from "react";
import { SafeAreaView } from "react-native";
import {CardForm}  from '../components/card-form/card-form'
import { COLORS, SIZES } from "../constants";

export const AddCardScreen = () => {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', padding: SIZES.padding2, backgroundColor: COLORS.white, justifyContent: 'center' }}>
        <CardForm />
      </SafeAreaView>
    );
}