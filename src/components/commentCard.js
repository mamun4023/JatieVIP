import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import {CardBody, Icon} from '@/components';
import {theme, TextStyles} from '@/theme';
import {ms, vs} from 'react-native-size-matters';
import {faEllipsis, faCircleUp, faCircleDown, faShare} from '@fortawesome/free-solid-svg-icons';
import PropsType from 'prop-types';

export const CommentCard = ({
    name, 
    userName, 
    imageUrl, 
    time, 
    commentTxt, 
    likeCount,
    likePress,
    disLikeCount,
    disLikePress  
})=>{
    return(
        <View>
            <View> 
                <View style = {styles.leftBorder}>
                <View style = {styles.header}>
                    <View style = {styles.left}>
                        <View>
                            <Image 
                                source={{uri : imageUrl}}
                                style = {styles.profilePic}
                            />
                        </View>
                        <View>
                            <Text style = {styles.nameTxt}> {name} </Text>
                            <Text> {userName} </Text>
                        </View>
                    </View>
                    <View style = {styles.right}> 
                        <Text> Edited - {time} mins ago </Text>
                    </View>
                </View>
               
                <View style = {styles.body}>
                    <CardBody text = {commentTxt} />
                </View>
                </View>
            </View>                    

            <View style = {styles.footer}>
            <View style ={{
                flexDirection : 'row',
                alignItems : 'center',
                justifyContent : 'space-around' 
            }}>
                <Icon 
                    icon={faCircleUp}
                    size = {ms(15)}
                    // onPress = {likePress}
                    style = {[styles.icon, {
                    color : theme.light.colors.success
                }]}
                /><Text>{likeCount} </Text>
                    <Icon 
                        icon={faCircleDown}
                        size = {ms(15)}
                        // onPress = {disLikePress}
                        style = {[styles.icon, {
                        color : theme.light.colors.error
                        }]}
                    /><Text>{disLikeCount} </Text>
                     <Icon 
                        icon={faShare}
                        size = {ms(15)}
                        // onPress = {disLikePress}
                        style = {[styles.icon, {
                        color : theme.light.colors.info
                        }]}
                    />
                       
                      </View>
                      <View style = {{
                        flexDirection : 'row'
                      }}> 
                        
                        <Icon 
                          icon={faEllipsis}
                          size = {15}
                        //   onPress = {morePress}
                          style = {[styles.icon, {
                            color : 'gray'
                          }]}
                          
                        />
                      </View>
                   </View>
        </View>                  
    )
}


CommentCard.prototype = {
    name : PropsType.string.isRequired,
    userName : PropsType.string.isRequired,
    time : PropsType.string.isRequired,
    imageUrl : PropsType.object.isRequired,
    commentTxt : PropsType.string.isRequired,
    likeCount : PropsType.string.isRequired,
    likePress : PropsType.func.isRequired,
    disLikeCount : PropsType.func.isRequired,
    disLikePress : PropsType.func.isRequired,
}


const styles = StyleSheet.create({
    header : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : ms(6)
    },
    left : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    profilePic : {
        width : ms(40),
        height : ms(40),
        borderRadius : 100
    },
    footer : {
        flexDirection : "row",
        justifyContent : 'space-between',
        backgroundColor : theme.light.colors.infoBgLight,
        padding : ms(8),
        borderRadius : 10,
        marginLeft : ms(20)
    },
    icon : {
        margin : ms(5),
    },
    leftBorder : {
       borderLeftWidth: 2,
       borderLeftColor : theme.light.colors.info
    },
    nameTxt :[
        TextStyles.header, {
            color : 'black', 
            fontSize : 15
        } 
    ],


    
})


