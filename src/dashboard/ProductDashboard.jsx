
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "provider/AuthProvider";
import { resetAndNavigate } from "utils/NavigationUtils";

const ProductDashboard = () => {
  
  const {logout} = useContext(AuthContext)
  const handleLogout = async()=>{
      await logout()
      resetAndNavigate('CustomerLogin')
  }
  return (
    <View>
      <Text>ProductDashboard</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDashboard;

const styles = StyleSheet.create({});
