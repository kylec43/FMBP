import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

/*
    Props:
    1) value, onChangeText
    2) (optional) entryStyle
    3) (optional) labelText, labelStyle
    4) (optional) autoCapitalize, autoCorrect
    5) (optional) secure (for passwords)
*/
function TextEntry(props) {


    return (
        <>
            { props.labelText 
                ? 
                    <Text style={[styles.label, props.labelStyle]}>
                        {props.labelText}
                    </Text>
                : 
                    null
            }
            <TextInput
                style={[styles.entry, props.entryStyle]}
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