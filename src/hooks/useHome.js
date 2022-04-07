import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/authContext';

function useHome() {

    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleLogout = () => {

        logout().then(() => {
            navigation.replace("AuthFlow");
            console.log("Logout success! From Home Screen");
        }).catch((e) => {
            console.log("Error logging out! From Home Screen");
        });
    };


    return { handleLogout };
}


export default useHome;