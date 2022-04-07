import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import useSignup from '../hooks/useSignup';

function SignupScreen() {

    const { 
        email, setEmail,
        password, setPassword,
        handleSignup 
    } = useSignup();

    return (
        <View style={styles.container}>
            <AuthForm
                email={email}
                password={password}
                buttonText="Sign up"
                onChangeEmail={setEmail}
                onChangePassword={setPassword}
                onSubmit={() => handleSignup(email, password)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 50
    },
});

export default SignupScreen;