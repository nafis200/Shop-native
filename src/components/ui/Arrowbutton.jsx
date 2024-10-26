
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import Icon from 'react-native-vector-icons/Ionicons'

const Arrowbutton = ({ title, onPress, price, loading }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={loading}
      onPress={onPress}
      style={[
        styles.btn,
        { justifyContent: price !== 0 ? 'space-between' : 'center' }
      ]}
    >
      {
        price != 0 && price &&
        <View>

          <CustomText
            variant="h7"
            style={{ color: 'white' }}
          >
            ${price + 34}
          </CustomText>

          <CustomText
            variant="h9"
            style={{ color: 'white' }}
          >
            Total
          </CustomText>
        </View>
      }

      <View style={styles.flexRow}>

        <CustomText variant="h8" style={{ color: '#fff' }}>
          {title}
        </CustomText>
        {
          loading ? <ActivityIndicator
            color='white'
            style={{ marginHorizontal: 5 }}
            size='small'
          /> : <Icon></Icon>
        }
      </View>

    </TouchableOpacity>

  );
};

export default Arrowbutton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'gray',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    marginVertical: 10,
    marginHorizontal: 15
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
