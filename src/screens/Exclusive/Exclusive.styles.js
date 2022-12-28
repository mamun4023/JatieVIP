import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerImageContainer: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 75,
  },
  iconContiner: {
    flexDirection: 'row',
  },
  icon: {
    margin: 10,
  },
  recentContiner: {
    flexDirection: 'row',
    padding: 5,
  },
  recentIcon : {
    marginLeft: 5,
    color: 'gray'
  },
  feedContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  thumbnailContainer:{
    width: '100%',
    height: 200,
  },
  thumbnailImage: {
    padding: 100,
    borderBottomLeftRadius : 10,
    borderBottomRightRadius : 10,
  },
  formContainer: {
    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  submitButton: {
    marginTop: 20,
  },
});
