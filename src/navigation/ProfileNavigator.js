import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Profile } from '@/screens';
import Following from '@/screens/Profile/following';
import Followers from '@/screens/Profile/followers';

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
        name= 'followers'
        component={Followers}
      />
      <Stack.Screen
        name= 'following'
        component={Following}
      />

    </Stack.Navigator>
  );
}
