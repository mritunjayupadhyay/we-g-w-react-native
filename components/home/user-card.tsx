import { TouchableOpacity, StyleSheet, Text, ColorValue } from "react-native"
import { User } from "../../types/user.type";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user.slice";
import { HomeNavigationProp } from "../../types/navigation.type";


type Prop = {
 user: User,
 navigation: HomeNavigationProp;

}

const getColor = (id: number): ColorValue => {
    switch (id) {
        case 1:
            return '#66CCCC';
        case 2:
            return '#36465D'
        case 3:
            return '#00A68C'
        case 4:
            return '#660033'
        case 5: 
            return '#666699'
        default:
            return '#33CCCC'
    }
}

export const UserCard = ({user, navigation}: Prop) => {
    const dispatch = useDispatch();

    const onPress = () => {
        dispatch(userActions.selectUser(user));
        navigation.navigate("Cards")
    };
    return(
        <TouchableOpacity
        onPress={onPress}            
            style={[styles.card, { backgroundColor: getColor(user.id)}]}>

            <Text numberOfLines={1} style={styles.text}>{user.id}</Text>
            <Text style={styles.title}>{user.name}</Text>
        
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
        paddingRight:20,
        width:138,
        height:136,
        color: '#fff',
    },
    text: {
        fontSize:12,
        alignSelf:'flex-start',
        color: '#fff',
        left: 10,
        top:15
    },
    title: {
        fontSize:22,
        alignSelf:'center',
        color: '#fff',
        marginTop: 35
    },
})