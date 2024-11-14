import { StyleSheet, Text, View, Animated as RNAnimated, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import NoticeAnimation from "./NoticeAnimation";
import { NoticeHeight } from "utils/Scaling";
import Visual from "./Visual";
import {
  CollapsibleContainer,
  CollapsibleHeaderContainer,
  CollapsibleScrollView,
  useCollapsibleContext,
  withCollapsibleContext
} from '@r0b0t3d/react-native-collapsible';
import AnimatedHeader from "./AnimatedHeader";
import StickySearchbar from "./StickySearchbar";
import CustomText from "components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";

const Notice_Height = -(NoticeHeight + 12);
const ProductDashboard = () => {
  const noticePostion = useRef(new RNAnimated.Value(NoticeHeight)).current

  const slideUp = () => {
    RNAnimated.timing(noticePostion, {
      toValue: Notice_Height,
      duration: 2000,
      useNativeDriver: false
    }).start()
  }

  const slideDown = () => {
    RNAnimated.timing(noticePostion, {
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
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <NoticeAnimation noticepostition={noticePostion}>
      <>
        <Visual />
        <SafeAreaView />

        <CollapsibleContainer style={styles.panelContainer}>
          <CollapsibleHeaderContainer containerStyle={styles.transparent}>
            <AnimatedHeader
              showNotice={() => {
                slideDown();
                const timeoutId = setTimeout(() => {
                  slideUp();
                }, 3500);
                return () => clearTimeout(timeoutId);
              }}
            />
            <StickySearchbar />
          </CollapsibleHeaderContainer>
        </CollapsibleContainer>
        <CollapsibleScrollView
          nestedScrollEnabled
          style={styles.panelContainer}
          showsVerticalScrollIndicator={false}
        >

          <View style={{ backgroundColor: '#F8F8F8', padding: 20 }}>
            <CustomText fontSize={RFValue(32)} style={{ opacity: 0.2, color: 'black' }}>
              Our shop last min
            </CustomText>
            <CustomText fontSize={RFValue(32)} style={{ opacity: 0.2, color: 'black', marginTop: 10, paddingBottom: 100 }}>
              Developed by
            </CustomText>
          </View>

        </CollapsibleScrollView>
      </>
    </NoticeAnimation>
  );
};

export default withCollapsibleContext(ProductDashboard);

const styles = StyleSheet.create({
  panelContainer: {
    flex: 1,
  },
  transparent: {
    backgroundColor: "white",
  },
  backToTopBtn: {
    position: 'absolute',
    alignSelf: 'center',
    top: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    zIndex: 999,
  }
});
