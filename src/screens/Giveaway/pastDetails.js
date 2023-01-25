import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  Card,
  CardBody,
  HorizontalLine,
  Icon,
  ModalDown,
  ModalList,
} from '@/components';
import {
  faArrowLeft,
  faEllipsis,
  faFlag,
  faPen,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { ms, vs } from 'react-native-size-matters';
import { strings } from '@/localization';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { NAVIGATION } from '@/constants';

export default function PastDetails({ navigation }) {
  const userType = useSelector(state => state.userType);
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView style={styles.contianer}>
      <View style={styles.header}>
        <Icon
          icon={faArrowLeft}
          size={ms(20)}
          onPress={() => navigation.goBack()}
          style={[styles.headerIcon]}
        />
        <View style={styles.adminoOption}>
          <Text style={[styles.headerText, TextStyles.header]}>
            {strings.giveaway.title}
          </Text>
          {/* Admin */}

          {userType.user == `${strings.userType.admin}` && (
            <Icon
              icon={faEllipsis}
              size={ms(15)}
              onPress={() => setOpen(true)}
              style={[
                styles.icon,
                {
                  color: theme.light.colors.black,
                },
              ]}
            />
          )}
        </View>
      </View>
      <View style={styles.postContainer}>
        <ScrollView>
          <View style={styles.feedContainer}>
            <Card>
              <View>
                <Text style={styles.title}>{strings.giveaway.title} </Text>
              </View>
              <CardBody text={item.Desc} />
              {link(item.link)}
              <CardBody text={item.MoreDesc} />
              <View>
                <Text style={styles.winners}>{strings.giveaway.winners} </Text>
              </View>
              {/* winners */}
              {item.winner.map(item => {
                if (item == null) {
                  return;
                } else {
                  return (
                    <View style={styles.listContainer} key={item.id}>
                      <View style={styles.leftContainer}>
                        <Image
                          source={{ uri: item.image }}
                          style={styles.profileImage}
                        />
                        <View style={styles.nameContainer}>
                          <Text style={styles.nameTxt}> {item.name} </Text>
                          <Text> {item.userName} </Text>
                        </View>
                      </View>
                      <View>
                        <Icon
                          icon={faEllipsis}
                          size={ms(15)}
                          color={theme.light.colors.info}
                          onPress={() => setOpen(true)}
                        />
                      </View>
                    </View>
                  );
                }
              })}
              {/* Admin */}
              {userType.user == `${strings.userType.admin}` && (
                <View style={styles.PostButtonContainer}>
                  <TouchableOpacity>
                    <Button
                      onPress={() =>
                        navigation.navigate(NAVIGATION.seeAllParticipants)
                      }
                      title={strings.giveaway.seeAllParticipants}
                      style={styles.withdrawBtn}
                      textStyle={{
                        color: theme.light.colors.primary,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )}

              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnailImage}
                  source={{
                    uri: item.photo,
                  }}
                />
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>

      {/* Admin */}

      <ModalDown open={open} setOpen={setOpen}>
        <ModalList
          title={strings.giveaway.editGiveaway}
          icon={faPen}
          iconBg={theme.light.colors.infoBgLight}
          iconColor={theme.light.colors.info}
        />
        <HorizontalLine
          color={theme.light.colors.infoBgLight}
          paddingTop={15}
          paddingBottom={8}
        />
        <ModalList
          title={strings.giveaway.endNow}
          icon={faFlag}
          iconBg={theme.light.colors.infoBgLight}
          iconColor={theme.light.colors.secondary}
        />
        <ModalList
          title={strings.giveaway.removeThisGiveaway}
          icon={faTrash}
          iconBg={theme.light.colors.infoBgLight}
          iconColor={theme.light.colors.secondary}
        />
      </ModalDown>
    </SafeAreaView>
  );
}

const link = link => {
  return (
    <Text
      style={{
        color: theme.light.colors.hyperlink,
        paddingLeft: ms(15),
        fontFamily: FontFamily.BrandonGrotesque_regular,
        textAlign: 'justify',
        fontSize: ms(16),
      }}
      onPress={() => {
        Linking.openURL(link);
      }}
    >
      {link}
    </Text>
  );
};

const item = {
  id: 1,
  title: 'Summer 2023 Giveaway',
  EndsIn: '12 Day: 13 Hrs: 12 Sec',
  Desc: 'Thanks for joining our app everyone! To show our appreciation, we are going to raffle away a brand new iPhone 13!',
  link: 'https://www.youtube.com/watch?v=3d2vRlwNLIlk',
  MoreDesc:
    'Along with the iPhone 6 and Apple Watch announcements, the GM version of iOS 8 was released to developers. As is typical with all major interations of Apples mobile operating system, there were new wallpapers released. The GM release is currently only available for reistered developers, which means the common users are left waiting for iOS 8 to launch publicaly before takling advantage of the images.',
  photo:
    'https://www.apple.com/v/macbook-pro-14-and-16/c/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png',
  winner: [
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
  ],
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  header: {
    padding: ms(15),
    backgroundColor: theme.light.colors.white,
  },
  headerIcon: {
    color: theme.light.colors.info,
  },
  headerText: {
    marginTop: vs(10),
    color: theme.light.colors.black,
  },
  postContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  feedContainer: {
    margin: ms(10),
  },

  //Card some common thing from active.js
  title: {
    margin: ms(10),
    fontFamily: FontFamily.Recoleta_bold,
    textAlign: 'justify',
    color: theme.light.colors.black,
    fontSize: ms(16, 0.3),
  },
  thumbnailImage: {
    width: '100%',
    height: vs(180),
    padding: ms(80),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  //Common thing end
  //winners
  winners: {
    padding: ms(15),
    fontFamily: FontFamily.Recoleta_bold,
    textAlign: 'justify',
    color: theme.light.colors.primary,
    fontSize: ms(14, 0.3),
    borderTopWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  listContainer: {
    padding: ms(2),
    paddingLeft: ms(12),
    paddingRight: ms(20),
    paddingBottom: ms(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: ms(2),
    alignItems: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  profileImage: {
    height: ms(40),
    width: ms(40),
    borderRadius: 100,
    borderWidth: 1,
    borderColor: theme.light.colors.info,
  },
  nameContainer: {
    paddingLeft: ms(10),
  },
  nameTxt: {
    fontFamily: FontFamily.Recoleta_bold,
    fontSize: ms(15, 0.3),
    color: theme.light.colors.black,
  },

  // Admin

  PostButtonContainer: {
    margin: ms(10),
  },
  withdrawBtn: {
    width: '100%',
    backgroundColor: theme.light.colors.white,
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    elevation: 2,
  },
  adminoOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: ms(20),
  },
});
