import React from 'react';
import { Image as RNImage, StyleSheet } from 'react-native';

function Image({ source, style, width, height }) {

    return (
        <RNImage 
            style={[styles.image, style, width ? {width} : null, height ? {height} : null]} 
            source={source}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        alignSelf: "center",
        width: 150,
        height: 150
    }
});

export default Image;