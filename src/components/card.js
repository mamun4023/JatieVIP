import React from "react";

import {View, StyleSheet} from 'react-native';
import {theme} from '@/theme';

export const Card = ({children})=>{
    return(
        <View style = {styles.container}>
            {children}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width : '100%',
        backgroundColor : theme.light.colors.white,
        borderRadius : 10,
        elevation : 2
    }
})