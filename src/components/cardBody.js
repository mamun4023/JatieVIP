import React from "react"
import {StyleSheet, View, Text} from 'react-native';
import {TextStyles, theme} from '@/theme';
import PropsType from 'prop-types';
import { FontFamily } from "@/theme/Fonts";

export const CardBody = ({text})=>{
    return(
        <View style = {styles.container}>
            <Text style = {[TextStyles.text, {
                fontFamily : FontFamily.BrandonGrotesque_medium,
                textAlign : 'justify'
            }]} >
                {text} 
            </Text>
        </View>
    )
}

CardBody.prototype = {
    text : PropsType.string.isRequired
}

const styles = StyleSheet.create({
    container : {
        padding : 10,
        margin : 10
    }
})