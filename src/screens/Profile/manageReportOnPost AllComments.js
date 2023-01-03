import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {theme, TextStyles} from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import {strings} from '@/localization';
import {HorizontalLine, TopBackButton, CardHeader, Card, CardBody, CardFooter, CommentCard, TextField, Icon, CommentInput} from '@/components'
import {ms} from 'react-native-size-matters'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export default function ManageReportOnPostAllComments({navigation}){
    return(
        <View style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {[styles.headerText, TextStyles.header]}> {strings.profile.manageReports} </Text>
            <HorizontalLine color = {theme.light.colors.infoBgLight} />
            <CardHeader 
                fullName = {Data.fullName}
                userName = {Data.userName}
                profilePic = {Data.profilePic}
                time = {Data.time}
            />
            <View style = {styles.activity}>
                <View style ={styles.textContainer}> 
                    <Text style = {styles.statsTxt}> {strings.profile.reported} </Text>
                    <Text style = {styles.reactOnTxt}> {`this post`} </Text>
                </View>
                <View style = {styles.reasonContainer}> 
                    <Text style = {styles.reasonTxt}>{strings.profile.reason} Explicit Content  </Text>
                </View>
            </View>
            <View style = {styles.body}>
                <FlatList 
                    data={CommentData}
                    keyExtractor = {(item)=> item.id}
                    renderItem = {({item})=> (
                        <View style = {{marginTop : 10, backgroundColor : 'white', elevation : 2}}>
                            <CommentCard 
                                name = {item.name}
                                userName = {item.userName}
                                imageUrl = {item.imageUrl}
                                time = {item.time}
                                commentTxt = {item.commentTxt}
                                likeCount = {10}
                                disLikeCount = {20}
                            />
                        </View>
                    )}
                />

                <CommentInput />
                {/* <View 
                    style = {{ 
                        position : 'absolute', 
                        bottom : -15,
                        width : '100%'
                        
                    }}>
                    <TextField 
                        style={{
                            backgroundColor : '#eee',
                            paddingRight : 80
                        }}
                        placeholder = "Type your comment here"
                    />
                    <TouchableOpacity  
                        style = {{
                            backgroundColor : theme.light.colors.primaryBgLight,
                            borderRadius : 100,
                            position : 'absolute',
                            bottom : 18,
                            right : 10,
                            padding : 10
                        }}
                    > 
                        <FontAwesomeIcon 
                            icon = {faPaperPlane}
                            size  = {18}
                            color = {theme.light.colors.primary}
                        />
                    </TouchableOpacity>
                </View> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : theme.light.colors.white
    },
    headerText :{
        color : theme.light.colors.black
    },
    activity : {
        flexDirection : 'row',
        padding : ms(10),
        alignItems : 'center',
        justifyContent : 'space-between',  
    },
    textContainer : {
        flexDirection : 'row',
        alignItems : "center",
        justifyContent : "center"
    },
    statsTxt: {
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(15, 0.3),
        paddingLeft : ms(5)
    },
    reactOnTxt: {
        color : theme.light.colors.info, 
        textDecorationLine : 'underline',
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(15, 0.3)
    },
    reasonContainer : {
        backgroundColor : "#eee",
        borderRadius : 10,
        padding : ms(3),
        marginLeft : ms(10)
    },
    reasonTxt : {
        fontFamily : FontFamily.Recoleta_medium,
        fontSize : ms(10, 0.3)
    },
    body: {
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
        elevation : 2,
        // padding : ms(8)
    }

})


const Data = {
    fullName : "Adam",
    userName : '@adam',
    profilePic : 'https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=',
    time : 10
}


const CommentData = [
    {
        id : 1,
        name : 'Adam',
        userName : 'adam',
        imageUrl : 'data:image/jpeg;base64,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',
        time : 10,
        commentTxt : "Wonderful",
        disLikeCount : 20
    },
    {
        id : 2,
        name : 'Susi',
        userName : 'susi',
        imageUrl : 'https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg',
        time : 30,
        commentTxt : "I love it",
        disLikeCount : 2
    }
]
