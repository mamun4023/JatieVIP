import React, { useState } from 'react';
import { TextStyles, theme } from '@/theme';
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
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {
  faCircleUp,
  faCircleDown,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  AppSwitch,
  HorizontalLine,
  Icon,
  Card,
  CardHeader,
} from '@/components';
import { ms, vs } from 'react-native-size-matters';
import { NAVIGATION } from '@/constants/navigation';
import { strings } from '@/localization';

export default function Notification({ navigation }) {
  const [read, setRead] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <Image
            source={{
              uri: 'data:image/jpeg;base64,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',
            }}
            style={{
              height: ms(50),
              width: ms(50),
              borderRadius: 100,
            }}
          />
          <Text
            style={[TextStyles.header, { color: theme.light.colors.black }]}
          >
            {' '}
            {strings.profile.notificatins}{' '}
          </Text>
        </View>
        <View style={styles.right}>
          <Icon
            icon={faSearch}
            color={theme.light.colors.black}
            size={ms(20)}
            onPress={() => navigation.navigate(NAVIGATION.search)}
          />
          <Icon
            icon={faBell}
            color={theme.light.colors.primary}
            size={ms(20)}
            style={{ marginLeft: ms(10) }}
          />
        </View>
        <View style={styles.switchContainer}>
          <Text style={styles.togglerTxt}> {strings.profile.unreadOnly} </Text>
          <AppSwitch
            value={read}
            onChange={() => setRead(prev => !prev)}
            style={{
              transform: [{ scaleX: ms(1, 0.01) }, { scaleY: ms(1, 0.01) }],
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: ms(10) }} />
      <HorizontalLine />
      <View style={styles.notifyContainer}>
        <FlatList
          data={Data}
          key={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.notificationCard}>
              <CardHeader
                fullName={item.fullName}
                userName={item.userName}
                profilePic={item.profilePic}
                time={item.time}
              />
              <View style={styles.activity}>
                {item.status == `${strings.profile.upvoted}` ? (
                  <Icon
                    icon={faCircleUp}
                    size={ms(15)}
                    color={theme.light.colors.success}
                    style={{ marginLeft: ms(15) }}
                  />
                ) : null}
                {item.status == `${strings.profile.downVoted}` ? (
                  <Icon
                    icon={faCircleDown}
                    size={ms(15)}
                    color={theme.light.colors.error}
                    style={{ marginLeft: ms(15) }}
                  />
                ) : null}
                {item.status == `${strings.profile.commented}` ? (
                  <Icon
                    icon={faMessage}
                    size={ms(15)}
                    color={theme.light.colors.info}
                    style={{ marginLeft: ms(15) }}
                  />
                ) : null}
                <View style={styles.textContainer}>
                  <Text style={styles.statsTxt}> {item.status} </Text>
                  <Text style={styles.reactOnTxt}>
                    {' '}
                    {`${item.reactOn}'s post`}{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: ms(10),
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
  notifyContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  notificationCard: {
    backgroundColor: theme.light.colors.white,
    marginTop: vs(2),
  },
  togglerTxt: {
    fontFamily: FontFamily.Recoleta_medium,
    fontSize: ms(12, 0.3),
  },
  activity: {
    flexDirection: 'row',
    // padding : ms(10),
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsTxt: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
    fontSize: ms(15, 0.3),
    paddingLeft: ms(5),
  },
  reactOnTxt: {
    color: theme.light.colors.info,
    textDecorationLine: 'underline',
    fontFamily: FontFamily.BrandonGrotesque_medium,
    fontSize: ms(15, 0.3),
  },
});

const Data = [
  {
    id: 1,
    fullName: 'Adam Voigt',
    userName: '@adam',
    profilePic:
      'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    status: 'Upvoted',
    reactOn: "Liza Su's",
    time: 10,
  },
  {
    id: 2,
    fullName: 'Adam Voigt',
    userName: '@adam',
    profilePic:
      'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    status: 'Downvoted',
    reactOn: 'Liza Su',
    time: 20,
  },
  {
    id: 3,
    fullName: 'Adam Voigt',
    userName: '@adam',
    profilePic:
      'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    status: 'Commented',
    reactOn: 'Adam Trin',
    time: 50,
  },
  {
    id: 4,
    fullName: 'Adam Voigt',
    userName: '@adam',
    profilePic:
      'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    status: 'Commented',
    reactOn: 'Peter Griffin',
    time: 5,
  },
  {
    id: 5,
    fullName: 'Adam Voigt',
    userName: '@adam',
    profilePic:
      'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    status: 'Commented',
    reactOn: 'Emma Stone',
    time: 33,
  },
];
