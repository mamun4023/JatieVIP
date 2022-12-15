import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import { FontFamily } from './Fonts';

export const TextStyles = StyleSheet.create({
  title: {
    fontSize: ms(18, 0.3),
    fontFamily: FontFamily.BrandonGrotesque_bold,
  },
  text: {
    fontSize: ms(16, 0.3),
    fontWeight: '400',
  },
  label: {
    fontSize: ms(16, 0.3),
    fontWeight: '700',
  },
  buttonText: {
    fontSize: ms(14, 0.3),
    fontFamily: FontFamily.BrandonGrotesque_bold,
  },
  error: {
    fontSize: ms(14, 0.3),
    fontWeight: '400',
  },
});
