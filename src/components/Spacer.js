import React from 'react';
import { View } from 'react-native';

function Spacer({vertical=0, horizontal=0}) {


    return (
        <View style={{marginLeft: horizontal, marginTop: vertical}}/>
    );
}


export default Spacer;