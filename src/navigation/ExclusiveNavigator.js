import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Exclusive } from '@/screens';
import Thubmnail from '@/screens/Exclusive/thumbnail';

const Stack = createNativeStackNavigator();

export function ExclusiveNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown : false}}
      initialRouteName = {NAVIGATION.exclusive}
    >
    <Stack.Screen
      name={NAVIGATION.exclusive}
      component={Exclusive}
      options={{ headerLargeTitle: false }}
    />
    <Stack.Screen
      name= {NAVIGATION.exclusiveThumbnail}
      component={Thubmnail}
    />

    </Stack.Navigator>
  );
}
