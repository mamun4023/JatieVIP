import { theme } from '@/theme';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { ms, vs } from 'react-native-size-matters';


export const VerticalLine = ()=>{
    return(
        <View 
            style = {{
                height : ms(15),
                width : ms(1),
                backgroundColor : theme.light.colors.secondary,
                marginTop: vs(8),
                marginLeft : ms(5),
                marginRight : ms(5),
                alignItems : 'center'
            }}
        />
             
    )
}


