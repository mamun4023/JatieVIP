
import React from 'react';
import {View} from 'react-native';
import {theme} from '@/theme';
import PropsType from 'prop-types';

export const HorizontalLine = ({color})=>{
    return(
        <View 
            style = {{
                borderBottomColor: color? color : theme.light.colors.primary,
                borderBottomWidth: 2.5,
            }}
        />

    )
}

HorizontalLine.prototype = {
    color : PropsType.string
}
