import { StyleSheet } from "react-native";
import { SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
      width: 240,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    cardImage: {
        width: 40,
        marginBottom: 17,
    },
    spaceBetweenFlex: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
      textAlignVertical: "center",
      textAlign: "center",
      fontSize: SIZES.fontSize5,
      fontWeight: "400"
    }
})  

export default styles;