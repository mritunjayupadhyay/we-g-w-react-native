import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";

import styles from "./Header.style";
type Props = {
    iconUrl: ImageSourcePropType,
    handlePress: () => void
    style?: object
}
const HeaderIcon = ({ iconUrl, handlePress, style = {} }: Props) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={[styles.btnImg, style]}
      />
    </TouchableOpacity>
  );
};

export default HeaderIcon;