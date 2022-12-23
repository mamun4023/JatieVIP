import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {strings} from '@/localization'
import {Icon} from '@/components';
import PropsType from 'prop-types';
import {theme, TextStyles} from '@/theme'

import {
    faArrowRight,
    faNewspaper
} from '@fortawesome/free-solid-svg-icons';

export const ShareFeed = ()=> {
    return(
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
    )
}


const styles = StyleSheet.create({
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
})