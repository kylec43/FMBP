import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
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

            <ScrollView contentContainerStyle={{flexGrow: 1}}>

                <View style={styles.logoContainer}>
                    <Logo style={styles.logo} width={75} height={75} />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeader}>Create an account</Text>
                    <AuthFormInput
                        email={email}
                        password={password}
                        onChangeEmail={setEmail}
                        onChangePassword={setPassword}
                    />
                </View>

                <View style={styles.buttonsContainer}>
                    <Button 
                        title="Create account"
                        onPress={() => handleSignup(email, password)}
                        style={styles.loginButton}
                    />
                    <SocialButtonGroup 
                        containerStyle={styles.socialGroupContainer} 
                        spacing={22}
                        facebookTitle="Sign up with Facebook"
                        googleTitle="Sign up with Google"
                    />
                </View>
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        flex: 1
    },
    logoContainer: {
        flex: 2
    },
    inputContainer: {
        flex: 3
    },
    buttonsContainer: {
        flex: 3, 
        paddingHorizontal: 20,
        alignItems: "center"
    },
    loginButton: {
        backgroundColor: "#525252",
        width: 345
    },
    signupButton: {
        backgroundColor: "white",
        width: 345
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