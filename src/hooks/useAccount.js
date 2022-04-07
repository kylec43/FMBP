import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Context as AuthContext } from '../context/authContext';
import Util from '../util/Util';

function useAccount() {
    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleLogout = () => {

        logout().catch((e) => {
            Util.displayAlert("Error", `Error logging out! From Home Screen: ${e}`);
        });
    };

    return { handleLogout };
}


export default useAccount;