import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '@/screens/Giveaway/Giveaway.styles';
import { TextStyles, theme } from '@/theme';
import { HorizontalLine, Icon, StatusNavigatorBar } from '@/components';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Past from './past';
import Active from './active';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { NAVIGATION } from '@/constants';
import { Logo } from '@/assets';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ms } from 'react-native-size-matters';
import { strings } from '@/localization';

export function Giveaway({ navigation }) {
  const userType = useSelector(state => state.userType);
  const [status, setStatus] = useState('Active');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Logo />
          <View>
            <Text
              style={[
                TextStyles.header,
                { color: theme.light.colors.text, margin: 15 },
              ]}
            >
              {' '}
              {strings.giveaway.header}
            </Text>
          </View>
        </View>

        <View style={styles.iconContiner}>
          <View style={styles.bellAlert} />
          <Icon icon={faSearch} size={ms(20)} style={styles.searchIcon} />
          <Icon icon={faBell} size={ms(20)} style={styles.bellIcon} />
        </View>
      </View>

      <StatusNavigatorBar
        title1={strings.giveaway.active}
        key1="Active"
        title2={strings.giveaway.past}
        key2="Past"
        status={status}
        setStatus={setStatus}
      />
      <HorizontalLine />

      <View style={styles.feedContainer}>
        {status == 'Active' ? Active({ navigation }) : Past({ navigation })}
      </View>
      {/* Admin Button */}

      {userType.user == 'Admin' && (
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION.adminGiveawayPost)}
          style={[
            styles.adminBtn,
            { backgroundColor: theme.light.colors.primary, width: 150 },
          ]}
        >
          <Text
            style={[styles.adminBtnTxt, { color: theme.light.colors.white }]}
          >
            {strings.giveaway.newGiveaway}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const Data = [
  {
    id: 1,
    title: 'Summer 2023 Giveaway',
    EndsIn: '12 Day: 13 Hrs: 12 Sec',
    Desc: 'Thanks for joining our app everyone! To show our appreciation, we are going to raffle away a brand new iPhone 13!',
    profilePic:
      'https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Summer 2023 Giveaway',
    EndsIn: '12 Day: 13 Hrs: 12 Sec',
    Desc: 'Thanks for joining our app everyone! To show our appreciation, we are going to raffle away a brand new iPhone 13!',
    profilePic:
      'https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80',
  },
];
