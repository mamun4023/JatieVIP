import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const theme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#D3A708',
      secondary: '#29434E',
      error: '#D32F2F',
      text: '#2B2D42',
      border: '#212121',
      activeTabIcon: '#D3A708',
      inactiveTabIcon: '#80818E',
      activeTabLabel: '#2B2D42',
      inactiveTabLabel: '#80818E',
      white: '#fff',
      title: '#2B2D42',
      hyperlink: '#9381FF',
      textFieldBackgroundColor: '#F8F8F9',
      textFieldBorderColor: '#F2F2F3',
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
