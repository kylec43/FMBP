import React from 'react';
import { View, StyleSheet } from 'react-native';
import useAuth from '../hooks/useAuth';
import AuthForm from '../components/AuthForm';
import HyperLink from '../components/HyperLink';
import useLogin from '../hooks/useLogin';

function LoginScreen() {

    const {
        email, setEmail, 
        password, setPassword, 
    } = useAuth();

    const { handleLogin } = useLogin();

    return (
        <View style={styles.container}>
            <AuthForm
                email={email}
                password={password}
                buttonText="Log in"
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
                onSubmit={() => handleLogin(email, password)}
            />
            <HyperLink
                style={styles.link}
                title="New user? Sign up!"
                href="Signup"
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 50
    },
    link: {
        marginTop: 24,
    }
});

export default LoginScreen;