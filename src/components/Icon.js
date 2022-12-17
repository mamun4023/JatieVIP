
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'

export function Icon({icon, size, onPress, style}){
    return(
        <TouchableOpacity onPress={onPress}>
            <FontAwesomeIcon 
                icon = {icon}
                size = {size}
                style = {style}
            />
        </TouchableOpacity>
    )
}
