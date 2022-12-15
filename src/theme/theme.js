import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#B0BEC5',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#212121',
      border: '#212121',
      activeTabIcon: '#D3A708',
      inactiveTabIcon: '#80818E',
      activeTabLabel: '#2B2D42',
      inactiveTabLabel: '#80818E',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#212121',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#FFFFFF',
      border: '#FFFFFF',
      activeTabIcon: '#4FC3F7',
      inactiveTabIcon: '#FFFFFF',
      activeTabLabel: '#2B2D42',
      inactiveTabLabel: '#80818E',
    },
  },
};
