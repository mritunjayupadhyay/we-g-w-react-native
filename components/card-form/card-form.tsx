import React from 'react';
import { View, Text, KeyboardAvoidingView, Alert, Platform } from "react-native";
import { FormProvider, useForm } from 'react-hook-form'
import styles from './card-form.style';

import cardValidator from 'card-validator'
import FormTextField from '../form-input/form-input';
import { FormModel } from '../../interfaces/form';
import { LinkButton } from '../common/button/LinkButton/LinkButton';
import Button from '../common/button/DefaultButton/DefaultButton';

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
        <View style={{ flex: 1, width: "100%" }}>
        <KeyboardAvoidingView
          style={{ padding: 30, rowGap: 30}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <FormTextField
                name="cardNumber"
                label={'Card Number'}
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
                label={'Name'}
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
             <View style={[styles.spaceBetweenFlex, { rowGap: 30}]}>
             <FormTextField
              name="expiration"
              label='Expiration'
              keyboardType="number-pad"
              maxLength={5}
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
              label="Security Code"
              keyboardType="number-pad"
              maxLength={3}
              validationLength={3}
              rules={{
                required: 'Security code is required.',
                validate: {
                  isValid: (value: string) => {
                    return (
                      cardValidator.cvv(value, 3).isValid ||
                      'This security date looks invalid.'
                    )
                  },
                },
              }}
            />
             </View>
             </KeyboardAvoidingView>
             <Button onPress={handleSubmit(onSubmit)} title="Add New Card" />
        </View>
        </FormProvider>
    )
}