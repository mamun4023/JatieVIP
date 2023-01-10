import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
import { SafeAreaView } from 'react-native-safe-area-context';

export function Giveaway({ navigation }) {
  const userType = useSelector(state => state.userType);
  const [status, setStatus] = useState(strings.giveaway.active);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Logo />
          <View>
            <Text
              style={[
                TextStyles.header,
                { color: theme.light.colors.text, margin: ms(15) },
              ]}
            >
              {strings.giveaway.header}
            </Text>
          </View>
        </View>

        <View style={styles.iconContiner}>
          <Icon icon={faSearch} size={ms(22)} style={styles.searchIcon} />
          <Icon icon={faBell} size={ms(22)} style={styles.bellIcon} />
        </View>
        <View style={styles.bellAlert} />
      </View>

      <StatusNavigatorBar
        title1={strings.giveaway.active}
        key1={strings.giveaway.active}
        title2={strings.giveaway.past}
        key2={strings.giveaway.past}
        status={status}
        setStatus={setStatus}
      />
      <HorizontalLine />

      <View style={styles.feedContainer}>
        {status == `${strings.giveaway.active}`
          ? Active({ navigation, userType })
          : Past({ navigation })}
      </View>
      {/* Admin Button */}

      {userType.user == `${strings.userType.admin}` && (
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION.adminGiveawayPost)}
          style={[
            styles.adminBtn,
            { backgroundColor: theme.light.colors.primary, width: ms(140) },
          ]}
        >
          <Text
            style={[styles.adminBtnTxt, { color: theme.light.colors.white }]}
          >
            {strings.giveaway.newGiveaway}
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
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
