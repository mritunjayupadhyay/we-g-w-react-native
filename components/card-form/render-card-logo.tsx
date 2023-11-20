import { View, StyleSheet, Image, ImageSourcePropType } from "react-native";
import React from 'react';
import { icons } from "../../constants";

const imageUrls:ImageSourcePropType[] = [icons.verifiedVisa, icons.masterCardGray, icons.omiseGray]


export const CardLogoImages = () => {
    const renderImage = (imageUrl: ImageSourcePropType) => {
        return  <Image
        key={imageUrl as string}
        source={imageUrl}
        resizeMode='cover'
        style={styles.img}
      />
    }
    return (
        <View style={styles.container}>
            {imageUrls.map(item => renderImage(item))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      columnGap: 10,
      marginTop: 15
    },
    img: {
          maxWidth: 60,
    },
  });