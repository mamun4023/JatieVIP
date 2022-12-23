import React from "react";
import { StyleSheet, View , Text, TouchableOpacity } from "react-native";
import {Icon} from '@/components';
import {
    faArrowLeft, 
    faArrowRight, 
    faLock, 
    faUser,

} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faTiktok,
    faSnapchat,
    faYoutube,
    faInstagram,
  } from '@fortawesome/free-brands-svg-icons';
import { TextStyles, theme } from "@/theme";
import { FontFamily} from "@/theme/Fonts";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import { strings } from "@/localization";
import { NAVIGATION } from "@/constants";


export default function Settings({navigation}){
    return(
        <View style = {styles.contianer}>
            <View style ={styles.header}>
              <Icon 
                  icon={faArrowLeft}
                  size = {20}
                  onPress = {()=> navigation.goBack()}
                  style = {[styles.headerIcon]}
              />
              <Text style = {[styles.headerText, TextStyles.header]}>Settings </Text>
            </View>
            <View style = {styles.body}>
                <TouchableOpacity style = {styles.upgradeBox}>
                    <View style = {{flexDirection : 'row',  justifyContent : 'space-between'}}> 
                        <View style = {{flexDirection : 'row'}}> 
                            <FontAwesomeIcon 
                                icon={faBell}
                                color = {theme.light.colors.primary}
                            />
                            <Text style = {styles.upgradeText}> Upgrade to VIP Mebmership</Text>
                        </View>
                        <View>
                            <FontAwesomeIcon 
                                icon={faArrowRight}
                                color = {theme.light.colors.info}
                            />
                        </View>
                    </View>
                    <Text style = {styles.lebelText}> Get the best out of Jatie VIP</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.list} onPress = {()=> navigation.navigate(NAVIGATION.editProfile)}>
                    <View style ={{flexDirection : 'row', alignItems : 'center'}}> 
                        <View style = {styles.iconContainer}> 
                            <FontAwesomeIcon 
                                icon={faUser}
                                size = {20}
                                color = {theme.light.colors.primary}
                            />
                        </View>
                        <Text style = {[TextStyles.header ,styles.listText]} > Edit Profile</Text>
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
                                icon={faLock}
                                color = {theme.light.colors.primary}
                                size = {20}
                            />
                        </View>
                        <Text style = {[TextStyles.header ,styles.listText]} >Blocked Users</Text>
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
                                icon={faBell}
                                size = {20}
                                color = {theme.light.colors.primary}

                            />
                        </View>
                        <Text style = {[TextStyles.header ,styles.listText]} >Notification Settings</Text>
                    </View>
                    <FontAwesomeIcon 
                        icon={faArrowRight}
                        color = {theme.light.colors.info}

                    />
                </TouchableOpacity>

              
                <View style = {styles.footer}> 
                    <View style = {styles.socialContainer}>
                        <Icon
                            icon={faFacebook}
                            size={25}
                            style = {styles.socialIcon}
                        />
                        <Icon
                            icon={faTiktok}
                            size={25}
                            style = {styles.socialIcon}
                        />
                        <Icon
                            icon={faSnapchat}
                            size={25}
                            style = {styles.socialIcon}
                        />
                        <Icon
                            icon={faYoutube}
                            size={25}
                            style = {styles.socialIcon}
                        />
                        <Icon
                            icon={faInstagram}
                            size={25}
                            style = {styles.socialIcon}
                        />
                    </View>
                    <View style = {styles.copyWriteContainer}> 
                        <Text style = {styles.copyRightText}> App Version 1.233.309 </Text>
                        <Text style = {styles.copyRightText}> ©JatieVIP, Inc. All rights reserved </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contianer : {
        flex : 1,
        backgroundColor : theme.light.colors.white,
    },
    header : {
        padding : 15,
    },
    headerIcon: {
        color : theme.light.colors.info
    },
    headerText : {
        marginTop : 10,
        color : theme.light.colors.black
    },
 
    body:{
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
        padding : 10,
    },
    upgradeBox : {
        borderWidth : 2,
        borderColor : theme.light.colors.primary,
        backgroundColor : theme.light.colors.primaryBg,
        borderRadius : 10,
        padding : 10,
        elevation : 2
    },
    upgradeText : [
        TextStyles.header, {
            fontSize : 15, 
            color : 'black',
            paddingLeft : 10,
        }
    ],
    lebelText: [
        TextStyles.text,{
            paddingTop : 10
        }
    ],
    list : {
        backgroundColor : theme.light.colors.white,
        marginTop : 10,
        padding : 10,
        elevation : 2,
        borderRadius : 10,
        justifyContent : 'space-between',
        flexDirection : 'row',
        alignItems : 'center'
    },
    listText : {
        color : theme.light.colors.black,
        fontSize : 15,
        paddingLeft : 10
    },
    footer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    socialContainer : {
        // flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    socialIcon : {
        margin : 15
    },
    copyWriteContainer: {
        alignItems : 'center'
    },
    copyRightText : {
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : 15
    },
    iconContainer : { 
        padding : 10, 
        backgroundColor : theme.light.colors.primaryBgLight, 
        borderRadius : 100
    }
})