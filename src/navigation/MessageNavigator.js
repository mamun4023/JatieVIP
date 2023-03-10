import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Message } from '@/screens';
import Chat from '@/screens/Message/Chat';
import SearchUser from '@/screens/Message/SearchUser';
import BirthDayToday from '@/screens/Message/BirthDayToday';
import AdminGroupChat from '@/screens/Message/AdminGroupChat';
import Notification from '@/screens/Message/notification';
import Search from '@/screens/Message/search';

const Stack = createNativeStackNavigator();

export function MessageNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NAVIGATION.message} component={Message} />
      <Stack.Screen name={NAVIGATION.chat} component={Chat} />
      <Stack.Screen name={NAVIGATION.searchUser} component={SearchUser} />
      <Stack.Screen
        name={NAVIGATION.adminGroupChat}
        component={AdminGroupChat}
      />
      <Stack.Screen name={NAVIGATION.birthDayToday} component={BirthDayToday} />
      <Stack.Screen name={NAVIGATION.notification} component={Notification} />
      <Stack.Screen name={NAVIGATION.search} component={Search} />
    </Stack.Navigator>
  );
}
