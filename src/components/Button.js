import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


function Button({ children, title, onPress, style, titleStyle }) {

    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.button, style]}
        >
            {title ? <Text style={[styles.title, titleStyle]}>{title}</Text> : null}
            {children}
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#24a0ed",
        width: 200,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
});

export default Button;