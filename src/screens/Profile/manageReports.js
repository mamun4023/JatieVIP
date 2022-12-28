import React from "react";
import { StyleSheet, View , Text, TouchableOpacity, FlatList } from "react-native";
import { TextStyles, theme } from "@/theme";
import { FontFamily} from "@/theme/Fonts";
import { strings } from "@/localization";
import {ms, vs} from 'react-native-size-matters';
import {CardHeader, TopBackButton} from '@/components';
import { NAVIGATION } from "@/constants";

export default function ManageReports({navigation}){
    return(
        <View style = {styles.contianer}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {[styles.headerText, TextStyles.header]}> {strings.profile.manageReports} </Text>
            <View style = {styles.body}>
                <FlatList 
                    data={Data}
                    key = {(item)=> item.id}
                    renderItem = {({item})=>(
                        <TouchableOpacity 
                            style = {styles.list}
                            onPress = {()=> {
                                if(item.reportOn == 'post'){
                                    navigation.navigate(NAVIGATION.manageReportOnPost)
                                }
                                if(item.reportOn == 'message'){
                                    navigation.navigate(NAVIGATION.manageReportOnMessage)
                                }
                                if(item.reportOn == 'profile'){
                                    navigation.navigate(NAVIGATION.manageReportOnProfile)
                                }
                            }}
                        > 
                                <CardHeader 
                                    fullName = {item.fullName}
                                    userName = {item.userName}
                                    profilePic = {item.profilePic}
                                    time = {item.time}
                                />
                                <View style = {styles.activity}>
                                    <View style ={styles.textContainer}> 
                                        <Text style = {styles.statsTxt}> {strings.profile.reported} </Text>
                                        <Text style = {styles.reactOnTxt}> {`this ${item.reportOn}`} </Text>
                                    </View>
                                    <View style = {styles.reasonContainer}> 
                                        <Text style = {styles.reasonTxt}>{strings.profile.reason} Explicit Content  </Text>
                                    </View>
                                </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer : {
        flex : 1,
        backgroundColor : theme.light.colors.white,
    },
    headerIcon: {
        color : theme.light.colors.info
    },
    headerText : {
        color : theme.light.colors.black
    },
    body:{
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
    },
    list : {
        backgroundColor : theme.light.colors.white, 
        marginTop : vs(3),
        borderColor : theme.light.colors.primary
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
        fontSize : ms(10,0.3)
    }
})


const Data = [
    {
        id : 1,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        reportOn : 'post',
        time : 10,
    },
    {
        id : 2,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        reportOn : 'message',
        time : 50,
    },
    {
        id : 3,
        fullName : "Adam Voigt",
        userName : "@adam",
        profilePic : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=",
        reportOn : 'profile',
        time : 5,
    },
]