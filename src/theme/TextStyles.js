import { StyleSheet } from 'react-native';
import { FontFamily } from './Fonts';

export const TextStyles = StyleSheet.create({
  header : {
    fontSize : 25,
    fontFamily : FontFamily.Recoleta_bold
  },
  title: {
    fontSize: 18,
    fontFamily: FontFamily.BrandonGrotesque_bold,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
  error: {
    fontSize: 14,
    fontWeight: '400',
  },
});
