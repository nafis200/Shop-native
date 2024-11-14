
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const Practice = () => {
  const slideAnim = useRef(new Animated.Value(-150)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View style={[styles.box, { transform: [{ translateY: slideAnim }]}, { transform: [{ translateX: slideAnim }]} ]} />
  );
};

const styles = StyleSheet.create({
  box: { width: 150, height: 150, backgroundColor: 'orange', marginTop: 100 },
});

export default Practice;
