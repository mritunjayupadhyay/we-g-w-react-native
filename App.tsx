import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home.screen';
import { CardsScreen } from './screens/cards.screen';
import { AddCardScreen } from './screens/add-card.screen';
import { RootStackParamList } from './types/navigation.type';
import { COLORS, icons } from './constants';
import HeaderIcon from './components/common/headerIcon/HeaderIcon';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
      >
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShadowVisible: false,
          headerStyle: { backgroundColor: '#FFF'},
          headerTitle: "",
        }}
        />
        <Stack.Screen 
        name="Cards" 
        component={CardsScreen} 
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.white},
          headerTitleAlign: "center",
          headerTitle: "Cards",
          headerTitleStyle: { fontSize: 18},
          headerLeft: () => (
            <HeaderIcon iconUrl={icons.chevronLeft} style={{ width: 9, height: 16}} handlePress={() => {
              navigation.goBack()
            }} />
          ),
          headerRight: () => (
            <HeaderIcon iconUrl={icons.plus} style={{ width: 20, height: 20}} handlePress={() => {
              navigation.navigate("AddCard")
            }} />
          ),
        })}
        />
        <Stack.Screen 
        name="AddCard" 
        component={AddCardScreen} 
        options={({ navigation }) => ({
          headerShadowVisible: false,
          headerStyle: { backgroundColor: COLORS.white},
          headerTitleAlign: "center",
          headerTitle: "",
          headerLeft: () => (
            <HeaderIcon iconUrl={icons.chevronLeft} style={{ width: 9, height: 16}} handlePress={() => {
              navigation.goBack()
            }} />
          )
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}