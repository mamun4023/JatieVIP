import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { theme, TextStyles } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { strings } from '@/localization';
import {
  HorizontalLine,
  TopBackButton,
  CardHeader,
  Card,
  CardBody,
  CardFooter,
  CommentCard,
  CommentContainer,
} from '@/components';
import { ms } from 'react-native-size-matters';
import { NAVIGATION } from '@/constants';

export default function ManageReportOnMessage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TopBackButton
        onPress={() => navigation.goBack()}
        style={{ padding: ms(10) }}
      />
      <Text style={[styles.headerText, TextStyles.header]}>
        {strings.profile.manageReports}{' '}
      </Text>
      <HorizontalLine color={theme.light.colors.infoBgLight} />
      <CardHeader
        fullName={Data.fullName}
        userName={Data.userName}
        profilePic={Data.profilePic}
        time={Data.time}
      />
      <View style={styles.activity}>
        <View style={styles.textContainer}>
          <Text style={styles.statsTxt}> {strings.profile.reported} </Text>
          <Text style={styles.reactOnTxt}> {strings.profile.thisPost} </Text>
        </View>
        <View style={styles.reasonContainer}>
          <Text style={styles.reasonTxt}>{strings.profile.reason}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Card>
          <CardHeader
            fullName={Data.fullName}
            userName={Data.userName}
            profilePic={Data.profilePic}
            time={Data.time}
          />
          <CardBody text="Hey guys ! I'm glad to be a member here How's everyone's day going? I just finished a workout and I'm totally wiped out" />
          <CommentContainer
            seeAllPress={() =>
              navigation.navigate(NAVIGATION.manageReportOnPostAllComments)
            }
          >
            <CommentCard
              name="Adam"
              userName="@adam"
              imageUrl="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
              time={10}
              commentTxt="Wonderful"
              likeCount={10}
              // likePress = {}
              disLikeCount={20}
              // disLikePress = {}
            />
          </CommentContainer>
          <CardFooter likeCount={32} disLikeCount={3} commentCount={3} />
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  headerText: {
    color: theme.light.colors.black,
    paddingLeft: ms(9),
  },
  activity: {
    flexDirection: 'row',
    padding: ms(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsTxt: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
    fontSize: ms(15, 0.3),
    // paddingLeft : ms(5)
  },
  reactOnTxt: {
    color: theme.light.colors.info,
    textDecorationLine: 'underline',
    fontFamily: FontFamily.BrandonGrotesque_medium,
    fontSize: ms(15, 0.3),
  },
  reasonContainer: {
    backgroundColor: theme.light.colors.inputFiled,
    borderRadius: 10,
    padding: ms(3),
    marginLeft: ms(10),
  },
  reasonTxt: {
    fontFamily: FontFamily.Recoleta_medium,
    fontSize: ms(10, 0.3),
  },
  body: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
    //IOS
    shadowOffset: { width: -2, height: 4 },
    shadowColor: theme.light.colors.secondary,
    shadowOpacity: 0.2,
    shadowRadius: 3,

    //android
    elevation: 5,
    padding: ms(8),
  },
});

const Data = {
  id: 1,
  fullName: 'Susi Voi',
  userName: '@susi',
  profilePic:
    'data:image/jpeg;base64,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',
  reportOn: 'post',
  time: 10,
};
