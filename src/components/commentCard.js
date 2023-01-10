import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CardBody, CardHeader, Icon} from '@/components';
import {theme, TextStyles} from '@/theme';
import {ms, vs} from 'react-native-size-matters';
import {faEllipsis, faCircleUp, faCircleDown, faShare, faReply} from '@fortawesome/free-solid-svg-icons';
import PropsType from 'prop-types';
import { FontFamily } from "@/theme/Fonts";

export const CommentCard = ({
    name, 
    userName, 
    imageUrl, 
    time, 
    commentTxt, 
    likeCount,
    likePress,
    disLikeCount,
    disLikePress,
    replyPress,
    morePress  
})=>{
    return(
        <View>
            <View> 
                <View style = {styles.leftBorder}>
                    <CardHeader 
                        fullName =  {name}
                        userName = {userName}
                        profilePic = {imageUrl}
                        time = {time}
                    />
                    <View style = {styles.body}>
                        <CardBody text = {commentTxt} />
                    </View>
                </View>
            </View>                    
            <View style = {styles.footer}>
                <View style ={styles.reacContainer}>
                    <TouchableOpacity style = {[styles.iconContainer, styles.likeContainer]}>
                        <Icon 
                            icon={faCircleUp}
                            size = {ms(13)}
                            color = {theme.light.colors.success}
                            onPress = {likePress}
                        />
                        <Text style = {styles.likeTxt}>{likeCount} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.iconContainer, styles.disLikeContainer]}> 
                        <Icon 
                            icon={faCircleDown}
                            size = {ms(13)}
                            color = {theme.light.colors.error}
                            onPress = {disLikePress}
                        />
                        <Text style = {styles.disLikeTxt} > {disLikeCount} </Text>
                    </TouchableOpacity>
                        <Icon 
                            icon={faReply}
                            size = {ms(13)}
                            color = {theme.light.colors.info}
                            onPress = {replyPress}
                            style = {{marginLeft : ms(15)}}
                        />
                </View>
                <View style = {{flexDirection : 'row'}}> 
                    <Icon 
                        icon={faEllipsis}
                        size = {ms(13)}
                        color = {theme.light.colors.secondary}
                        onPress = {morePress}
                        style = {{marginRight : ms(5)}}
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
        padding : ms(4)
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
    reacContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-around' 
    },
    iconContainer : {
        flexDirection : 'row',
        alignItems : 'center'
    },
    likeContainer : {
        paddingLeft : ms(8)
    },
    likeTxt : {
        fontFamily : FontFamily.Recoleta_regular,
        fontSize : ms(13, 0.3),
        paddingLeft : ms(3)
    },
    disLikeContainer : {
        paddingLeft : ms(8)
    },
    disLikeTxt : {
        fontFamily : FontFamily.Recoleta_regular,
        fontSize : ms(13, 0.3),
        paddingLeft : ms(3)
    },
    leftBorder : {
       borderLeftWidth: 2,
       borderLeftColor : theme.light.colors.info
    },
    nameTxt :[
        TextStyles.header, {
            color : theme.light.colors.black, 
            fontSize : ms(15, 0.13)
        } 
    ],
})


