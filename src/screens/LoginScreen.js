import React from 'react';
import { View, StyleSheet } from 'react-native';
import useLogin from '../hooks/useLogin';
import AuthFormInput from '../components/AuthFormInput';
import BigButton from '../components/BigButton';
import Logo from '../components/Logo';

function LoginScreen({ navigation }) {

    const { 
        email, setEmail, 
        password, setPassword, 
        handleLogin 
    } = useLogin();

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
                    title="Login"
                    onPress={() => handleLogin(email, password)}
                    style={styles.loginButton}
                >
                </BigButton>
                <BigButton 
                    title="Sign up"
                    onPress={() => navigation.navigate("Signup")}
                    style={styles.signupButton}
                    titleStyle={styles.signupTitle}
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
        backgroundColor: "white",
        marginTop: 20
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

export default LoginScreen;