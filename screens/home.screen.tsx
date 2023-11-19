import { SafeAreaView, StyleSheet, View } from "react-native";
import { HomeNavigationProp } from "../types/navigation.type";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserCard } from "../components/home/user-card";
import { COLORS } from "../constants";


type Props = {
  navigation: HomeNavigationProp;
};

export const HomeScreen = ({ navigation }: Props) => {
  // const users = useSelector((state: RootState) => state.user.users);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white }}>
      <View
        style={{ marginBottom: 20 }}
      >
        <UserCard navigation={navigation} />
      </View>
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