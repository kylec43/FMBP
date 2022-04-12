import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

function TextEntry({value, onChangeText, style=null, autoCapitalize="none", autoCorrect=false, placeholder="", secure=false}) {


    return (
        <>
            <TextInput
                style={[styles.input, style]}
                value={value}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                autoCorrect={autoCorrect}
                secureTextEntry={secure}
                placeholder={placeholder}
            />
        </>
    );
}


const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 16,
        borderRadius: 10
    }
});

export default TextEntry;