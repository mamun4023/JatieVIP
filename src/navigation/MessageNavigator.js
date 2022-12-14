import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Message } from '@/screens';

const Stack = createNativeStackNavigator();

export function MessageNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.message}
        component={Message}
        options={{ headerLargeTitle: false }}
      />
    </Stack.Navigator>
  );
}
