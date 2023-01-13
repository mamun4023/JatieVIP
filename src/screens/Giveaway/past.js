import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { theme } from '@/theme';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Card, CardBody, Icon } from '@/components';
import { ms, vs } from 'react-native-size-matters';
import { FontFamily } from '@/theme/Fonts';
import { strings } from '@/localization';
import { NAVIGATION } from '@/constants';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Past({ navigation }) {
  const [open, setOpen] = useState(false);
  return (
    <SafeAreaView>
      <FlatList
        data={Data}
        key={props => props.id}
        renderItem={({ item }) => (
          <View style={{ margin: ms(10) }}>
            <Card>
              <View>
                <Text style={styles.title}>{strings.giveaway.title} </Text>
              </View>
              <CardBody text={item.Desc} />

              {/* winners */}
              {item.winner.length == 1 ? (
                <View>
                  <Text style={styles.winners}>{strings.giveaway.winner} </Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.winners}>{strings.giveaway.winners}</Text>
                </View>
              )}

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
              {/* endWinners */}

              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnailImage}
                  source={{
                    uri: item.photo,
                  }}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(NAVIGATION.giveawayPastDetails)
                  }
                  style={styles.btn}
                >
                  <Text
                    style={[styles.btnTxt, { color: theme.light.colors.white }]}
                  >
                    {strings.giveaway.learnMore}
                  </Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const Data = [
  {
    id: 1,
    title: 'Summer 2023 Giveaway',
    EndsIn: '12 Day: 13 Hrs: 12 Sec',
    Desc: 'Thanks for joining our app everyone! To show our appreciation, we are going to raffle away a brand new iPhone 13!',
    photo:
      'https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80',
    winner: [
      {
        id: 1,
        name: 'Mayke Sehurs',
        userName: '@mayke',
        image:
          'https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?b=1&k=20&m=1179420343&s=612x612&w=0&h=c9Z3DyUg-YvgOQnL_ykTIgVTWXjF-GNo4FUQ7i5fyyk=',
      },
    ],
  },
  {
    id: 2,
    title: 'Spring 2023 Giveaway',
    EndsIn: '12 Day: 13 Hrs: 12 Sec',
    Desc: 'Thanks for joining our app everyone! To show our appreciation, we are going to raffle away a brand new iPhone 13!',
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
    ],
  },
  {
    id: 3,
    title: 'Winter 2023 Giveaway',
    EndsIn: '12 Day: 13 Hrs: 12 Sec',
    Desc: 'Thanks for joining our app everyone! To show our appreciation, we are going to raffle away a brand new iPhone 13!',
    photo:
      'https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/03/Mac-Studio.png',
    winner: [
      {
        id: 1,
        name: 'Otmar Dolezal',
        userName: '@otmar',
        image:
          'https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=2000',
      },
    ],
  },
];

const styles = StyleSheet.create({
  //Card some common thing from active.js
  title: {
    margin: ms(15),
    fontFamily: FontFamily.Recoleta_bold,
    textAlign: 'justify',
    color: theme.light.colors.black,
    fontSize: ms(14, 0.3),
  },
  thumbnailImage: {
    width: '100%',
    height: vs(180),
    padding: ms(80),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  EndTimeTxt: {
    color: theme.light.colors.black,
  },
  btn: {
    borderRadius: 10,
    padding: ms(8),
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    position: 'absolute',
    top: '70%',
    left: '5%',
    backgroundColor: theme.light.colors.primary,
    width: ms(130),
  },
  btnTxt: {
    fontFamily: FontFamily.BrandonGrotesque_bold,
    fontSize: ms(14, 0.3),
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
});
