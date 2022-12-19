import React from "react"
import {View, Text, StyleSheet} from 'react-native';
import { TextStyles, theme } from '@/theme';
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


const styles = StyleSheet.create({
    container :  {
        backgroundColor : theme.light.colors.infoBgLight,
        padding : 5,
        borderRadius : 100
      }
})