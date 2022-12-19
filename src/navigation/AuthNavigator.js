import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import {
  AddProfilePicture,
  EnterOtp,
  Login,
  SetupUserId,
  SignUp,
  Welcome,
} from '@/screens';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}
    >
      <Stack.Screen
        component={Welcome}
        name={NAVIGATION.welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={Login}
        name={NAVIGATION.login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={EnterOtp}
        name={NAVIGATION.enterOtp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SetupUserId}
        name={NAVIGATION.setupUserId}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={SignUp}
        name={NAVIGATION.signUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        component={AddProfilePicture}
        name={NAVIGATION.addProfilePicture}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
