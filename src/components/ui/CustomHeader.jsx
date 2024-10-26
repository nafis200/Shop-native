

import { StyleSheet, Text,SafeAreaView,View, Pressable } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from "react-native-responsive-fontsize";
import { goBack } from "utils/NavigationUtils";
import CustomText from "./CustomText";

const CustomHeader = ({title,search}) => {
  return (
    <SafeAreaView>
      <View style={styles.flexRow}>
         <Pressable onPress={()=> goBack()}>
            <Icon name='chevron-back' color={'black'} size={RFValue(16)} />
         </Pressable>
         <CustomText style={styles.text} variant="h5" >{title}</CustomText>
         <View>
            {search && <Icon name='search' size={RFValue(16)} color='black' /> }
         </View>
      </View>
    </SafeAreaView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
    flexRow:{
        justifyContent:'space-between',
        padding:10,
        height:60,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderBottomWidth:0.6
    },
    text:{
        textAlign:'center',
        color:'black'
    }
});
