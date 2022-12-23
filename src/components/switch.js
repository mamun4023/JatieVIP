import React from 'react';
import {View, Switch} from 'react-native';
import {theme} from '@/theme';

export const AppSwitch = ({ value, onChange })=>{
    return(
        <View>
            <Switch
                trackColor={{ false: "#f4f3f4", true: theme.light.colors.infoBg }}
                thumbColor={value ? theme.light.colors.info : "#767577"}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={onChange}
                value={value}
            />
        </View>
    )
}