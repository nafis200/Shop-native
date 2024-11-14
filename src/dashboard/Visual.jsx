
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import LottieView from "lottie-react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { useCollapsibleContext } from "@r0b0t3d/react-native-collapsible";
import { darkWeatherColors } from "utils/Constant";
import { screenHeight, screenWidth } from "utils/Scaling";


const Visual = () => {

    const {scrollY} = useCollapsibleContext()
    
    const headerAnimatedStyle = useAnimatedStyle(()=>{
      const opacity = interpolate(scrollY.value,[0,120],[1,0])
      return {opacity}
    })

    return (
        <Animated.View style={[styles.container,headerAnimatedStyle]}>
            <LinearGradient colors={darkWeatherColors} style={styles.gradient} />
            <Image source={require('../assets/image/cloud.png')} style={styles.cloud} />
            <LottieView autoPlay={true} enableMergePathsAndroidForKitKatAndAbove={true}
                loop={true}
                style={styles.lottie}
                source={require('../assets/jsondata/raining.json')}
            />
        </Animated.View>
    );
};

export default Visual;

const styles = StyleSheet.create({
    container: {
        position: 'absolute'
    },
    lottie: {
        width: '100%',
        height: 150,
        position: 'absolute',
        transform: [{ scaleX: -1 }]
    },
    gradient: {
        width: '100%',
        height: screenHeight * 0.4,
        position: 'absolute'
    },
    cloud: {
        width: screenWidth,
        resizeMode: 'stretch',
        height: 100,

    }
});
