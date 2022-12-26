import { TextStyles, theme } from '@/theme';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Logo } from '@/assets';
import { ms, vs } from 'react-native-size-matters';
import {TopBackButton, Button, Card} from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck, faTruckFront } from '@fortawesome/free-solid-svg-icons';
import { FontFamily } from '@/theme/Fonts';
import { NAVIGATION } from '@/constants';

export default function CancelMemberShip({navigation}){
    return(
        <View style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {[styles.headerTxt, {paddingLeft : ms(6)}]}>Cancel VIP Membership</Text>
            <View style = {styles.body}>
            <View style = {{marginTop : ms(20)}}/>
                <Text style = {[styles.headerTxt, {fontSize : ms(18, 0.3)}]}>Are you sure want to cancel? You will lose the following benefits</Text>
            <View style = {styles.card}>
                <Text style = {[TextStyles.header, {fontSize : 15}]}> Benefits </Text>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > Access to all VIP Exclusive Content </Text>
                </View>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > Access to exclusive VIP Giveaways  </Text>
                </View>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > Private message from Josh and Katie </Text>
                </View>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > VIP Member only feed </Text>
                </View>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > VIP only live streams and one-on-one </Text>
                </View>
                <View style = {styles.btnContainer}> 
                    <Button 
                        title= "Don't Cancel"
                        onPress = {()=> navigation.navigate(NAVIGATION.monthlyUpgradeSuccess)}
                        style={{
                            marginTop : ms(10)
                        }}
                    />
                    <Button 
                        title= "Cancel Anyway"
                        style={{
                            marginTop : ms(10),
                            borderWidth : 2,
                            borderColor : theme.light.colors.primary,
                            backgroundColor : theme.light.colors.white
                        }}
                        textStyle = {{
                            color : theme.light.colors.primary
                        }}
                    />
                </View>
                     
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    headerTxt : [
        TextStyles.header, {
            color : theme.light.colors.black
        }
    ],
    body :{
        flex : 1,
        backgroundColor : theme.light.colors.primaryBgLight,
        padding : 10
    },
    card : {
        backgroundColor : theme.light.colors.white,
        margin : ms(8),
        borderRadius : 10,
        padding : 10,
        elevation : 1
    },
    iconContainer : {
        backgroundColor : theme.light.colors.successBg,
        borderRadius : 100,
        padding : 8
    },
    list :{
        flexDirection : 'row',
        alignItems : 'center',
        padding : 5,
    },
    listText : {
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : 16
    },
    btnContainer : {
        alignItems : 'center'
    },
    footerTxtContainer : {
        alignItems : 'center',
        padding : 10,
    },
    footerTxt :{
        fontFamily : FontFamily.BrandonGrotesque_medium,
        color : theme.light.colors.black
    }
})