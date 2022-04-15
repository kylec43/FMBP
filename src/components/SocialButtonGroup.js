import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import Image from '../components/Image';
import Assets from '../constants/Assets';
import { FontAwesome5 } from '@expo/vector-icons';

function SocialButtonGroup({ containerStyle, spacing, facebookTitle, googleTitle }) {

    return (
        <View style={containerStyle}>
            <Button style={styles.googleButton} className="large">
                <View style={styles.socialButtonContent}>
                    <Image style={styles.googleLogo} source={Assets.GOOGLE} width={30} height={30} />
                    <Text style={styles.googleButtonTitle}>{googleTitle ? googleTitle : "Continue with Google"}</Text>
                </View>
            </Button>
            <Button style={[styles.facebookButton, spacing ? {marginTop: spacing} : null]} className="large">
                <View style={styles.socialButtonContent}>
                    <FontAwesome5 style={styles.facebookLogo} name="facebook" size={30} />
                    <Text style={styles.facebookButtonTitle}>{facebookTitle ? facebookTitle : "Continue with Facebook"}</Text>
                </View>
            </Button>
        </View>
    );

}


const styles = StyleSheet.create({
    googleButton: {
        backgroundColor: "white",
    },
    googleButtonTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        opacity: 0.54
    },
    facebookButton: {
        backgroundColor: "#1877F2",
    },
    facebookButtonTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
    },
    facebookLogo: {
        color: "white"
    },
    socialButtonContent: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        marginLeft: 20,
        paddingHorizontal: 20
    }
});


export default SocialButtonGroup;