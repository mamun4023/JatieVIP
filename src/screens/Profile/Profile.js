
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
  faArrowRight,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import {NAVIGATION} from '@/constants'
import { Icon } from '@/components';
import MyStatus from './myStatus';
import MyActivity from './myActivity';
import {StatusNavigatorBar} from '@/components'
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
              icon= {faSliders} 
              size = {20}
              onPress = {()=> navigation.navigate(NAVIGATION.profileSetting)}
              style={styles.icon}   
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
      <View style = {styles.followerContainer}>
        <TouchableOpacity> 
          <Text style = {styles.follower} onPress = {()=> navigation.navigate(NAVIGATION.followers)}> Followers  
            <Text style ={{fontWeight : 'bold'}}> 24 </Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>  
          <Text style = {styles.follower} onPress = {()=> navigation.navigate(NAVIGATION.following)} > Following  
            <Text style = {{fontWeight : 'bold'}}> 30 </Text>
          </Text>
        </TouchableOpacity>
      </View>
      <StatusNavigatorBar 
        title1 = "My Status"
        key1  = "my_status"
        title2 = "My Activity"
        key2 = "my_activity"
        status = {status} 
        setStatus = {setStatus} 
      />
      <View style = {styles.line}/> 
      <View  style = {styles.feedContainer} >
          <View style = {styles.feedIconContainer}>
            <Icon 
              icon={faNewspaper}
              size = {30}
              style = {styles.feedIcon}
            />
          </View>
           <View 
            style = {{
              position : 'absolute',
              left : '25%'
            }}
           > 
              <Text style = {[TextStyles.label, {color : 'black'}]} >{strings.profile.feedTitle}</Text>
              <View style = {{
                  flexDirection : 'row',
                  justifyContent : 'space-around',
                  alignItems : 'center'
                }}
              > 
                <Text> {strings.profile.feedLebel} </Text>
                <Icon 
                  icon={faArrowRight}
                  size = {15}
                  style = {{
                    marginLeft : 120,
                    color : 'gray'
                  }}
                />
              </View>
           </View>
      </View>
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
  line : {
    borderBottomColor: theme.light.colors.primary,
    borderBottomWidth: 2.5,
  },
  feedContainer : {
    elevation : 8,
    width : '100%',
    height : 100,
    backgroundColor : theme.light.colors.white,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : 20
  },
  feedIconContainer : {
    backgroundColor : theme.light.colors.primaryBg,
    padding : 10,
    borderRadius : 100,
  },
  feedIcon: {
    color : theme.light.colors.primary
  },
});
