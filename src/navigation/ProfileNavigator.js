import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Profile } from '@/screens';
import Following from '@/screens/Profile/following';
import Followers from '@/screens/Profile/followers';
import Settings from '@/screens/Profile/settings';
import UserProfile from '@/screens/Profile/userProfile';
import EditProfile from '@/screens/Profile/editProfile';

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

    </Stack.Navigator>
  );
}
