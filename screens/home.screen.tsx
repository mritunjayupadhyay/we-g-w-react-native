import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export const HomeScreen = ({navigation}: Props) => {
    const onPress = () => {
        navigation.navigate("Cards")
      };
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
            <Text>Home Screen is here</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text>Go to Cards</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 36,
    },
    button: {
      padding: 12,
      marginBottom: 12
    }
  });