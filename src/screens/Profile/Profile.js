
import React from 'react';
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import { theme } from '@/theme'; 
import { styles } from '@/screens/Profile/Profile.styles';
import { TextStyles } from '@/theme';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faSliders, 
  faSearch, 
  faComment, 
  faEllipsis,
  faShareNodes,
  faCircleUp,
  faCircleDown,
  faAddressCard,
  faArrowRight,
  faNewspaper
} from '@fortawesome/free-solid-svg-icons';
import MyStatus from './myStatus';

import {faBell} from '@fortawesome/free-regular-svg-icons';

import { Icon } from '@/components';
import { useState } from 'react';
import MyActivity from './myActivity';

export function Profile() {
  const [myStatus, setMystatus] = useState(true)

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
      <View style = {styles.followerContainer} >
            <Text style = {styles.follower} > Followers  <Text style ={{fontWeight : 'bold'}}>24 </Text></Text>
            <Text style = {styles.follower} > Following  <Text style = {{fontWeight : 'bold'}}>30 </Text></Text>
      </View>
      <View style = {styles.statusContainer} >
          <View style = {styles.myStatus}>  
            <Text 
              style = {styles.statusText}
              onPress = {()=> setMystatus(true)}  
            > My Status 
            
            </Text> 
          </View>
          <View style = {styles.myActivity}>
            <Text  
              style = {styles.statusText}
              onPress = {()=> setMystatus(false)} 
              > My Activity </Text>  
          </View>
      </View>
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
              <Text style = {TextStyles.label} > Share To Feed</Text>
              <Text> What's on your mind? </Text>
           </View>
          <View>
            <Icon 
              icon={faArrowRight}
              size = {20}
            />
          </View>
      </View>
      <MyStatus />
      {/* <MyActivity/>
      <MyActivity/>
      <MyActivity/> */}
    </View>
  );
}

