import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


function BigButton({ title, onPress, style, titleStyle }) {


    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.button, style]}
        >
            <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#24a0ed",
        width: "100%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        opacity: 0.9
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
});

export default BigButton;