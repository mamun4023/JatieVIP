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
  recentContiner: {
    flexDirection: 'row',
    padding: ms(4),
  },
  recentIcon: {
    marginLeft: 5,
    color: 'gray',
  },
  feedContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  thumbnailContainer: {
    width: '100%',
    height: vs(180),
  },
  thumbnailImage: {
    width: '100%',
    height: vs(180),
    padding: ms(80),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  formContainer: {
    borderRadius: 5,
    padding: ms(20),
    width: '100%',
  },
  submitButton: {
    marginTop: vs(20),
  },
  // Admin

  editContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
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
  btnTxt: {
    fontFamily: FontFamily.BrandonGrotesque_bold,
    fontSize: 18,
  },
});
