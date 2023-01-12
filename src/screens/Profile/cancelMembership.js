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
import { strings } from '@/localization';

export default function CancelMemberShip({navigation}){
    return(
        <SafeAreaView style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {[styles.headerTxt, {paddingLeft : ms(6)}]}>{strings.profile.cancelVipMembership}</Text>
            <View style = {styles.body}>
            <View style = {{marginTop : ms(20)}}/>
                <Text style = {[styles.headerTxt, {fontSize : ms(18, 0.3)}]}>{strings.profile.cencelMessage}</Text>
            <View style = {styles.card}>
                <Text style = {[TextStyles.header, {fontSize : ms(15, 0.3)}]}> {strings.profile.benefits} </Text>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > {strings.profile.benefit_1} </Text>
                </View>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > {strings.profile.benefit_2}  </Text>
                </View>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > {strings.profile.benefit_3} </Text>
                </View>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > {strings.profile.benefit_4} </Text>
                </View>
                <View style = {styles.list}>
                    <View style = {styles.iconContainer}>     
                        <FontAwesomeIcon 
                            icon={faCheck}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {styles.listText} > {strings.profile.benefit_5}</Text>
                </View>
                <View style = {styles.btnContainer}> 
                    <Button 
                        title= {strings.profile.doNotCancel}
                        onPress = {()=> navigation.navigate(NAVIGATION.monthlyUpgradeSuccess)}
                        style={{
                            marginTop : ms(10)
                        }}
                    />
                    <Button 
                        title= {strings.profile.cancelAnyway}
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
        </SafeAreaView>
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
        padding : ms(10)
    },
    card : {
        backgroundColor : theme.light.colors.white,
        margin : ms(8),
        borderRadius : 10,
        padding : ms(10),
        elevation : 1
    },
    iconContainer : {
        backgroundColor : theme.light.colors.successBg,
        borderRadius : 100,
        padding : ms(8)
    },
    list :{
        flexDirection : 'row',
        alignItems : 'center',
        padding : ms(5),
    },
    listText : {
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : ms(16, 0.3)
    },
    btnContainer : {
        alignItems : 'center'
    },
    footerTxtContainer : {
        alignItems : 'center',
        padding : ms(10),
    },
    footerTxt :{
        fontFamily : FontFamily.BrandonGrotesque_medium,
        color : theme.light.colors.black
    }
})