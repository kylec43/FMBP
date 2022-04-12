import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/authContext';
import useAccount from '../hooks/useAccount';

function AccountScreen() {

    const { user } = useContext(AuthContext);
    const { handleLogout } = useAccount();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Account Screen</Text>
            <Text style={styles.smallHeader}>Email: {user ? user.email : ""}</Text>
            <Text style={styles.smallHeader}>UID: {user ? user.uid : ""}</Text>

            <View style={styles.logoutContainer}>
                <Button 
                    title="Log out"
                    onPress={handleLogout}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderColor: "black",
        borderWidth: 2,
    },
    header: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 50,
        alignSelf: "center"
    },
    smallHeader: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    logoutContainer: {
        marginTop: 50
    }
});


export default AccountScreen;