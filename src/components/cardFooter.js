import React from "react"
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
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
import { ms } from "react-native-size-matters";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const CardFooter = ({likeCount, disLikeCount, commentCount, likePress, disLikePress, commentPress, sharePress, morePress})=>{
    return(
        <View style = {styles.footer}>
            <View style ={styles.reactionContainer}>
                <TouchableOpacity style = {[styles.iconContainer, styles.likeIconContainer]}>   
                  <FontAwesomeIcon 
                    icon={faCircleUp}
                    size = {ms(13)}
                    color = {theme.light.colors.success}
                    onPress = {likePress}
                  />
                  <Text style = {styles.likeTxt}>{likeCount} </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.iconContainer, styles.disLikeIconContainer]}> 
                    <FontAwesomeIcon 
                        icon={faCircleDown}
                        size = {ms(13)}
                        color = {theme.light.colors.error}
                        onPress = {disLikePress} 
                    />
                    <Text style = {styles.disLikeText} >{disLikeCount} </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {[styles.iconContainer, styles.commentsIconContainer]}> 
                    <FontAwesomeIcon 
                      icon={faComment}
                      size = {ms(13)}
                      color = {theme.light.colors.secondary}
                      onPress = {commentPress}    
                    /> 
                    <Text style = {styles.commentsTxt}>{commentCount} </Text>
                </TouchableOpacity> 
              </View>
              <View style = {styles.rightContainer}> 
                  <Icon 
                    icon={faShareNodes}
                    size = {ms(13)}
                    color = {theme.light.colors.info}
                    onPress = {sharePress}
                    style = {{marginRight : 13}}
                  />
                  <Icon 
                    icon={faEllipsis}
                    size = {ms(13)}
                    color = {theme.light.colors.black}
                    onPress = {morePress}
                    style = {{marginRight : 13}}
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
      padding : ms(6),
      borderRadius : 10
  },
  reactionContainer : {
      flexDirection : 'row',
      alignItems : 'center',
      justifyContent : 'space-around' 
  },
  iconContainer : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  likeIconContainer :{
    backgroundColor : theme.light.colors.infoBg,
    borderRadius : 13,
    padding : ms(3),
    paddingLeft : ms(8),
    paddingRight : ms(8)
  },
  likeTxt : {
    fontFamily : FontFamily.Recoleta_semibold,
    fontSize : ms(13, 0.3),
    paddingLeft : ms(5)
  },
  disLikeIconContainer :{
   paddingLeft : ms(10)
  },
  disLikeText : {
    paddingLeft : ms(5),
    fontFamily : FontFamily.Recoleta_regular,
    fontSize : ms(13, 0.3)
  },
  commentsIconContainer :{
    paddingLeft : ms(10)
  },
  commentsTxt : {
    paddingLeft : ms(5),
    fontFamily : FontFamily.Recoleta_regular,
    fontSize : ms(13, 0.3)
  },
  rightContainer :{
    flexDirection : 'row',
    alignItems : 'center'
  }
});
  

