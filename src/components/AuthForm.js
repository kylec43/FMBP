import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Input from './Input';

function AuthForm({ email, password, buttonText, onChangeEmail, onChangePassword, onSubmit }) {

    return (
        <View>

            <Text style={styles.label}>Email</Text>
            <Input
                value={email}
                onChangeText={onChangeEmail}
                placeholder="Email"
            />

            <Text style={styles.label}>Password</Text>
            <Input
                value={password}
                onChangeText={onChangePassword}
                secure={true}
                placeholder="Password"
            />
            <Button 
                title={buttonText ? buttonText : "Submit"}
                onPress={onSubmit}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: "bold"
    },
});


export default AuthForm;