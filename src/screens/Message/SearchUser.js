import React, { useState } from 'react';
import { theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
  faSearch,
  faEllipsis,
  faFaceMehBlank,
  faUser,
  faBirthdayCake,
  faCrown,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { HorizontalLine, Icon, TextField, TopBackButton } from '@/components';
import { ms, vs } from 'react-native-size-matters';
import { NAVIGATION } from '@/constants/navigation';
import { strings } from '@/localization';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSelector } from 'react-redux';

export default function SearchUser({ navigation }) {
  const [searchListOpen, setSearchListOpen] = useState(false);
  const userType = useSelector(state => state.userType);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <TopBackButton onPress={() => navigation.goBack()} />
        </View>
        <View style={styles.right}>
          <Icon
            icon={faSearch}
            color={theme.light.colors.primary}
            size={ms(20)}
            style={{ marginRight: ms(15) }}
          />
          <Icon
            icon={faBell}
            color={theme.light.colors.black}
            size={ms(20)}
            // onPress={() => navigation.navigate(NAVIGATION.notification)}
            style={{ marginRight: ms(10) }}
          />
        </View>
      </View>
      <View style={styles.searchBox}>
        <View>
          <TextField
            style={{
              paddingLeft: ms(30),
              paddingRight: ms(80),
              paddingBottom: ms(10),
              backgroundColor: theme.light.colors.white,
            }}
            placeholder={strings.message.typeUser}
            onFocus={() => setSearchListOpen(true)}
          />
          <View style={styles.userIcon}>
            <FontAwesomeIcon icon={faUser} size={ms(13)} />
          </View>
        </View>
        <View style={styles.moreIcon}>
          <Icon icon={faEllipsis} />
        </View>
      </View>
      <HorizontalLine />

      {!searchListOpen && (
        <View style={styles.searchBody}>
          <FontAwesomeIcon
            icon={faFaceMehBlank}
            size={ms(44)}
            color={theme.light.colors.primary}
          />
          <Text
            style={[styles.searchTxt, { fontSize: ms(18), marginTop: ms(10) }]}
          >
            {' '}
            {strings.message.emptyTxt}
          </Text>
        </View>
      )}

      {searchListOpen && (
        <View style={styles.searchList}>
          {/* <Text style={styles.searchTxt}> {strings.profile.searchResult}</Text> */}
          <View>
            {userType.user == `${strings.userType.admin}` && (
              <View>
                {groupMessage(
                  faUserGroup,
                  strings.message.toEveryOne,
                  navigation
                )}
                {groupMessage(faCrown, strings.message.toVipOnly, navigation)}
                {groupMessage(
                  faUser,
                  strings.message.toFreeMemberOnly,
                  navigation
                )}
                {groupMessage(
                  faBirthdayCake,
                  strings.message.birthDaysToday,
                  navigation
                )}
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderColor: theme.light.colors.infoBgLight,
                    margin: ms(10),
                  }}
                />
              </View>
            )}

            <FlatList
              data={Data}
              key={props => props.id}
              initialNumToRender={10}
              // contentContainerStyle={{ paddingBottom: ms(100) }}
              renderItem={({ item }) => {
                return (
                  <View style={styles.listContainer}>
                    <TouchableOpacity
                      style={styles.list}
                      // onPress = {()=> navigation.navigate(NAVIGATION.userProfile)}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={styles.profileImage}
                      />
                      <View style={styles.nameContainer}>
                        <Text style={styles.nameTxt}> {item.name} </Text>
                        <Text style={styles.userNameTxt}>
                          {' '}
                          {item.userName}{' '}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

// group message for admin

const groupMessage = (icon, name, navigation) => {
  return (
    <View style={styles.listContainer}>
      <TouchableOpacity
        style={styles.list}
        onPress={() =>
          navigation.navigate(NAVIGATION.adminGroupChat, {
            paramName: name,
            paramIcon: icon,
          })
        }
      >
        <View style={styles.iconContainer}>
          <Icon icon={icon} size={ms(20)} style={styles.iconDesign} />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.nameTxt}> {name}</Text>
        </View>

        {name == strings.message.birthDaysToday ? (
          <View style={styles.bdayUsersContainer}>
            <Text style={styles.bdayUsersText}>
              {strings.message.birthdayUsers}
            </Text>
          </View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding : ms(10),
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchContainer: {
    position: 'absolute',
    top: ms(45),
    left: ms(60),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    marginTop: vs(-15),
    marginBottom: vs(-15),
    paddingLeft: ms(10),
    marginRight: ms(5),
  },
  userIcon: {
    position: 'absolute',
    top: ms(28),
    left: ms(9),
  },
  moreIcon: {
    position: 'absolute',
    right: ms(10),
    top: ms(25),
  },
  searchBody: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  searchTxt: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
  },
  searchList: {
    padding: ms(10),
  },
  listHeader: {
    paddingTop: ms(5),
    paddingBottom: ms(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  listContainer: {
    padding: ms(2),
    paddingLeft: ms(8),
    paddingRight: ms(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: ms(2),
    alignItems: 'center',
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: ms(40),
    width: ms(40),
    borderRadius: 100,
    borderWidth: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTxt: {
    fontFamily: FontFamily.Recoleta_bold,
    fontSize: ms(14, 0.3),
    color: theme.light.colors.black,
  },
  userNameTxt: {
    fontFamily: FontFamily.Recoleta_regular,
    fontSize: ms(14, 0.3),
  },

  //admin

  iconContainer: {
    height: ms(40),
    width: ms(40),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.light.colors.primaryBg,
  },
  iconDesign: {
    color: theme.light.colors.primary,
  },

  // birthday users

  bdayUsersContainer: {
    marginLeft: ms(5),
    backgroundColor: theme.light.colors.infoBgLight,
    borderRadius: 5,
    paddingLeft: ms(10),
    paddingRight: ms(10),
    paddingTop: ms(2),
    paddingBottom: ms(2),
  },
  bdayUsersText: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
    color: theme.light.colors.info,
    fontSize: ms(12, 0.3),
  },
});

const AdminData = [
  {
    id: 1,
    name: strings.message.toEveryOne,
    icon: faUserGroup,
  },
  {
    id: 2,
    name: strings.message.toVipOnly,
    icon: faCrown,
  },
  {
    id: 3,
    name: strings.message.toFreeMemberOnly,
    icon: faUser,
  },
  {
    id: 4,
    name: strings.message.birthDaysToday,
    icon: faBirthdayCake,
  },
];

const Data = [
  {
    id: 1,
    name: 'Harinder Bharwal',
    userName: '@harinder',
    image:
      'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
  },
  {
    id: 2,
    name: 'Peter Taylor',
    userName: '@peter',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAgieDfVf6AX0Ox5zuIgW78Laf6YxS37M1byexctLnQ&s',
  },
  {
    id: 3,
    name: 'Danna Koprivoan',
    userName: '@dana',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 4,
    name: 'Mayke Sehurs',
    userName: '@mayke',
    image:
      'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=',
  },
  {
    id: 5,
    name: 'Anatoly Shcherbatykh',
    userName: '@anatoly',
    image:
      'https://image.shutterstock.com/image-photo/portrait-mature-businessman-wearing-glasses-260nw-738242395.jpg',
  },
  {
    id: 6,
    name: 'Otmar Dolezal',
    userName: '@otmar',
    image:
      'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=2000',
  },
  {
    id: 7,
    name: 'Siri Jakobsson',
    userName: '@mayke',
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
  },
  {
    id: 8,
    name: 'Bansilal Brata ',
    userName: '@brata',
    image:
      'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
  },
  {
    id: 9,
    name: 'Harinder Bharwal',
    userName: '@harinder',
    image:
      'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
  },
  {
    id: 10,
    name: 'Peter Taylor',
    userName: '@peter',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmAgieDfVf6AX0Ox5zuIgW78Laf6YxS37M1byexctLnQ&s',
  },
  {
    id: 11,
    name: 'Danna Koprivoan',
    userName: '@dana',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 12,
    name: 'Mayke Sehurs',
    userName: '@mayke',
    image:
      'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=',
  },
  {
    id: 13,
    name: 'Anatoly Shcherbatykh',
    userName: '@anatoly',
    image:
      'https://image.shutterstock.com/image-photo/portrait-mature-businessman-wearing-glasses-260nw-738242395.jpg',
  },
  {
    id: 14,
    name: 'Otmar Dolezal',
    userName: '@otmar',
    image:
      'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=2000',
  },
  {
    id: 15,
    name: 'Siri Jakobsson',
    userName: '@mayke',
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
  },
  {
    id: 16,
    name: 'Bansilal Brata ',
    userName: '@brata',
    image:
      'https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg',
  },
];
