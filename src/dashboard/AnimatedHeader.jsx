import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useCollapsibleContext } from "@r0b0t3d/react-native-collapsible";
import Animated,{ interpolate, useAnimatedStyle } from "react-native-reanimated";
import Header from "./Header";

const AnimatedHeader = ({showNotice}) => {
    
    const { scrollY } = useCollapsibleContext()

    const headerAnimatedStyle = useAnimatedStyle(()=>{
       const opacity = interpolate(
         scrollY.value,
         [0,120],
         [1,0]
       )
       return {opacity}
    })
  return (
    <Animated.View style={headerAnimatedStyle}>
    <Header showNotice={showNotice} />
  </Animated.View>
  );
};

export default AnimatedHeader;

const styles = StyleSheet.create({});
