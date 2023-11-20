import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
    Home: undefined, // undefined because we aren't passing any params to the home screen
    Cards: undefined,
    AddCard: undefined
};

export type HomeNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type CardsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Cards'
>;

export type AddCardNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddCard'
>;