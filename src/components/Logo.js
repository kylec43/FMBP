import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

function Logo({ containerStyle }) {

    return (
        <View style={containerStyle}>
            <Image style={styles.logoStyle} source={require('../../assets/images/FMBP_Logo.png')} />
            <Image style={styles.coStyle} source={require('../../assets/images/Co.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    coStyle: {
        marginTop: -40,
        alignSelf: "center"
    },
    logoStyle: {
        marginTop: -40,
        alignSelf: "center"
    }
});

export default Logo;