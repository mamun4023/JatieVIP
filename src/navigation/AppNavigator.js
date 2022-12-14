import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TabBarIcon } from '@/components';
import { NAVIGATION } from '@/constants';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  function getTabIcon(tab) {
    switch (tab) {
      case NAVIGATION.homeNavigator:
        return 'Home'
      case NAVIGATION.profileNavigator:
          return 'Profile'
    
      default:
        break;
    }
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => (
          <TabBarIcon color={color} routeName={getTabIcon(route.name)} />
        ),
        tabBarActiveTintColor:colors.activeTab,
        tabBarInactiveTintColor:colors.inactiveTab,
      
      })
    }
    >
      <Tab.Screen name={NAVIGATION.homeNavigator} component={HomeNavigator} />
      <Tab.Screen name={NAVIGATION.profileNavigator} component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
