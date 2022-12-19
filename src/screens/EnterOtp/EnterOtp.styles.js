import { theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { StyleSheet } from 'react-native';
import { ms } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ms(70),
    paddingHorizontal: ms(20),
  },
  submitButton: {
    marginTop: 0,
  },
  subTitle: {
    marginTop: ms(15),
    fontSize: ms(18, 0.3),
    fontFamily: FontFamily.BrandonGrotesque_medium,
    color: theme.light.colors.text,
  },
  editBtn: {
    fontFamily: FontFamily.BrandonGrotesque_bold,
    color: theme.light.colors.primary,
  },
  otpContainer: {
    alignSelf: 'center',
    marginVertical: ms(15),
    width: '100%',
  },
  otpCell: {
    borderWidth: ms(1),
    borderRadius: ms(8),
    borderColor: '#F2F2F3',
    backgroundColor: '#F8F8F9',
    width: ms(60),
    height: ms(40),
    marginRight: ms(5),
  },
  otpCellFocused: {
    borderColor: 'gray',
    backgroundColor: '#F8F8F9',
  },
  otpText: {
    fontSize: ms(18),
    color: theme.light.colors.text,
    fontFamily: FontFamily.BrandonGrotesque_regular,
  },
});
