import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {TextStyles, theme} from '@/theme'
import {FontFamily} from '@/theme/Fonts';
import {Icon, AppSwitch, HorizontalLine, Button, TopBackButton} from '@/components';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { ms } from 'react-native-size-matters';

export default function NotificationSettings({navigation}){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return(
        <View style = {styles.container}>
            <TopBackButton onPress = {()=> navigation.goBack()}  />
            <View style = {styles.listHeader}> 
                <Text style = {[TextStyles.header, {color : 'black'}]}> Notification </Text>
                <AppSwitch 
                    value={isEnabled}
                    onChange = {toggleSwitch}
                />
            </View>
            <HorizontalLine color = {theme.light.colors.infoBgLight} />
            <Text style = {styles.headerText} > From Members</Text>
            <View style = {styles.list}>
                <Text style = {styles.listTxt}> Someone reacts to my post </Text>
                <AppSwitch 
                    value={isEnabled}
                    onChange = {toggleSwitch}
                />
            </View>
            <View style = {styles.list}>
                <Text style = {styles.listTxt}> Someone comments on my post </Text>
                <AppSwitch 
                    value={isEnabled}
                    onChange = {toggleSwitch}
                />
            </View>
            <View style = {styles.list}>
                <Text style = {styles.listTxt}> Someone I'm following posts </Text>
                <AppSwitch 
                    value={isEnabled}
                    onChange = {toggleSwitch}
                />
            </View>
            <HorizontalLine color = {theme.light.colors.infoBgLight} />
            <Text style = {styles.headerText} > From Jatie </Text>
            <View style = {styles.list}>
                <Text style = {styles.listTxt}> Jatie posts </Text>
                <AppSwitch 
                    value={isEnabled}
                    onChange = {toggleSwitch}
                />
            </View>
            <View style = {styles.list}>
                <Text style = {styles.listTxt}> Jatie goes live </Text>
                <AppSwitch 
                    value={isEnabled}
                    onChange = {toggleSwitch}
                />
            </View>
        
            <Button 
                title="Save" 
                style={{
                    backgroundColor : theme.light.colors.primary,
                    alignItems : 'center',
                    marginTop : ms(150),
                    borderWidth : 0,
                    // marginLeft : 10,
                    // marginRight : 10
                }}
                textStyle={{
                    color : theme.light.colors.white
                }} />

       
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "white"
      },
      listHeader : {
        paddingTop : 5,
        paddingBottom : 5,         
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
      },
      headerText : {
        fontFamily : FontFamily.Recoleta_medium,
        paddingTop: 10,
        paddingBottom : 10,
        fontSize : 20,
        color : theme.light.colors.black
      },

      list : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        marginBottom : 10,
      
      },
      listTxt : {
        fontFamily : FontFamily.BrandonGrotesque_medium,
        fontSize : 20
      }
})