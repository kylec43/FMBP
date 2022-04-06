import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function HyperLink({ title, style, href, external = false }) {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity onPress={() => href ? navigation.navigate(href) : null}>
                <Text style={[style, styles.hyperlink]}>{title}</Text>
            </TouchableOpacity>
        </>
    );
}


const styles = StyleSheet.create({
    hyperlink: {
        fontSize: 18,
        color: "#0066CC",
        fontWeight: 'bold',
    }
});

export default HyperLink;