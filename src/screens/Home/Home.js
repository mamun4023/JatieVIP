import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Config } from 'react-native-config';
import { getUser } from '@/selectors/UserSelectors';
import { strings } from '@/localization';
import {theme, TextStyles} from  '@/theme';
import {ms} from 'react-native-size-matters';
import { Button, Icon } from '@/components';
import {faChevronDown, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import {ChooseUser, logout} from '@/actions/UserActions'
import {useSelector, useDispatch} from 'react-redux';

export function Home() {

  const user = useSelector(state => state.userType);
  const dispatch = useDispatch();
  
  console.log( "userType",  user)
 

  return (
    <View style={styles.container}>
      <View  style = {styles.header}>
        <View style = {styles.left}>
          <View>
             <Image 
              source={{
                uri : 'data:image/jpeg;base64,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'
              }}
              style ={styles.userPic}
             />
          </View>
          <View>
              <Text style = {styles.nameTxt}> News Feeds</Text>
              <View style = {styles.filterContainer}> 
                <View style = {styles.recent}> 
                  <Text> Recent </Text>
                  <Icon 
                    icon = {faChevronDown}
                  />
                </View>
                <Text> Following </Text>
              </View>
          </View>
        </View>
        <View style = {styles.right}>
          <Icon 
            icon = {faSearch}
          />
          <Icon 
            icon = {faBell}
          />
        </View>
      </View>

      <Button
        title="logout"
        onPress = {()=> dispatch(logout())}
      />
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : theme.light.colors.white
  },
  header : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    // backgroundColor : 'gray',
    // padding : ms(10)
  },
  left: {
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    alignItems : 'center'
  },
  right : {
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    alignItems : 'center'
  },
  nameTxt : [
    TextStyles.header, {
      color : theme.light.colors.black
    }
  ],
  userPic : {
    width : ms(50), 
    height : 50,
    borderRadius : 100
  },
  filterContainer : {
    flexDirection : 'row'
  }
});
