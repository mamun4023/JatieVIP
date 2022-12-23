import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {TextStyles, theme} from '@/theme'
import {FontFamily} from '@/theme/Fonts';
import {Icon, AppSwitch, HorizontalLine, Button} from '@/components';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

export default function NotificationSettings({navigation}){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    
    return(
        <View style = {styles.container}>
            {/* <StatusBar barStyle= 'dark-content' backgroundColor= 'transparent' /> */}
            <View style ={{ padding : 5 }}>
              <Icon 
                  icon={faArrowLeft}
                  size = {20}
                  color = {theme.light.colors.info}
                  onPress = {()=> navigation.goBack()}
              />
            </View>
            <View style = {styles.listHeader}> 
                <Text style = {TextStyles.header}> Notification </Text>
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
                    marginTop : 200,
                    borderWidth : 0
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
        padding : 15,
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