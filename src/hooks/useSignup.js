import React, { useContext, useState } from 'react';
import { Context as AuthContext } from '../context/authContext';
import Util from '../util/Util';


function useSignup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup } = useContext(AuthContext);


    const handleSignup = (email, password) => {
        signup(email, password).catch((e) => {
            Util.displayAlert("Error", `Signup Error! From Signup Screen! ${e}`);
        });
    };

    return { email, setEmail, password, setPassword, handleSignup };
}

export default useSignup;