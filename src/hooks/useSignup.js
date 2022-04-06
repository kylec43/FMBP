import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { Context as AuthContext } from '../context/authContext';


function useSignup() {

    const { signup } = useContext(AuthContext);
    const navigation = useNavigation();


    const handleSignup = (email, password) => {
        signup(email, password).then((userCredentials) => {
            navigation.navigate("Home");
        }).catch((e) => {
            console.log("Signup Error! From Signup Screen!");
        });
    };

    return { handleSignup };
}

export default useSignup;