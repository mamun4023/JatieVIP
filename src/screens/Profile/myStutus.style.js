import { StyleSheet } from 'react-native';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';

export const styles = StyleSheet.create({

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
  Image : {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 75
  },
  postText : {
    fontFamily : FontFamily.BrandonGrotesque_medium,
    textAlign : 'justify'
  },
  icon : {
    margin : 5
  },
  footer : {
    flexDirection : "row",
    justifyContent : 'space-between',
    backgroundColor : '#eee',
    padding : 8,
    borderRadius : 10
  }
});
