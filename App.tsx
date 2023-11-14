import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home.screen';
import { CardsScreen } from './screens/cards.screen';
import { AddCardScreen } from './screens/add-card.screen';

export type RootStackParamList = {
  Home: undefined, // undefined because you aren't passing any params to the home screen
  Cards: undefined; 
  AddCard: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#FFF'},
          headerTitleAlign: "center",
          headerTitle: "Home",
        }}
        />
        <Stack.Screen 
        name="Cards" 
        component={CardsScreen} 
        />
        <Stack.Screen 
        name="AddCard" 
        component={AddCardScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}