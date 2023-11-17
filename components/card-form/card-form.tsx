import React from 'react';
import { View, Text, SafeAreaView, KeyboardAvoidingView, Alert, Platform } from "react-native";
import { FormProvider, useForm } from 'react-hook-form'
import styles from './card-form.style';

import cardValidator from 'card-validator'
import FormTextField from '../form-input/form-input';
import { FormModel } from '../../interfaces/form';
import { LinkButton } from '../common/button/LinkButton/LinkButton';
import Button from '../common/button/DefaultButton/DefaultButton';
import { CardLogoImages } from './render-card-logo';

export const CardForm = () => {
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

  const onSubmit = (model: FormModel) => {
    Alert.alert('Success: ' + JSON.stringify(model, null, 2))
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
    </FormProvider>
  )
}