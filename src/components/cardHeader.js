import React from "react"
import { View, Text, Image, StyleSheet, TouchableOpacity} from "react-native"
import {TextStyles, theme} from '@/theme';
import PropsType from 'prop-types';
import {ms} from 'react-native-size-matters'
import { FontFamily } from "@/theme/Fonts";
import { Icon } from "./Icon";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

export const CardHeader = ({
    fullName, 
    userName, 
    profilePic, 
    time,
    isOfficial,
    showPin 
})=>{
    return(
        <View style = {styles.postHeader}> 
            <View style = {{flexDirection : 'row'}}>
                <Image 
                    style = {styles.Image}
                    source={{
                        uri : profilePic
                    }}
                />
                <View>
                    <Text style = {[TextStyles.header, {fontSize : ms(15, 0.3), color : 'black'}]} > {fullName} </Text>
                    <Text style = {[TextStyles.header, {fontSize : ms(12, 0.3)}]}> {userName} </Text>
                </View>
                {isOfficial? 
                    <View>  
                        <Text style = {styles.officialTxt}> Official </Text> 
                    </View>
                : null}

            </View>
            <View style = {{ flexDirection : 'row' }}>
               
                <Text style = {styles.timeTxt}> {time} mins ago</Text>
                {showPin? 
                    <TouchableOpacity style = {styles.pinIcon}> 
                        <FontAwesomeIcon 
                            icon = {faThumbTack}
                            color = {theme.light.colors.primary}
                        /> 
                    </TouchableOpacity>
                : null}
            </View>
        </View>
    )
}


CardHeader.prototype = {
    fullName : PropsType.string.isRequired,
    userName : PropsType.string.isRequired,
    profilePic : PropsType.string.isRequired,
    time : PropsType.string.isRequired
}

const styles = StyleSheet.create({
    postHeader: {
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : ms(10)
    },
    Image : {
        width: ms(35),
        height: ms(35),
        borderWidth: 2,
        borderRadius: 100
    },
    officialTxt : {
        backgroundColor : theme.light.colors.primaryBg,
        borderRadius : 10,
        padding : 2,
        fontSize : 12,
        marginLeft : 5
    },
    timeTxt : {
        paddingRight : 40
    },
    pinIcon : {
        backgroundColor : theme.light.colors.primaryBg,
        padding : 5,
        borderRadius : 100,
        justifyContent : 'center',
        position : 'absolute',
        right : 0
    }
})