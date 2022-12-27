import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import {theme, TextStyles} from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import {strings} from '@/localization';
import {HorizontalLine, TopBackButton, CardHeader, Card, CardBody, CardFooter, CommentCard} from '@/components'
import {ms, vs} from 'react-native-size-matters'

export default function ManageReportOnMessage({navigation}){
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
                    <Text style = {styles.statsTxt}> Reported </Text>
                    <Text style = {styles.reactOnTxt}> {`this post`} </Text>
                </View>
                <View style = {styles.reasonContainer}> 
                    <Text style = {styles.reasonTxt}>Reason : Explicit Content  </Text>
                </View>
            </View>
            <View style = {styles.body}>
                <Card>
                    <CardHeader 
                        fullName = {Data.fullName}
                        userName = {Data.userName}
                        profilePic = {Data.profilePic}
                        time = {Data.time}
                    />
                    <CardBody text = "Hey guys ! I'm glad to be a member here How's everyone's day going? I just finished a workout and I'm totally wiped out" />
                    
                    <CommentCard />


                    <CardFooter 
                        likeCount={32}
                        disLikeCount = {3}
                        commentCount = {3}
                    />
                </Card>
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
        padding : 3,
        marginLeft : 10
    },
    reasonTxt : {
        fontFamily : FontFamily.Recoleta_medium
    },
    body: {
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
        elevation : 2,
        padding : ms(8)
    },
   
})


const Data = {
    fullName : "Adam",
    userName : '@adam',
    profilePic : 'https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0=',
    time : 10
}