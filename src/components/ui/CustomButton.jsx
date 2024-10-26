

import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomText from './CustomText';

const CustomButton = ({onPress, title, disabled, loading}) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.8} style={[styles.btn,{
            backgroundColor: disabled ? 'rgba(0, 255, 0, 0.2)' : 'green'
        }]} >
            {
                loading ? <ActivityIndicator color="white" size='small' /> : <CustomText variant='h6' style={styles.text}>
                    {title}
                </CustomText>
            }

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn:{
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 10,
       padding:15,
       marginVertical: 15,
       width:'100%'
    },

    text:{
        color:'#fff'
    }

})

export default CustomButton;