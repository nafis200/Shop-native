import axios from "axios";
import { useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from "provider/AuthProvider";
import { resetAndNavigate } from "utils/NavigationUtils";


const axiosSecure = axios.create({
    baseURL: 'http://192.168.0.112:5000'
});

const useAxiosSecure = () => {
    const { logout } = useContext(AuthContext);

    axiosSecure.interceptors.request.use(async function (config) {
        const token = await AsyncStorage.getItem('access-token');        
        if (token) {
            config.headers.authorization = `Bearer ${token}`; 
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response ? error.response.status : null;

        if (status === 401 || status === 403) {
            console.log('Unauthorized or forbidden, logging out...');
            await logout()
                .then(() => {
                   
                })
                .catch(err => {
                    
                });
            resetAndNavigate('CustomerLogin');
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;
