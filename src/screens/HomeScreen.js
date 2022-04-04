import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hello World!</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 50
    }
});


export default HomeScreen;