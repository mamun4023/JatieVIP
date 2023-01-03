import { CommentCard, CommentInput, TopBackButton } from '@/components';
import { strings } from '@/localization';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ms } from 'react-native-size-matters';


export default function Comments({navigation}){

    const [openReplyTo, setOpenReplyTo] = useState(false)

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.headerContainer}> 
                <TopBackButton onPress = {()=> navigation.goBack()} />
                <Text style = {styles.headTxt}> {strings.home.comments} </Text>
            </View>
            <View style = {styles.commentContainer}>
                <FlatList 
                    data={Data}
                    keyExtractor = {(item)=> item.id}
                    renderItem = {({item})=> (
                        <CommentCard 
                            name = {item.name}
                            userName = {item.userName}
                            imageUrl = {item.proflePic}
                            time = {10}
                            commentTxt = {item.commentTxt}
                            likeCount = {10}
                            disLikeCount = {2}
                            replyPress = {()=> setOpenReplyTo(true)}
                            
                        />
                    )}
                />

            </View>
            {openReplyTo &&  
             <View style = {styles.replyToContainer}> 
                <View style = {{flexDirection : 'row', alignItems : 'center'}}> 
                    <Text style = {styles.replyTxt}> {strings.home.replyTo} </Text>
                    <Text style = {[styles.replyTxt, {fontWeight : 'bold'}]} > {'Ektar akl'} </Text>
                </View>
                <TouchableOpacity 
                    onPress={()=> setOpenReplyTo(false)}   
                    style = {styles.closeIconContainer}
                > 
                    <FontAwesomeIcon 
                        icon={faClose}
                        size = {ms(13)}
                        color = {theme.light.colors.white}
                    />
                </TouchableOpacity>
             </View>
            }

            <CommentInput />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
    },
    headerContainer : {
        flexDirection : 'row', 
        alignItems : 'center'
    },
    headTxt : [
        TextStyles.header, {
            color : theme.light.colors.black,
            fontSize : ms(20)
        }
    ],
    commentContainer : {
        flex : 1
    },
    replyToContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : ms(5),
        borderTopWidth : 0.5,
        borderBottomWidth : 0.5,
        borderColor : theme.light.colors.secondary
    },
    closeIconContainer : {
        backgroundColor : theme.light.colors.secondary,
        borderRadius : 100,
        padding : ms(5)
    },
    replyTxt : {
        fontFamily : FontFamily.BrandonGrotesque_medium
    }                 
})



const Data = [
    {
        id : 1,
        name : 'Tohid Hasan',
        userName : '@tohid',
        proflePic : 'data:image/jpeg;base64,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',
        commentTxt : 'Wonder full post',
        like : 10,
        dislike : 4,
    },
    {
        id : 2,
        name : 'Micel Adu',
        userName : '@mycel',
        proflePic : "data:image/jpeg;base64,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",
        commentTxt : 'Fantastic',
        like : 10,
        dislike : 4,
    }
]