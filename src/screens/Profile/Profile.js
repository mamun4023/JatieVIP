
import React, {useState} from 'react';
import { 
  Text, 
  View, 
  Image, 
  StyleSheet, 
  StatusBar, 
} from 'react-native';
import {
  faSliders, 
  faSearch, 
} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import {NAVIGATION} from '@/constants'
import MyStatus from './myStatus';
import MyActivity from './myActivity';
import {StatusNavigatorBar, ShareFeed, HeaderTab, Icon, HorizontalLine} from '@/components'
import { strings } from '@/localization';


export function Profile({navigation}) {
  const [status, setStatus] = useState('my_status')
  return (
    <View style={styles.container}>
      <StatusBar barStyle= 'dark-content'  backgroundColor= 'transparent' />
      <View style = {styles.headerContainer}> 
        <View style = {styles.headerImageContainer} >
          <Image 
            style = {styles.headerImage}
            source={{
              uri : "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
            }}
          />
        <View>
            <Text style = {[TextStyles.header, {color : theme.light.colors.text}]} > Adam Voigt</Text>
            <Text style = {TextStyles.label}> @adamvoigt</Text>
        </View>
        </View>
         <View style = {styles.iconContiner} > 
            <Icon 
              icon = {faSliders} 
              size = {20}
              onPress = {()=> navigation.navigate(NAVIGATION.profileSetting)}
              style = {styles.icon}   
            />
            <Icon 
              icon={faSearch} 
              size = {20}
              style={styles.icon}   
            />
            <Icon 
              icon= {faBell} 
              size={20}
              style={styles.icon}
            />
            <View style = {styles.bellAlert}/> 
         </View>
      </View>
      <HeaderTab 
        title1 = {strings.profile.followers}
        count1 = {20}
        onPress1 = {()=> navigation.navigate(NAVIGATION.followers)}
        title2 = {strings.profile.following}
        count2 = {100}
        onPress2 = {()=> navigation.navigate(NAVIGATION.following)}
      />
      <StatusNavigatorBar 
        title1 = {strings.profile.myStatus}
        key1  = "my_status"
        title2 = {strings.profile.myActivity}
        key2 = "my_activity"
        status = {status} 
        setStatus = {setStatus} 
      />
      <HorizontalLine />
      <ShareFeed /> 
      {status == 'my_status'? <MyStatus /> : <MyActivity/>}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white',
  },
  headerContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 10
  },
  headerImageContainer : {
    flexDirection : 'row'
  },
  headerImage : {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 75
  },
  iconContiner: {
    flexDirection : 'row'
  },  
  icon : {
    margin : 10
  },
  bellAlert : {
    height : 10,
    width : 10,
    backgroundColor : 'red',
    position : 'absolute',
    borderRadius : 100,
    left : 100,
    top : 8
  },
  followerContainer: {
    flexDirection : 'row',
    borderRadius : 10,
    justifyContent : 'center'
  },
  follower : [
    TextStyles.label, {
      padding : 8,
      backgroundColor : theme.light.colors.infoBgLight,
      margin : 5,
      borderRadius : 10
    }
  ],
});
