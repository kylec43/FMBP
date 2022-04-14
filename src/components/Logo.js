import React from 'react';
import { StyleSheet } from 'react-native';
import Assets from '../constants/Assets';
import Image from './Image';

function Logo({ style, width, height }) {

    return (
        <Image 
            style={[styles.logoStyle, style, width ? {width} : null, height ? {height} : null]}  
            source={Assets.LOGO} 
        />
    );
}

const styles = StyleSheet.create({
    logoStyle: {
        alignSelf: "center",
        width: 150,
        height: 150
    }
});

export default Logo;