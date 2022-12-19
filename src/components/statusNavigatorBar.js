import React, {useState} from "react"
import {View,  Text, StyleSheet} from 'react-native';
import { theme, TextStyles} from '@/theme'; 
import { FontFamily } from '@/theme/Fonts';

export function StatusNavigatorBar({status, setStatus, title1, title2, key1, key2}){

    return(
        <View style = {styles.statusContainer} >
          <View style = {styles.status}>  
            <Text 
              onPress = {()=> setStatus(key1)}
              style = { status != key1? [styles.statusText,{color : theme.light.colors.primaryInactive}]: styles.statusText}  
            >  {title1} 
            </Text> 
           {status == key1?<View style = {styles.statusNaivigator}/>: <View style = {[styles.statusNaivigator, {left : 235}]} /> } 
          </View>
          <View style = {styles.status}>
            <Text  
              style = { status != key2? [styles.statusText,{color : theme.light.colors.primaryInactive}]: styles.statusText}
              onPress = {()=> setStatus(key2)} 
              >  {title2} </Text>  
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    statusContainer : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        backgroundColor : theme.light.colors.primaryBg,
        margin : 10,
        padding : 10,
        borderRadius : 10
      },
      statusText : [TextStyles.header,{
        color : theme.light.colors.primary
        }
      ],
    
      statusNaivigator : {
        width : 10,
        height : 10,
        backgroundColor : theme.light.colors.primary,
        position : 'absolute',
        top : 30,
        left : 60,
        borderRadius : 50
      },
})