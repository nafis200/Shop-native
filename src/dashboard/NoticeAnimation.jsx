import { StyleSheet, Text, View,Animated as RNAnimated } from "react-native";
import React from "react";
import Notice from "./Notice";
import { NoticeHeight } from "utils/Scaling";

const Notice_HEIGHT = -(NoticeHeight + 12);

const NoticeAnimation = ({noticepostition,children}) => {
  return (
    <View style={styles.container}>      
    <RNAnimated.View 
    style={[
    {
      transform: [{translateY: noticepostition}]
    }, styles.noticeContainer]}
    >
        <Notice/>
    </RNAnimated.View>

    <RNAnimated.View
    style={[
      styles.contentContainer,{
        paddingTop: noticepostition.interpolate({
          inputRange: [Notice_HEIGHT, 0], 
          outputRange: [0, NoticeHeight + 20]
        }),
      }
    ]}
    >
      {children}
    </RNAnimated.View>
  
    </View>
  );
};

export default NoticeAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noticeContainer: {
    width: '100%',
    zIndex: 999,
    position: 'absolute',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  }

});
