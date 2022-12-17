import { StyleSheet } from 'react-native';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : 'white',
  
  },
  headerContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 10
  },
  headerImageContainer : {
    flexDirection : 'row'
  },
  headerImage : {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 75
  },
  iconContiner: {
    flexDirection : 'row'
  },  
  icon : {
    margin : 10
  },
  bellAlert : {
    height : 10,
    width : 10,
    backgroundColor : 'red',
    position : 'absolute',
    borderRadius : 100,
    left : 100,
    top : 8
  },
  followerContainer: {
    flexDirection : 'row',
    borderRadius : 10,
    justifyContent : 'center'
  },
  follower : [
    TextStyles.label, {
      padding : 8,
      backgroundColor : theme.light.colors.background,
      margin : 5,
      borderRadius : 10
    }
  ],
  statusContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    backgroundColor : 'rgba(211, 167, 8, 0.25)',
    opacity : 0.4,
    padding: 10,
    paddingLeft : 30,
    paddingRight : 30,
    margin : 10,
    borderRadius : 10
  },
  myStatus: {
    backgroundColor : 'transparent',
  },
  statusText : [TextStyles.header,{
      color : theme.light.colors.activeTabIcon
      
    }
  ],

  line : {
    borderBottomColor: theme.light.colors.activeTabIcon,
    borderBottomWidth: 2.5,
  },

  feedContainer : {
    elevation : 8,
    width : '100%',
    height : 100,
    backgroundColor : 'white',
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    padding : 20
  },
  feedIconContainer : {
    backgroundColor : 'rgba(232, 174, 11, 0.3)',
    padding : 10,
    borderRadius : 100,
  },
  feedIcon: {
    color : theme.light.colors.activeTabIcon
  },
  postContainer : {
    flex : 1,
    backgroundColor: 'rgba(232, 174, 11, 0.08)',
  },
  postCard : {
    backgroundColor : 'white',
    margin : 10,
    borderRadius : 10,
    elevation : 5
  },
  postHeader: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    padding : 10
  },
  postText : {
    fontFamily : FontFamily.BrandonGrotesque_medium,
    textAlign : 'justify'
  }
});
