import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Card, CardBody, CardHeader, TopBackButton } from '@/components';
import { strings } from '@/localization';
import { TextStyles, theme } from '@/theme';
import { faClock, faPen } from '@fortawesome/free-solid-svg-icons';
// import { faPen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { ms } from 'react-native-size-matters';
import Moment from 'moment';
import { FontFamily } from '@/theme/Fonts';

export default function SchedulePost({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TopBackButton
          onPress={() => navigation.goBack()}
          style={{ padding: ms(5), paddingBottom: ms(10) }}
        />
        <Text style={styles.headerTxt}>{strings.home.scheduledPost} </Text>
      </View>
      <View style={styles.postContainer}>
        <View style={{ marginTop: ms(10) }}>
          <Card>
            <CardHeader
              fullName={Data.name}
              userName={Data.userName}
              profilePic={Data.profilePic}
              isOfficial={true}
            />
            <CardBody text={Data.txt} />
            <View style={styles.cardFooter}>
              <View style={styles.timeBox}>
                <FontAwesomeIcon
                  icon={faClock}
                  size={ms(13)}
                  color={theme.light.colors.white}
                />
                <Text style={styles.timeTxt}>
                  {' '}
                  {Moment.utc().format('hh:mm A  MMM D, YYYY')}{' '}
                </Text>
              </View>
              <TouchableOpacity style={styles.penIcon}>
                <FontAwesomeIcon
                  icon={faPen}
                  size={ms(13)}
                  color={theme.light.colors.black}
                />
              </TouchableOpacity>
            </View>
          </Card>
        </View>
        <View style={{ marginTop: ms(10) }}>
          <Card>
            <ImageBackground
              source={{
                uri: 'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/zabeel.jpg',
              }}
              style={styles.bgImage}
            />
            <TouchableOpacity
              style={[styles.floaterContainer, { right: ms(8) }]}
            >
              <Text style={styles.floaterTxt}>
                {' '}
                {strings.home.sponsordPost}{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.floaterContainer, { bottom: ms(30) }]}
            >
              <Text style={styles.floaterTxt}>{strings.home.learMore} </Text>
            </TouchableOpacity>

            <View style={styles.cardFooter}>
              <View style={styles.timeBox}>
                <FontAwesomeIcon
                  icon={faClock}
                  size={ms(13)}
                  color={theme.light.colors.white}
                />
                <Text style={styles.timeTxt}>
                  {' '}
                  {Moment.utc().format('hh:mm A  MMM D, YYYY')}{' '}
                </Text>
              </View>
              <TouchableOpacity style={styles.penIcon}>
                <FontAwesomeIcon
                  icon={faPen}
                  size={ms(13)}
                  color={theme.light.colors.black}
                />
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  headerContainer: {
    padding: ms(10),
  },
  headerTxt: [
    TextStyles.header,
    {
      color: theme.light.colors.black,
      paddingLeft: ms(5),
    },
  ],
  postContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight, //
    padding: ms(9),
  },
  cardFooter: {
    backgroundColor: theme.light.colors.infoBgLight,
    padding: ms(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.light.colors.info,
    borderRadius: 10,
    padding: ms(3),
    paddingLeft: ms(8),
    paddingRight: ms(8),
  },
  penIcon: {
    marginRight: ms(9),
  },
  timeTxt: {
    color: theme.light.colors.white,
    fontFamily: FontFamily.Recoleta_semibold,
    paddingLeft: ms(2),
    fontSize: ms(13, 0.3),
  },
  bgImage: {
    height: 200,
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  floaterContainer: {
    position: 'absolute',
    backgroundColor: theme.light.colors.black,
    padding: ms(5),
    borderRadius: 10,
    margin: ms(10),
  },
  floaterTxt: {
    fontFamily: FontFamily.BrandonGrotesque_bold,
    fontSize: ms(14, 0.3),
    color: theme.light.colors.white,
  },
});

const Data = {
  name: 'Jatie VIP',
  userName: '@JatieVIP',
  profilePic:
    'https://res.cloudinary.com/hawktech-cloud/image/upload/v1674712476/d24dae39-1a64-47d5-af65-e14b5a1c533c_tmcsua.png',
  txt: 'We hope you love the products we recommend! All of them were independently selected by our editors. Some may have been sent as samples, but all opinions and reviews are our own. Just so you know.',
};
