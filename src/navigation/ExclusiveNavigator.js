import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Exclusive } from '@/screens';

const Stack = createNativeStackNavigator();

export function ExclusiveNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.exclusive}
        component={Exclusive}
        options={{ headerLargeTitle: false }}
      />
    </Stack.Navigator>
  );
}
