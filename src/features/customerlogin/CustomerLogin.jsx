import { Animated, StyleSheet, Text, View, Image, TouchableOpacity,Alert } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GestureHandlerRootView, PanGestureHandler, State } from "react-native-gesture-handler";
import CustomSafeAreaView from "components/customsafeareaview/CustomSafeAreaVIew";
import ProductSlider from "components/loginAutoScroll/ProductSlider";
import useKeyboardHeight from './../../utils/usekeyboard';
import { AuthContext } from "provider/AuthProvider";
import CustomText from "components/ui/CustomText";
import CustomInput from "components/ui/CustomInput";
import CustomButton from "components/ui/CustomButton";
import { resetAndNavigate } from "utils/NavigationUtils";


const CustomerLogin = () => {

  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [gestureSequence, setGestureSequence] = useState([])

  const keyboardHeight = useKeyboardHeight()

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (keyboardHeight === 0) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: -keyboardHeight * 0.8,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [keyboardHeight]);


  const { signInUser} = useContext(AuthContext)
  const handleLogin = async () => {
    try {
      await signInUser(Email, password);
      Alert.alert(
        "Alert Title",
        "Login successfully",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
      resetAndNavigate('ProductDashboard')
    } catch (error) {
      Alert.alert(
        "Alert Title",
        "Email password dont match",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  };


  const handleGesture = ({ nativeEvent }) => {


    if (nativeEvent.state === State.END) {
      const { translationX, translationY } = nativeEvent
      let direction = ''
      if (Math.abs(translationX) > Math.abs(translationY)) {
        direction = translationX > 0 ? 'right' : 'left'
      }
      else {
        direction = translationY > 0 ? 'down' : 'up'
      }

      console.log(translationX, translationY, direction);

      const newSequence = [...gestureSequence, direction].slice(-5)

      setGestureSequence(newSequence)

      if (newSequence.join(' ') === 'up up down left right') {
        setGestureSequence([])
        resetAndNavigate('DeliveryLogin')
      }

    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.container}>
        <CustomSafeAreaView>
          <ProductSlider />
          <PanGestureHandler onHandlerStateChange={handleGesture}>
            <Animated.ScrollView
              bounces={false}
              keyboardDismissMode='on-drag'
              keyboardShouldPersistTaps='handled'
              contentContainerStyle={styles.subContainer}
              style={{ transform: [{ translateY: animatedValue }] }}
            >
              <View style={styles.content}>
                <Image source={require('../../assets/image1/01.png')} style={styles.logo} />
                <CustomText variant="h2" style={{ color: 'black', fontWeight: 'bold' }}>Login or signup</CustomText>
                <CustomInput
                  onChangeText={(text) => { setEmail(text) }}
                  onClear={() => setEmail('')}
                  value={Email}
                  left={
                    <CustomText
                      style={styles.phoneText}
                      variant="h6"
                    >
                    </CustomText>}
                  placeholder="enter your Email"
                  style={{color:'blue'}}
                />
                <CustomInput
                  onChangeText={(text) => { setPassword(text) }}
                  onClear={() => setPassword('')}
                  value={password}
                  left={
                    <CustomText
                      style={styles.phoneText}
                      variant="h6"
                    >
                    </CustomText>}
                  placeholder="enter your password"

                />

                <CustomButton title='Login' disabled={password.length < 6}
                  loading={loading}
                  onPress={() => handleLogin()}
                />
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: 'black', marginRight: 10 }}>Have not any Accout Please</Text>
                  <TouchableOpacity onPress={() => resetAndNavigate('Register')}>
                    <Text style={styles.link}>Register</Text>
                  </TouchableOpacity>
                </View>

              </View>

            </Animated.ScrollView>
          </PanGestureHandler>
        </CustomSafeAreaView>
      </View>
    </GestureHandlerRootView>
  );
};

export default CustomerLogin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 20,
    marginVertical: 20,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop:250
  },
  phoneText: {
    marginLeft: 10,
    color: 'black',
  },
  link: {
    color: 'blue',
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
    marginTop: 40,
  },
});
