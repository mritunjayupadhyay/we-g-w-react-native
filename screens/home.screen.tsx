import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { HomeNavigationProp } from "../types/navigation.type";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { UserCard } from "../components/home/user-card";
import { COLORS } from "../constants";


type Props = {
  navigation: HomeNavigationProp;
};

export const HomeScreen = ({ navigation }: Props) => {
  const users = useSelector((state: RootState) => state.user.users);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white }}>
      <FlatList
        style={{ marginBottom: 20 }}
        data={users}
        numColumns={2}
        renderItem={({ item }) => <UserCard user={item} navigation={navigation} />}
        onEndReachedThreshold={0.1}
      />
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