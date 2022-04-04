import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


function SignupScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.formInput}
                value={email}
                onChangeText={value => setEmail(value)}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.formInput}
                value={password}
                onChangeText={value => setPassword(value)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />

            <Button 
                title="Signup"
                onPress={async () => {
                    console.log("YEP", email, password);
                    try {
                        await createUserWithEmailAndPassword(getAuth(), email, password);
                        console.log("Signup Successful!");
                    } catch (e) {
                        console.log("Signup Unsuccessful!", e);
                    }
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    formInput: {
        padding: 5,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 16
    },
    label: {
        fontSize: 20,
        fontWeight: "bold"
    },
    container: {
        paddingHorizontal: 10,
        paddingTop: 50
    }
});

export default SignupScreen;