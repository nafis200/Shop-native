import { StyleSheet,Animated as RNAnimated, Text, TouchableOpacity, View, SafeAreaView } from "react-native";
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "provider/AuthProvider";
import { resetAndNavigate } from "utils/NavigationUtils";
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  useCollapsibleContext,
  withCollapsibleContext
} from '@r0b0t3d/react-native-collapsible';
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated";
import { NoticeHeight } from "utils/Scaling";
import Icon from 'react-native-vector-icons/Ionicons';
import NoticeAnimation from "./NoticeAnimation";

const Notice_Height = -(NoticeHeight + 12);

const ProductDashboard = () => {
  
  const noticePosition = useRef(new RNAnimated.Value(NoticeHeight)).current;

  const slideUp = () => {
    RNAnimated.timing(noticePosition, {
      toValue:Notice_Height,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  };

  const slideDown = () => {
    RNAnimated.timing(noticePosition, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    slideDown();
    const timeoutId = setTimeout(() => {
      slideUp();
    }, 3500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <NoticeAnimation noticePosition={noticePosition}>
      <>
      <SafeAreaView/>
       <View>
        <Text>product dashboard</Text>
       </View>
      </>
    </NoticeAnimation>
  );
};

export default ProductDashboard;

const styles = StyleSheet.create({});