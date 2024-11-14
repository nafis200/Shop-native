
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React, { useContext } from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { AuthContext } from "provider/AuthProvider";
import CustomText from "components/ui/CustomText";
import { RFValue } from "react-native-responsive-fontsize";

const Header = ({ showNotice }) => {
    const { user, logout } = useContext(AuthContext)

    const LOGOuT = async()=>{
          await logout()
    }
    return (
        <View style={styles.subContainer}>
            <TouchableOpacity activeOpacity={0.8}>
                <CustomText variant="h5" style={styles.text}>
                    Delivery In
                </CustomText>

                <View style={styles.flexRowGap}>

                    <CustomText variant="h2" style={styles.text}>
                        10 Minutes
                    </CustomText>
                    <TouchableOpacity style={styles.noticeBtn}
                        onPress={showNotice}
                    >
                        <CustomText fontSize={RFValue(14)}>🌧️Shownotice</CustomText>
                    </TouchableOpacity>
                </View>

                <View style={styles.flexRow}>
                    <CustomText variant="h8" numberOfLines={1} style={styles.text2} >
                        {
                            user?.email || 'Knowwhere,Somewhere 😊'
                        }

                    </CustomText>

                    <Icon name='menu-down' color="white" size={RFValue(20)} style={{ bottom: -1, marginTop: -4 }} />

                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={LOGOuT}>
                <Text>logout</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigate('Profile')}>
                <Icon name='account-circle-outline' size={RFValue(36)} color="black" />
            </TouchableOpacity>

        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    subContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
        justifyContent: 'space-between',

    },
    text: {
        color: 'black'
    },
    flexRowGap: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    noticeBtn: {
        backgroundColor: '',
        borderRadius: 100,
        paddingHorizontal: 8,
        paddingVertical: 2,
        bottom: -2
    },
    flexRow: {
        // justifyContent:'center',
        // alignItems:'center',
        flexDirection: 'row',
        gap: 2,
        width: '70%'
    },
    text2: {
        color: 'black',
        // width:'90%',
        // textAlign:'center'
    }
});
