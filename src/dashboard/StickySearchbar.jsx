
import { StyleSheet, Text } from "react-native";
import React from "react";
import SearchBar from "./SearchBar";
import { StickyView, useCollapsibleContext } from "@r0b0t3d/react-native-collapsible";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";

const StickySearchbar = () => {
  const {scrollY} = useCollapsibleContext()
  
  const animatedShadow = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 140], [0, 140]);
    return { opacity };
  });

  const backgroundColorChanges = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [1, 180], [0, 1]);
    return { backgroundColor: `rgba(255, 255, 255, ${opacity})` }; 
  });


  return (
    <StickyView style={[backgroundColorChanges]}>
      <SearchBar/>
      <Animated.View style={[styles.shadow,animatedShadow]}>

      </Animated.View>
    </StickyView>
  );
}; 

export default StickySearchbar;

const styles = StyleSheet.create({
    container:{
        marginTop:20,
    },
    backgroundColors:{
        backgroundColor: 'rgba(255, 255, 255)',
        transform:[{translateY:10}]
    }
});
