import React from "react";
import {View} from 'react-native';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import PropsType from 'prop-types';
import {Icon} from '@/components';
import {theme} from '@/theme';
import {ms} from 'react-native-size-matters';

export const TopBackButton = ({onPress})=>{
    return(
        <View style ={{ padding : ms(5) }}>
            <Icon 
                icon={faArrowLeft}
                size = {ms(20)}
                color = {theme.light.colors.info}
                onPress = {onPress}
              />
        </View>
    )
}

TopBackButton.prototype = {
    onPress : PropsType.func.isRequired
}