import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TextEntry from './TextEntry';

function AuthForm({ email, password, buttonText, onChangeEmail, onChangePassword, onSubmit }) {

    return (
        <View>
            <TextEntry
                labelText="Email"
                value={email}
                onChangeText={onChangeEmail}
            />
            <TextEntry
                labelText="Password"
                value={password}
                onChangeText={onChangePassword}
                secure={true}
            />
            <Button 
                title={buttonText ? buttonText : "Submit"}
                onPress={onSubmit}
            />
        </View>
    );
}


const styles = StyleSheet.create({
});


export default AuthForm;