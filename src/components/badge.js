import React from "react"
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { TextStyles, theme } from '@/theme';
import {ms} from 'react-native-size-matters'

export const Badge = ({count, size})=>{
    return(
        <View style = {styles.container}> 
            <Text style = {[TextStyles.title, {
                fontSize : size
            }]}>  
                {count}
            </Text>
        </View>
    )
}

Badge.prototype = {
    count : PropTypes.string.isRequired,
    size : PropTypes.string
}

const styles = StyleSheet.create({
    container :  {
        backgroundColor : theme.light.colors.infoBgLight,
        padding : ms(2),
        paddingLeft: ms(10),
        paddingRight : ms(10),
        borderRadius : 100
    }
})