import React from "react";
import { StyleSheet, View , Text, TouchableOpacity, Linking } from "react-native";
import { faArrowRight, faLock, faUser, faChartColumn, faBan, faPeopleRoof, faFile} from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from "@/theme";
import { FontFamily} from "@/theme/Fonts";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";
import {ms, vs} from 'react-native-size-matters';
import {Icon, TopBackButton} from '@/components';

export default function AdminTools({navigation}){
    return(
        <View style = {styles.contianer}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {[styles.headerText, TextStyles.header]}> {strings.profile.adminTools} </Text>
            <View style = {styles.body}>
              
                <TouchableOpacity style = {styles.list} onPress = {()=> navigation.navigate(NAVIGATION.manageReports)}>
                    <View style ={{flexDirection : 'row', alignItems : 'center'}}> 
                        <View style = {styles.iconContainer}> 
                            <FontAwesomeIcon 
                                icon={faFile}
                                size = {ms(20)}
                                color = {theme.light.colors.primary}
                            />
                        </View>
                        <Text style = {[TextStyles.header ,styles.listText]} >{strings.profile.manageReports}</Text>
                    </View>
                    <FontAwesomeIcon 
                        icon={faArrowRight}
                        color = {theme.light.colors.info}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate(NAVIGATION.blockedUsers)} style = {styles.list}>
                    <View style ={{flexDirection : 'row', alignItems : 'center'}}> 
                        <View style = {styles.iconContainer}> 
                            <FontAwesomeIcon 
                                icon={faPeopleRoof}
                                color = {theme.light.colors.primary}
                                size = {ms(20)}
                            />
                        </View>
                        <Text style = {[TextStyles.header ,styles.listText]} >{strings.profile.userManagement}</Text>
                    </View>
                    <FontAwesomeIcon 
                        icon={faArrowRight}
                        color = {theme.light.colors.info}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate(NAVIGATION.notificationSettings)} style = {styles.list}>
                    <View style ={{flexDirection : 'row', alignItems : 'center'}}> 
                        <View style = {styles.iconContainer} > 
                            <FontAwesomeIcon 
                                icon={faChartColumn}
                                size = {ms(20)}
                                color = {theme.light.colors.primary}
                            />
                        </View>
                        <Text style = {[TextStyles.header ,styles.listText]} >{strings.profile.analytics}</Text>
                    </View>
                    <FontAwesomeIcon 
                        icon={faArrowRight}
                        color = {theme.light.colors.info}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate(NAVIGATION.bannedUsers)} style = {styles.list}>
                    <View style ={{flexDirection : 'row', alignItems : 'center'}}> 
                        <View style = {styles.iconContainer} > 
                            <FontAwesomeIcon 
                                icon={faBan}
                                size = {ms(20)}
                                color = {theme.light.colors.primary}
                            />
                        </View>
                        <Text style = {[TextStyles.header ,styles.listText]} >{strings.profile.bannedUsers}</Text>
                    </View>
                    <FontAwesomeIcon 
                        icon={faArrowRight}
                        color = {theme.light.colors.info}
                    />
                </TouchableOpacity>
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
        padding : ms(10),
    },
    upgradeBox : {
        borderWidth : 2,
        borderColor : theme.light.colors.primary,
        backgroundColor : theme.light.colors.primaryBg,
        borderRadius : 10,
        padding : ms(10)
    },
    upgradeText : [
        TextStyles.header, {
            fontSize : ms(15, 0.3), 
            color : 'black',
            paddingLeft : ms(10),
        }
    ],
    lebelText: {
        fontFamily : FontFamily.BrandonGrotesque_regular,
        fontSize : ms(15, 0.3),
        paddingTop : ms(10)
    },
    list : {
        backgroundColor : theme.light.colors.white,
        marginTop : vs(10),
        padding : ms(10),
        elevation : 2,
        borderRadius : 10,
        justifyContent : 'space-between',
        flexDirection : 'row',
        alignItems : 'center'
    },
    listText : {
        color : theme.light.colors.black,
        fontSize : ms(15, 0.3),
        paddingLeft : 10
    },
    footer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : vs(100)
    },
    socialContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    socialIcon : {
        margin : ms(15)
    },
    copyWriteContainer: {
        alignItems : 'center'
    },
    copyRightText : {
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(15, 0.3)
    },
    iconContainer : { 
        padding : ms(10), 
        backgroundColor : theme.light.colors.primaryBgLight, 
        borderRadius : 100
    }
})