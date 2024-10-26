



import useAxiospublic from 'hooks/useAxiosPublic';
import React, { useContext, useState } from 'react';
import { Image, StyleSheet, Text, View,Alert, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { resetAndNavigate } from 'utils/NavigationUtils';
import { AuthContext } from 'provider/AuthProvider';
import CustomText from 'components/ui/CustomText';
import CustomInput from 'components/ui/CustomInput';
import CustomButton from 'components/ui/CustomButton';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [loading, setLoading] = useState(false)
    const {createUser,logout} = useContext(AuthContext)
    const axiosPublic = useAxiospublic()
 
    const onRegister = async () => {
        try { 
          const result = await createUser(email, password); 
          const userInfo = {email,name, role:'customer'}
          axiosPublic.post('/users',userInfo)
          if (auth().currentUser) { 
            await auth().currentUser.updateProfile({
              displayName: name || 'not given',
              photoURL: photo || 'https://my-cdn.com/assets/user/123.png',
            });
            Alert.alert(
              "Alert Title",
              "This is a simple alert message", 
              [
                { text: "OK", onPress: () => console.log("OK Pressed") } 
              ]
            );
            logout()
            resetAndNavigate('CustomerLogin')
          }
        } 
        catch (error) {
          console.log('Registration Error:', error);
        }
      };

    return (
        <View style={styles.content}>
            <Image source={require('../assets/image1/01.png')} style={styles.logo} />
            <CustomText variant="h2" style={{ color: 'black', fontWeight: 'bold' }}>Signup</CustomText>
            <CustomInput
                onChangeText={(text) => { setEmail(text) }}
                onClear={() => setEmail('')}
                value={email}
                left={
                    <CustomText
                        style={styles.phoneText}
                        variant="h6"
                    >
                    </CustomText>}
                placeholder="enter your Email"
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
            <CustomInput
                onChangeText={(text) => { setName(text) }}
                onClear={() => setName('')}
                value={name}
                left={
                    <CustomText
                        style={styles.phoneText}
                        variant="h6"
                    >
                    </CustomText>}
                placeholder="enter your name"
                />
            <CustomInput
                onChangeText={(text) => { setPhoto(text) }}
                onClear={() => setPhoto('')}
                value={photo}
                left={
                    <CustomText
                        style={styles.phoneText}
                        variant="h6"
                    >
                    </CustomText>}
                placeholder="PhotoUrl"
                />

            <CustomButton title='Register' disabled={password.length < 6 && !email}
                loading={loading}
                onPress={() => onRegister()}
            />
            <View style={{flexDirection:'row'}}>
                <Text style={{ color: 'black', marginRight: 10 }}>Already sign in</Text>
                <TouchableOpacity onPress={() => resetAndNavigate('CustomerLogin')}>
                  <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        height: 50,
        width: 50,
        borderRadius: 20,
        marginVertical: 20
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
        marginTop:30
    },
    phoneText: {
        marginLeft: 10,
        color: 'black'
    },
    link: {
        color: 'blue', // Make it look like a link
        textDecorationLine: 'underline',
    }
})

export default Register;
