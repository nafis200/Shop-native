
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useCartStore } from "state/cartStore";
import CustomText from "./CustomText";
import Icon from 'react-native-vector-icons/Ionicons'
import { RFValue } from "react-native-responsive-fontsize";
const UniversalAdd = ({ item }) => {
  const count = useCartStore((state) => state.getItemCount(item._id))

  const { addItem, removeItem } = useCartStore()

  // const cart = useCartStore(state => state.cart);

  // console.log(cart);
  

  return (
    <View style={[styles.container, { backgroundColor: count === 0 ? '#fff' : 'blue' }]}>
      {
        count === 0 ? <Pressable onPress={() => addItem(item)} style={styles.add} >
          <CustomText style={[{ color: 'black' }, styles.addText]}>Add</CustomText>
        </Pressable> : <View style={styles.counterContainer}>
          <Pressable onPress={() => removeItem(item._id)}>
            <Icon name="remove" color='#fff' size={RFValue(23)} />
          </Pressable>
          <CustomText style={{ color: 'white' }}>{count}</CustomText>
          <Pressable onPress={() => addItem(item)}>
            <Icon name="add" color='#fff' size={RFValue(23)} />
          </Pressable>
        </View>
      }
    </View>
  );
};

export default UniversalAdd;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 65,
    borderRadius: 8
  },
  add: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 6
  },
  addText: {
    color: 'blue'
  },
  counterContainer: {
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:4,
        paddingVertical:6,
        justifyContent:'space-between'
  }
});
