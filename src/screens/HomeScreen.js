import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/authContext';


function HomeScreen() {

    const { user } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Home Screen</Text>
            <Text style={styles.smallHeader}>Hello {user ? user.email : ""}!</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderColor: "black",
        borderWidth: 2,
        alignItems: "center"
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 50
    },
    smallHeader: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 50
    },
    logoutContainer: {
        marginTop: 50
    }
});


export default HomeScreen;