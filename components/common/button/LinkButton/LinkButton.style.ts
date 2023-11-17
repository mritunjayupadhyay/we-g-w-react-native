import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: COLORS.lightGreen,
        fontSize: SIZES.fontSize5,
        fontWeight: "500"
    }
})  

export default styles;