import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';
import { FontFamily } from './Fonts';
import { theme } from './theme';

export const TextStyles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontFamily: FontFamily.Recoleta_bold,
  },
  title: {
    fontSize: ms(15, 0.3),
    fontFamily: FontFamily.Recoleta_bold,
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
    fontFamily: FontFamily.BrandonGrotesque_regular,
    fontSize: ms(18),
  },
});
