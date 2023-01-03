import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, StatusBar } from 'react-native';
import {
  faSliders,
  faSearch,
  faArrowRight,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { ms, vs } from 'react-native-size-matters';
import { TextStyles, theme } from '@/theme';
import { NAVIGATION } from '@/constants';
import MyStatus from './myStatus';
import MyActivity from './myActivity';
import {
  StatusNavigatorBar,
  ShareFeed,
  HeaderTab,
  Icon,
  HorizontalLine,
} from '@/components';
import { strings } from '@/localization';
import { useSelector, useDispatch } from 'react-redux';
import { ChooseUser, logout } from '@/actions/UserActions';

export function Profile({ navigation }) {
  const dispatch = useDispatch();
  const userType = useSelector(state => state.userType);
  const [status, setStatus] = useState('my_status');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Image
            style={styles.headerImage}
            source={{
              uri: 'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
            }}
          />
          <View>
            <Text
              style={[TextStyles.header, { color: theme.light.colors.text }]}
            >
              {' '}
              Adam Voigt
            </Text>
            <Text style={TextStyles.label}> @adamvoigt</Text>
          </View>
        </View>
        <View style={styles.iconContiner}>
          <Icon
            icon={faSliders}
            size={ms(20)}
            onPress={() => navigation.navigate(NAVIGATION.profileSetting)}
            style={styles.icon}
          />
          <Icon
            icon={faSearch}
            size={ms(20)}
            onPress={() => navigation.navigate(NAVIGATION.search)}
            style={styles.icon}
          />
          <Icon
            icon={faBell}
            size={ms(20)}
            onPress={() => navigation.navigate(NAVIGATION.notification)}
            style={styles.icon}
          />
          <View style={styles.bellAlert} />
          <Icon
            icon={faRightFromBracket}
            size={ms(20)}
            color={theme.light.colors.secondary}
            onPress={() => dispatch(logout())}
            style={styles.icon}
          />
        </View>
      </View>
      <HeaderTab
        title1={strings.profile.followers}
        count1={20}
        onPress1={() => navigation.navigate(NAVIGATION.followers)}
        title2={strings.profile.following}
        count2={100}
        onPress2={() => navigation.navigate(NAVIGATION.following)}
      />
      <StatusNavigatorBar
        title1={strings.profile.myStatus}
        key1="my_status"
        title2={strings.profile.myActivity}
        key2="my_activity"
        status={status}
        setStatus={setStatus}
      />
      <HorizontalLine />
      <ShareFeed />
      <View style={styles.feedContainer}>
        {status == 'my_status' ? <MyStatus /> : <MyActivity />}
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: ms(10),
  },
  headerImageContainer: {
    flexDirection: 'row',
  },
  headerImage: {
    width: ms(50),
    height: vs(50),
    borderWidth: 2,
    borderRadius: 100,
  },
  iconContiner: {
    flexDirection: 'row',
  },
  icon: {
    margin: ms(10),
  },
  bellAlert: {
    height: ms(10),
    width: ms(10),
    backgroundColor: 'red',
    position: 'absolute',
    borderRadius: 100,
    left: ms(100),
    top: ms(8),
  },
  feedContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
});
