import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

/*
    Props:
    1) value, onChangeText
    2) (optional) labelText, labelStyle
    3) (optional) autoCapitalize, autoCorrect
    4) (optional) secure (for passwords)
*/
function TextEntry(props) {


    return (
        <>
            { props.labelText 
                ? 
                    <Text style={props.labelStyle ? props.labelStyle : styles.label}>
                        {props.labelText}
                    </Text>
                : 
                    null
            }
            <TextInput
                style={props.entryStyle ? props.entryStyle : styles.entry}
                value={props.entryValue}
                onChangeText={props.onChangeText}
                autoCapitalize={props.autoCapitalize ? props.autoCapitalize : "none"}
                autoCorrect={props.autoCorrect ? props.autoCorrect : false}
                secureTextEntry={props.secure ? true : false}
            />
        </>
    );
}


const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: "bold"
    },
    entry: {
        fontSize: 18,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 16,
        borderRadius: 10
    }
});

export default TextEntry;