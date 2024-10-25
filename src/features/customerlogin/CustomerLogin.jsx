import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import CustomSafeAreaView from "components/customsafeareaview/CustomSafeAreaVIew";
import ProductSlider from "components/customsafeareaview/loginAutoScroll/ProductSlider";

const CustomerLogin = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <CustomSafeAreaView>
          <ProductSlider/>
        </CustomSafeAreaView>
      </View>

    </GestureHandlerRootView>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 20,
    marginVertical: 20
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  phoneText: {
    marginLeft: 10,
    color: 'black'
  },
  link: {
    color: 'blue', // Make it look like a link
    textDecorationLine: 'underline',
  },
  footer: {
    borderTopWidth: 0.8,
    borderColor: 'black',
    paddingBottom: 10,
    zIndex: 22,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f9fc',
    width: '100%',
    marginTop: 40
  }
})
