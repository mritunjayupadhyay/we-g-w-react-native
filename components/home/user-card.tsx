import { TouchableOpacity, StyleSheet, Text, ColorValue } from "react-native"
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user.slice";
import { HomeNavigationProp } from "../../types/navigation.type";


type Prop = {
 navigation: HomeNavigationProp;
}

export const UserCard = ({navigation}: Prop) => {
    const onPress = () => {
        navigation.navigate("Cards")
    };
    return(
        <TouchableOpacity
        onPress={onPress}            
            style={[styles.card, { backgroundColor: "#66CCCC"}]}>
            <Text style={styles.text}>Cards</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        elevation: 4,
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        borderRadius: 15,
        margin:20,
        width:138,
        height:136,
        color: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize:22,
        alignSelf:'center',
        color: '#fff',
    },
})