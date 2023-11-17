import { StyleSheet } from "react-native";
import { SIZES, CARD, COLORS } from "../../constants";

const { width, height, borderRadius, paddingBottom, 
    paddingLeft, paddingTop, paddingRight, shadow } = CARD;

const styles = StyleSheet.create({
    list: {
        rowGap: 20,
        alignItems: "center"
    },
    container: {
        width, height, borderRadius, paddingBottom, 
        paddingLeft, paddingTop, paddingRight,
        backgroundColor: COLORS.white,
        ...shadow 
    },
    cardImage: {
        height: 20,
        maxWidth: 50,
        marginBottom: 17,
    },
    cardNumberContainer: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    circle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: COLORS.black,
        opacity: 0.45
    },
    cardNum: {
        color: COLORS.gray,
        fontSize: SIZES.fontSize3,
        fontWeight: "500",
        letterSpacing: 1
    },
    spaceBetweenFlex: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    label: {
        fontSize: SIZES.fontSize1,
      fontWeight: "500",
      color: COLORS.gray2,
    },
    value: {
        fontSize: SIZES.fontSize2,
      fontWeight: "500",
      color: COLORS.black,
    },
    text: {
      textAlignVertical: "center",
      textAlign: "center",
      fontSize: SIZES.fontSize5,
      fontWeight: "400"
    }
})  

export default styles;