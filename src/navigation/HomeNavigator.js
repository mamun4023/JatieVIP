import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';
import Comments from '@/screens/Home/comments';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown : false}}
      initialRouteName = {NAVIGATION.home}
    >
      <Stack.Screen name={NAVIGATION.home} component={Home} />
      <Stack.Screen name={NAVIGATION.comments} component={Comments} />
    </Stack.Navigator>
  );
}
