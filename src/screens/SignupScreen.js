import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AuthFormInput from '../components/AuthFormInput';
import useSignup from '../hooks/useSignup';
import Logo from '../components/Logo';
import Button from '../components/Button';
import Image from '../components/Image';
import Assets from '../constants/Assets';
import { FontAwesome5 } from '@expo/vector-icons';
import SocialButtonGroup from '../components/SocialButtonGroup';

function SignupScreen() {

    const { 
        email, setEmail,
        password, setPassword,
        handleSignup 
    } = useSignup();

    return (
        <View style={styles.container}>

            <View style={{flex: 2}}>
                <Logo style={styles.logo} width={75} height={75} />
            </View>

            <View style={{flex: 3}}>
                <Text style={styles.inputHeader}>CREATE AN ACCOUNT</Text>
                <AuthFormInput
                    email={email}
                    password={password}
                    onChangeEmail={setEmail}
                    onChangePassword={setPassword}
                />
            </View>

            <View style={{flex: 3, alignItems: "center"}}>
                <Button 
                    title="Create account"
                    onPress={() => handleSignup(email, password)}
                    style={styles.loginButton}
                    className="large"
                />
                <SocialButtonGroup 
                    containerStyle={styles.socialGroupContainer} 
                    spacing={22}
                    facebookTitle="Sign up with Facebook"
                    googleTitle="Sign up with Google"
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
        backgroundColor: "white"
    },
    signupTitle: {
        color: "black",
        fontWeight: "normal"
    },
    logo: {
        alignSelf: "flex-start",
        marginTop: 20,
        marginLeft: 10
    },
    inputHeader: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20
    },
    socialGroupContainer: {
        marginTop: 38
    }
});

export default SignupScreen;