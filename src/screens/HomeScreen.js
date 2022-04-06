import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/authContext';
import useHome from '../hooks/useHome';

function HomeScreen() {

    const { user } = useContext(AuthContext);
    const { handleLogout } = useHome();

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.header}>Hello {user ? user.email : ""}!</Text>
                
                <View style={styles.logoutContainer}>
                    <Button 
                        title="Log out"
                        onPress={handleLogout}
                    />
                </View>
            </View>
        </>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    logoutContainer: {
        marginTop: 50
    }
});


export default HomeScreen;