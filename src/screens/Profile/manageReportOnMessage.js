import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {theme, TextStyles} from '@/theme';
import {FontFamily} from '@/theme/Fonts';
import {strings} from '@/localization';
import {HorizontalLine, TopBackButton, CardHeader, ModalDown, Card, CardBody, CardFooter, CommentCard, ModalList} from '@/components'
import {ms, vs} from 'react-native-size-matters'
import { useState } from "react";
import {
    faSearch, 
    faCrown, 
    faMessage, 
    faUserPlus, 
    faEllipsis,
    faFlag,
    faXmark,
    faPen,
    faTrash
} from '@fortawesome/free-solid-svg-icons';


export default function ManageReportOnMessage({navigation}){
    const [open, setOpen] = useState(false);

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
                <TouchableOpacity 
                    style = {{
                        flexDirection : 'row',
                        justifyContent : 'space-evenly',
                        maxWidth : '80%',
                        // borderWidth : 2,
                        // borderColor : 'gray'
                    }}
                    onPress = {()=> setOpen(true)}
                >
                    <View style = {{
                        backgroundColor : 'coral',
                        padding : 10,
                        borderRadius : 10
                        
                    }}>
                        <Text>Message body Message body Message body Message body  Message body Message body Message body Message bodyMessage body Message body Message body Message bodyMessage body Message body Message body Message body </Text>
                    </View>
                    <View>
                        <Image 
                            source={{
                                uri : "data:image/jpeg;base64,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"
                            }}
                            style = {{
                                height : 50,
                                width : 50,
                                borderRadius : 100,
                                position : 'absolute',
                                bottom : 0,
                                borderWidth : 2,
                                borderColor : 'red'
                            }}
                        />
                    </View>
                </TouchableOpacity>

            </View>

            <ModalDown
                open = {open}
                setOpen = {setOpen}
            >
                 <ModalList 
                    title= "Follow"
                    icon={faUserPlus}
                    iconColor = {theme.light.colors.primary}
                    iconBg = {theme.light.colors.primaryBgLight}
                    />
                    <ModalList 
                    title= "Send a Private  Message"
                    icon={faMessage}
                    iconColor = {theme.light.colors.success}
                    iconBg = {theme.light.colors.successBgLight}
                    onPress = {()=> Alert.alert("working")}
                    />
                    <ModalList 
                    title= "Report"
                    icon={faFlag}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                        />
                        <ModalList 
                        title= "Block"
                        icon={faXmark}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                        />
                        <ModalList 
                        title= "Ban"
                        icon={faFlag}
                        iconColor = {theme.light.colors.secondary}
                        iconBg = {theme.light.colors.infoBgLight}
                        />

            </ModalDown>
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


