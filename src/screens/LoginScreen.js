import React from 'react';
import { View, StyleSheet } from 'react-native';
import useLogin from '../hooks/useLogin';
import AuthFormInput from '../components/AuthFormInput';
import Button from '../components/Button';
import Logo from '../components/Logo';
import SocialButtonGroup from '../components/SocialButtonGroup';

function LoginScreen({ navigation }) {

    const { 
        email, setEmail, 
        password, setPassword, 
        handleLogin 
    } = useLogin();

    return (
        <View style={styles.container}>

            <View style={{flex: 1}}>
                <Logo style={styles.logo} width={150} height={150} />
            </View>

            <View style={{flex: 1}}>
                <AuthFormInput
                    email={email}
                    password={password}
                    onChangeEmail={setEmail}
                    onChangePassword={setPassword}
                />
            </View>

            <View style={{flex: 2, justifyContent: "center"}}>
                <Button 
                    title="Login"
                    onPress={() => handleLogin(email, password)}
                    style={styles.loginButton}
                    className="large"
                />
                <Button 
                    title="Sign up"
                    onPress={() => navigation.navigate("Signup")}
                    style={styles.signupButton}
                    titleStyle={styles.signupTitle}
                    className="large"
                />
                <SocialButtonGroup
                    containerStyle={styles.socialGroupContainer}
                    spacing={20}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1
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
    logo: {
        alignSelf: "center",
        marginTop: 20
    },
    socialGroupContainer: {
        marginTop: 20
    }
});

export default LoginScreen;