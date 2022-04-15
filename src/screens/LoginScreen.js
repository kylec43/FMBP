import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
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
        <>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.containerTop}>

                    <View style={styles.logoContainer}>
                        <Logo style={styles.logo} width={150} height={150} />
                    </View>

                    <View style={styles.inputContainer}>
                        <AuthFormInput
                            email={email}
                            password={password}
                            onChangeEmail={setEmail}
                            onChangePassword={setPassword}
                        />
                    </View>
                </View>
                <View style={styles.containerBottom}>
                    <Button 
                        title="Login"
                        onPress={() => handleLogin(email, password)}
                        style={styles.loginButton}
                    />
                    <Button 
                        title="Sign up"
                        onPress={() => navigation.navigate("Signup")}
                        style={styles.signupButton}
                        titleStyle={styles.signupTitle}
                    />
                    <SocialButtonGroup
                        containerStyle={styles.socialGroupContainer}
                        spacing={22}
                    />
                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    containerTop: {
        paddingHorizontal: 10,
        flex: 1
    },
    containerBottom: {
        paddingHorizontal: 30,
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    logoContainer: {
        flex: 1
    },
    inputContainer: {
        flex: 1
    },
    loginButton: {
        backgroundColor: "#525252",
        width: 345
    },
    signupButton: {
        backgroundColor: "white",
        marginTop: 22,
        width: 345
    },
    signupTitle: {
        color: "black",
        fontWeight: "normal",
    },
    logo: {
        alignSelf: "center",
        marginTop: 20
    },
    socialGroupContainer: {
        marginTop: 38
    }
});

export default LoginScreen;