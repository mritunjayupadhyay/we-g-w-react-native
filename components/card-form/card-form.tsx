import React, { useState } from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Alert, Platform, ActivityIndicator } from "react-native";
import { FormProvider, useForm } from 'react-hook-form'
import { useDispatch } from "react-redux";
import AwesomeAlert from 'react-native-awesome-alerts';

import styles from './card-form.style';

import cardValidator from 'card-validator'
import { useSelector } from "react-redux";

import FormTextField from '../form-input/form-input';
import { FormModel } from '../../interfaces/form';
import { LinkButton } from '../common/button/LinkButton/LinkButton';
import Button from '../common/button/DefaultButton/DefaultButton';
import { CardLogoImages } from './render-card-logo';
import { createCard } from '../../services/omise.services';
import { CardDataType } from '../../types/card.type';
import { cardNumberFormatter, expirationDateFormatter } from './utils';
import { userActions } from '../../store/user.slice';
import { RootState } from '../../store';
import { AddCardNavigationProp } from '../../types/navigation.type';
type Props = {
  navigation: AddCardNavigationProp;
};
export const CardForm = ({ navigation }: Props) => {
  const cust_id = useSelector((state: RootState) => state.user.cust_id);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "failure" | "">("");
  const dispatch = useDispatch();
  const formMethods = useForm<FormModel>({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: '',
    },
  })
  const { handleSubmit, formState } = formMethods

  const onSubmit = async (model: FormModel) => {
    setLoading(true);
    const expireArr = model.expiration.split("/")
    const cardData: CardDataType = {
      name: model.holderName, 
      cardNumber: model.cardNumber.split(' ').join(''), 
      expireMonth: Number(expireArr[0]), 
      expireYear: Number(expireArr[1]), 
      cvv: model.cvv
    }

    const response = await createCard(cardData, cust_id);
    setLoading(false);
    if (response.error === false && response.cust_id) {
      dispatch(userActions.setUser(response.cust_id));
      dispatch(userActions.setCards(response.cards));
      setStatus("success");
    } else {
      setStatus("failure");
    }
    // Todo : Put some alert
  }

  if (loading) {
    return (
      <View style={{ alignItems: "center", marginTop: 40}}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <FormProvider {...formMethods}>
      <SafeAreaView style={{ flex: 1, justifyContent: "space-between", width: "100%" }}>
        <View style={{ rowGap: 22 }}>
          <FormTextField
            name="cardNumber"
            label={'ATM/Debit/Credit card number'}
            keyboardType="number-pad"
            maxLength={19}
            validationLength={19}
            formatter={cardNumberFormatter}
            rules={{
              required: 'Card number is required.',
              validate: {
                isValid: (value: string) => {
                  return (
                    cardValidator.number(value).isValid ||
                    'This card number looks invalid.'
                  )
                },
              },
            }}
          />
          <FormTextField
            style={{}}
            name="holderName"
            label={'Name on Card'}
            rules={{
              required: 'Card name is required.',
              validate: {
                isValid: (value: string) => {
                  return (
                    cardValidator.cardholderName(value).isValid
                  )
                },
              },
            }}
            autoCorrect={false}
          />

          <View style={[styles.spaceBetweenFlex, { columnGap: 17 }]}>
            <FormTextField
              name="expiration"
              label='Expiry date'
              keyboardType="number-pad"
              maxLength={5}
              style={{ width: "47%"}}
              validationLength={5}
              formatter={expirationDateFormatter}
              rules={{
                required: 'Expiration date is required.',
                validate: {
                  isValid: (value: string) => {
                    return (
                      cardValidator.expirationDate(value).isValid ||
                      'This expiration date looks invalid.'
                    )
                  },
                },
              }}

            />
            <FormTextField
              name="cvv"
              label="CVV"
              keyboardType="number-pad"
              maxLength={3}
              style={{ width: "47%"}}
              validationLength={3}
              rules={{
                required: 'CVV is required.',
                validate: {
                  isValid: (value: string) => {
                    return (
                      cardValidator.cvv(value, 3).isValid ||
                      'This CVV looks invalid.'
                    )
                  },
                },
              }}
            />
          </View>
          <CardLogoImages />

        </View>
        <Button onPress={handleSubmit(onSubmit)} title="Add New Card" />
      </SafeAreaView>
      <AwesomeAlert
          show={status !== ""}
          showProgress={false}
          title={status.toUpperCase()}
          message={status === "success" ? "Card is added" : "There is error on submission"}
          closeOnTouchOutside={false}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            setStatus("")
            navigation.navigate("Cards")
          }}
          onConfirmPressed={() => {
            setStatus("")
            navigation.navigate("Cards")
          }}
        />
    </FormProvider>
  )
}