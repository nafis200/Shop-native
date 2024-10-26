
import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "splashscreen/SplashScreen";
import DeliveryLogin from "features/deliveryLogin/DeliveryLogin";
import CustomerLogin from "features/customerlogin/CustomerLogin";
import { navigationRef } from './../utils/NavigationUtils';
import Register from "Register/Register";
import ProductDashboard from "dashboard/ProductDashboard";
import DeliveryDashboard from './../dashboard/DeliveryDashboard';


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName='SplashScreen'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
               
                <Stack.Screen
                    options={{
                        animation: 'fade'
                    }}
                    name="DeliveryLogin" component={DeliveryLogin} />

                <Stack.Screen
                    options={{
                        animation: 'fade'
                    }}
                    name="CustomerLogin" component={CustomerLogin} />
                 
                 <Stack.Screen
                    options={{
                        animation: 'fade'
                    }}
                    name="Register" component={Register} />
                  
                  <Stack.Screen name="ProductDashboard" component={ProductDashboard} />
                  <Stack.Screen name="DeliveryDashboard" component={DeliveryDashboard} /> 

            
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

const styles = StyleSheet.create({});
