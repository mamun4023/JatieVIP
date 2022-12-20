import React from 'react';
import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import PropTypes from 'prop-types';

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

Icon.prototype = {
    icon : PropTypes.object.isRequired,
}