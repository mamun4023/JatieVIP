import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Profile } from '@/screens';
import Following from '@/screens/Profile/following';
import Followers from '@/screens/Profile/followers';
import Settings from '@/screens/Profile/settings';
import UserProfile from '@/screens/Profile/userProfile';
import EditProfile from '@/screens/Profile/editProfile';
import Notification from '@/screens/Profile/notification';
import Search from '@/screens/Profile/search';
import NotificationSettings from '@/screens/Profile/notificationSettings';
import BlockedUsers from '@/screens/Profile/blockedUsers';
import UpgradeMembership from '@/screens/Profile/upgradeMembership';
import MonthlyUpgradeSuccess from '@/screens/Profile/monthlyUpgradeSuccess';
import CancelMemberShip from '@/screens/Profile/cancelMembership';

const Stack = createNativeStackNavigator();

export function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown : false}}
      initialRouteName = {NAVIGATION.profile}
    >
      <Stack.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{ headerLargeTitle: false }}
      />
      <Stack.Screen
        name= {NAVIGATION.followers}
        component={Followers}
      />
      <Stack.Screen
        name= {NAVIGATION.following}
        component={Following}
      />
      <Stack.Screen
        name= {NAVIGATION.profileSetting}
        component={Settings}
      />
      <Stack.Screen
        name= {NAVIGATION.userProfile}
        component={UserProfile}
      />
      <Stack.Screen
        name= {NAVIGATION.editProfile}
        component={EditProfile}
      />
      <Stack.Screen
        name= {NAVIGATION.notificationSettings}
        component={NotificationSettings}
      />
      <Stack.Screen
        name= {NAVIGATION.blockedUsers}
        component={BlockedUsers}
      />
      <Stack.Screen
        name= {NAVIGATION.notification}
        component={Notification}
      />
      <Stack.Screen
        name= {NAVIGATION.search}
        component={Search}
      />
      <Stack.Screen
        name= {NAVIGATION.upgradeMembership}
        component={UpgradeMembership}
      />

      <Stack.Screen
        name= {NAVIGATION.monthlyUpgradeSuccess}
        component={MonthlyUpgradeSuccess}
      />
      <Stack.Screen
        name = {NAVIGATION.cancelMembership}
        component = {CancelMemberShip}
      />



    </Stack.Navigator>
  );
}
