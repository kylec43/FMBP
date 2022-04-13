import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from './Input';

function AuthFormInput({ email, password, onChangeEmail, onChangePassword, containerStyle }) {

    return (
        <View style={containerStyle}>
            <Text style={styles.label}>Email</Text>
            <Input
                value={email}
                onChangeText={onChangeEmail}
                placeholder="Enter your email"
                style={styles.input}
            />

            <Text style={styles.label}>Password</Text>
            <Input
                value={password}
                onChangeText={onChangePassword}
                secure={true}
                placeholder="Enter your password"
                style={styles.input}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        color: "white"
    },
    input: {
        backgroundColor: "white",
        marginTop: 5
    },
});


export default AuthFormInput;