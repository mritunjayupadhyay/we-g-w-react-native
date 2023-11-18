import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  input: {
    padding: SIZES.padding,
    borderWidth: 1.5,
    borderColor: COLORS.gray3,
    borderRadius: SIZES.borderRadius,
    fontSize: SIZES.fontSize4,
    height: SIZES.height,
    color: COLORS.black
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  label: {
    fontSize: SIZES.fontSize3,
    color: COLORS.black,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 8
  },
  enhancerContainer: {
    position: 'absolute',
    top: 12,
    right: 16,
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    fontSize: SIZES.fontSize2,
    color: COLORS.error,
  },
})

export default styles