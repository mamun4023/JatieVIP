import { theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { StyleSheet } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: ms(20),
  },
  mainView: {
    alignItems: 'center',
  },
  submitButton: {
    marginTop: vs(10),
    width: '50%',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.light.colors.userBackgroundColor,
    borderRadius: 100,
    height: vs(130),
    width: ms(140),
    marginTop: vs(50),
  },
});
