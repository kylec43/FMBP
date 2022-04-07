import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../context/authContext';
import Util from '../util/Util';

function useLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);


    const handleLogin = (email, password) => {
        login(email, password).catch((e) => {
            Util.displayAlert("Error", `Login Error! From Login Screen! ${e}`);
        });
    };


    return { email, setEmail, password, setPassword, handleLogin };
}


export default useLogin;