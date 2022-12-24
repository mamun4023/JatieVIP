import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { strings } from '@/localization';
import { Icon } from '@/components';
import PropsType from 'prop-types';
import { theme, TextStyles } from '@/theme';
import { faArrowRight, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { vs, ms } from 'react-native-size-matters';

export const ShareFeed = () => {
  return (
    <View style={styles.feedContainer}>
        <View style={styles.feedIconContainer}>
          <Icon 
            icon={faNewspaper} 
            size={ms(30)} 
            style={styles.feedIcon} 
          />
        </View>
        <View style={{
            position: 'absolute',
            left: '25%',
          }}
        >
          <Text style={[TextStyles.label, { color: 'black' }]}>
            {strings.profile.feedTitle}
          </Text>
          <View
            style={{
              flexDirection : 'row',
              alignItems : 'center',
              justifyContent : 'space-between'

            }}
          >
          <Text> {strings.profile.feedLebel} </Text>
          <Icon
            icon={faArrowRight}
            size={ms(15)}
            color = "gray"
            style = {{
              marginLeft : ms(110)
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    elevation: 8,
    width: '100%',
    height: vs(90),
    backgroundColor: theme.light.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: vs(20),
  },
  feedIconContainer: {
    backgroundColor: theme.light.colors.primaryBg,
    padding: ms(10),
    borderRadius: 100,
  },
  feedIcon: {
    color: theme.light.colors.primary,
  },
});
