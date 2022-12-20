
import React from 'react';
import {View} from 'react-native';
import {theme} from '@/theme';

export const HorizontalLine = ()=>{
    return(
        <View 
            style = {{
                borderBottomColor: theme.light.colors.primary,
                borderBottomWidth: 2.5,
            }}
        />

    )
}

