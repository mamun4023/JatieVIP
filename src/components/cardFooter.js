import React from "react"
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from '@/components';
import {theme, TextStyles} from '@/theme'
import {FontFamily} from '@/theme/Fonts'
import {
    faComment, 
    faEllipsis,
    faShareNodes,
    faCircleUp,
    faCircleDown,
  } from '@fortawesome/free-solid-svg-icons';

export const CardFooter = ({likeCount, disLikeCount, commentCount, likePress, disLikePress, commentPress, sharePress, morePress})=>{
    return(
        <View style = {styles.footer} >
            <View style ={{
                flexDirection : 'row',
                alignItems : 'center',
                justifyContent : 'space-around' 
            }}>
                <Icon 
                    icon={faCircleUp}
                    size = {15}
                    onPress = {likePress}
                    style = {[styles.icon, {
                    color : theme.light.colors.success
                }]}
                /><Text>{likeCount} </Text>
                    <Icon 
                        icon={faCircleDown}
                        size = {15}
                        onPress = {disLikePress}
                        style = {[styles.icon, {
                        color : theme.light.colors.error
                        }]}
                    /><Text>{disLikeCount} </Text>
                        <Icon 
                          icon={faComment}
                          size = {15}
                          onPress = {commentPress}
                          style = {[styles.icon, {
                            color : 'gray'
                          }]}
                          
                        /> 
                        <Text>{commentCount} </Text>
                      </View>
                      <View style = {{
                        flexDirection : 'row'
                      }}> 
                        <Icon 
                          icon={faShareNodes}
                          size = {15}
                          onPress = {sharePress}
                          style = {[styles.icon, {
                            color : 'gray'
                          }]}
                        />
                        <Icon 
                          icon={faEllipsis}
                          size = {15}
                          onPress = {morePress}
                          style = {[styles.icon, {
                            color : 'gray'
                          }]}
                          
                        />
                      </View>
                   </View>
    )
}

const styles = StyleSheet.create({
 
    footer : {
      flexDirection : "row",
      justifyContent : 'space-between',
      backgroundColor : theme.light.colors.infoBgLight,
      padding : 8,
      borderRadius : 10
    },
    icon : {
        margin : 5,
    },

});
  

