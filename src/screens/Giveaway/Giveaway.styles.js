import { theme } from '@/theme';
import { StyleSheet } from 'react-native';
import { FontFamily } from '@/theme/Fonts';
import { ms, vs } from 'react-native-size-matters';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: { color: theme.light.colors.white },
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: ms(10),
  },
  headerImageContainer: {
    flexDirection: 'row',
  },
  headerImage: {
    width: ms(50),
    height: vs(50),
    borderWidth: 2,
    borderRadius: 75,
  },
  iconContiner: {
    flexDirection: 'row',
  },
  icon: {
    margin: ms(10),
  },

  bellAlert: {
    height: ms(10),
    width: ms(10),
    backgroundColor: { color: theme.light.colors.error },
    position: 'absolute',
    borderRadius: 10,
    left: ms(60),
    top: ms(8),
  },

  feedContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },

  //Admin

  adminBtn: {
    marginTop: vs(10),
    borderWidth: 0,
    borderRadius: 10,
    padding: ms(8),
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    position: 'absolute',
    top: '90%',
    left: '60%',
  },
  adminBtnTxt: {
    fontFamily: FontFamily.BrandonGrotesque_bold,
    fontSize: 18,
  },
});
