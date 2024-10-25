
import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from '@assets/logo/photo_2024-10-12_14-12-48.jpg'
import { screenHeight, screenWidth } from "utils/Scaling";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});
