import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/authContext';
import Util from '../util/Util';

function useHome() {

    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleLogout = () => {

        logout().then(() => {
            navigation.replace("AuthFlow");
            console.log("Logout success! From Home Screen");
        }).catch((e) => {
            Util.displayAlert("Error", `Error logging out! From Home Screen: ${e}`);
        });
    };


    return { handleLogout };
}


export default useHome;