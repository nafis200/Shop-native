

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from "react-native-responsive-fontsize";
import RollingBar from 'react-native-rolling-bar'
import CustomText from "components/ui/CustomText";

const SearchBar = () => {
  return (
    <TouchableOpacity style={styles.container} >
      <Icon style={{color:'black'}} name="search" size={RFValue(20)} />
      <RollingBar interval={3000} defaultStyle={false} customStyle={styles.textContainer} >
        <CustomText style={{color:'black'}}  variant="h6"> Search "Chocolate" </CustomText>
        <CustomText style={{color:'black'}} variant="h6"> Search "Cool drinks" </CustomText>
        <CustomText style={{color:'black'}} variant="h6"> Search "Noodles" </CustomText>
        <CustomText style={{color:'black'}} variant="h6"> Search "Tomato sauce" </CustomText>
        <CustomText style={{color:'black'}} variant="h6"> Search "Cool drinks" </CustomText>
        <CustomText style={{color:'black'}} variant="h6"> Search "Hot sauce" </CustomText>
      </RollingBar>
      <View  style={styles.divider}/>
      <Icon style={{color:'black'}} name="mic" size={RFValue(20)} />
    </TouchableOpacity>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#F3F4F7',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      borderRadius: 10,
      borderWidth: 0.6,
      marginTop:15, 
      overflow:'hidden',
      marginHorizontal:10,
      paddingHorizontal:10,
      
    },
    textContainer:{
       width:'90%',
       paddingLeft:10,
       height:50,
    },
    divider:{
      width: 1,
      height:24,
      backgroundColor:'#ddd',
      marginHorizontal:10,
      color:'black'
    }
});
