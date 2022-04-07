import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/authContext';
import Util from '../util/Util';

function useLogin() {

    const { login } = useContext(AuthContext);
    const navigation = useNavigation();


    const handleLogin = (email, password) => {
        login(email, password).then((userCredentials) => {
            navigation.replace("HomeFlow");
        }).catch((e) => {
            Util.displayAlert("Error", `Login Error! From Login Screen! ${e}`);
        });
    };


    return { handleLogin };
}


export default useLogin;