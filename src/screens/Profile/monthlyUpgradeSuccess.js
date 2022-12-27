import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button, TopBackButton } from '@/components';
import { TextStyles, theme } from '@/theme';
import { ms } from 'react-native-size-matters';
import {Logo} from '@/assets';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontFamily } from '@/theme/Fonts';
import { NAVIGATION } from '@/constants';
import { strings } from '@/localization';

export default function MonthlyUpgradeSuccess({navigation}){
    return(
        <View style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()} />
            <Text style = {styles.headerTxt}>{strings.profile.vipMemberShip} </Text>

            <View style = {styles.succesBox}>
                <View>
                    <Logo 
                        height = {70}
                        width = {70}
                    />
                </View>
                <View>
                    <View>
                        <FontAwesomeIcon 
                            icon={faCheckCircle}
                            size = {25}
                            color = {theme.light.colors.success}
                        />
                    </View>
                    <Text style = {[TextStyles.header, {fontSize : 18, color : 'black'}]} >{strings.profile.youAreVIP} </Text>
                    <Text style = {styles.RenewsTxt}>Renews on December 10,2023 </Text>
                </View>
            </View>


            <View style = {styles.footerBtnContainer}> 
                <Button 
                    title= "Upgrade to Yearly Subscription"
                />
                <Button 
                    title= "Cancel Membership"
                    onPress = {()=> navigation.navigate(NAVIGATION.cancelMembership)}
                    style={{
                        marginTop : 10,
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
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    headerTxt : [
        TextStyles.header,{
            color : theme.light.colors.black,
            paddingLeft : ms(8)
        }
    ], 
    succesBox : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        backgroundColor : theme.light.colors.primaryBg,
        padding : ms(30)
    },
    footerBtnContainer : {
        margin : ms(10),
    },
    
    RenewsTxt : {
        fontFamily : FontFamily.BrandonGrotesque_medium
    }
})