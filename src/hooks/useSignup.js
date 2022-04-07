import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { Context as AuthContext } from '../context/authContext';
import Util from '../util/Util';


function useSignup() {

    const { signup } = useContext(AuthContext);
    const navigation = useNavigation();


    const handleSignup = (email, password) => {
        signup(email, password).then((userCredentials) => {
            navigation.replace("HomeFlow");
        }).catch((e) => {
            Util.displayAlert("Error", `Signup Error! From Signup Screen! ${e}`);
        });
    };

    return { handleSignup };
}

export default useSignup;