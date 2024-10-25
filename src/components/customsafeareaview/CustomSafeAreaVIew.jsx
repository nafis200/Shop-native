
import { SafeAreaView,Text, StyleSheet, View } from "react-native";
import React from "react";

const CustomSafeAreaView = ({children,style}) => {
  return (
    <SafeAreaView style={[styles.container,style]}>
      <View style={[styles.container,style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})

export default CustomSafeAreaView;


