import { theme } from '@/theme';
import { StyleSheet } from 'react-native';
import { FontFamily } from '@/theme/Fonts';
import { ms, vs } from 'react-native-size-matters';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
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
  exclusive: {
    paddingLeft: 7,
  },
  iconContiner: {
    flexDirection: 'row',
  },
  icon: {
    margin: ms(10),
  },
  recentContiner: {
    padding: ms(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  recent: {
    fontFamily: FontFamily.Recoleta_medium,
    fontSize: ms(12, 0.3),
  },
  recentIcon: {
    marginLeft: 3,
    color: theme.light.colors.secondary,
  },
  feedContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  fullNameTxt: {
    fontFamily: FontFamily.BrandonGrotesque_bold,
    fontSize: ms(18, 0.3),
    color: theme.light.colors.black,
    margin: 10,
  },
  cardRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: ms(10),
    paddingRight: ms(10),
  },
  timeTxt: {
    fontFamily: FontFamily.Recoleta_regular,
    fontSize: ms(12, 0.3),
  },
  thumbnailContainer: {
    width: '100%',
    height: vs(180),
  },
  videoPlayContainer: {
    position: 'absolute',
    marginLeft: '43%',
    marginTop: '22%',
  },
  videoPlay: {
    color: theme.light.colors.primary,
  },
  Play: {
    position: 'absolute',
    color: theme.light.colors.background,
    marginLeft: ms(18),
    marginTop: ms(18),
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
    borderRadius: 10,
    padding: ms(11),
    alignItems: 'center',
    borderColor: theme.light.colors.primary,
    position: 'absolute',
    top: '91%',
    left: '50%',
    marginLeft: ms(35),
  },
  btnTxt: {
    fontFamily: FontFamily.BrandonGrotesque_bold,
    fontSize: ms(15, 0.3),
  },

  //vip only
  vipOnlyContainer: {
    backgroundColor: theme.light.colors.primary,
    width: 100,
    height: 25,
    borderRadius: 6,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    top: '42%',
    left: '38%',

    // marginLeft: '43%',
    // marginTop: '22%',
  },
  vipOnlyText: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
    color: theme.light.colors.background,
    paddingLeft: 10,
  },
  lock: {
    color: theme.light.colors.background,
  },
});
