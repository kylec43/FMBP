import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import AuthFormInput from '../components/AuthFormInput';
import useSignup from '../hooks/useSignup';
import Logo from '../components/Logo';
import Spacer from '../components/Spacer';
import BigButton from '../components/BigButton';

function SignupScreen() {

    const { 
        email, setEmail,
        password, setPassword,
        handleSignup 
    } = useSignup();

    return (
        <View style={styles.container}>

            <View style={styles.flexContainer}>
                <Logo containerStyle={styles.logoContainer} />
            </View>

            <View style={styles.flexContainer}>
                <AuthFormInput
                    email={email}
                    password={password}
                    onChangeEmail={setEmail}
                    onChangePassword={setPassword}
                />
            </View>

            <View style={styles.flexContainer}>
                <BigButton 
                    title="Sign up"
                    onPress={() => handleSignup(email, password)}
                    style={styles.loginButton}
                >
                </BigButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1
    },
    flexContainer: {
        flex: 1,
    },
    loginButton: {
        backgroundColor: "#525252"
    },
    signupButton: {
        backgroundColor: "white"
    },
    signupTitle: {
        color: "black",
        fontWeight: "normal"
    },
    logoContainer: {
        alignSelf: "center",
        marginTop: 20
    }
});

export default SignupScreen;