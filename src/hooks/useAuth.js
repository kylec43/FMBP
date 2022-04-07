import React, { useState, useContext } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Context as AuthContext } from '../context/authContext';
import { getAuth } from 'firebase/auth';

function useAuth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { getCurrentUser } = useContext(AuthContext);
    const navigation = useNavigation();


    useFocusEffect(() => {

        const unsubscribe = getAuth().onAuthStateChanged(() => {
            const currentUser = getCurrentUser();
            if (currentUser) {
                console.log("User logged in!");
                navigation.replace("HomeFlow");
            } else {
                console.log("User not logged in!");
            }

        });

        return () => {
            unsubscribe();
            console.log("Unsubscribed!");
        };
    });

    return {email, setEmail, password, setPassword };
}

export default useAuth;