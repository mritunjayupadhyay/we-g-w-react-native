import React from "react";
import { SafeAreaView } from "react-native";
import {CardForm}  from '../components/card-form/card-form'

export const AddCardScreen = () => {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CardForm />
      </SafeAreaView>
    );
}