import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { strings } from '@/localization';
import { ms, vs } from 'react-native-size-matters';
import { CardHeader, TopBackButton } from '@/components';
import { NAVIGATION } from '@/constants';

export default function ManageReports({ navigation }) {
  return (
    <View style={styles.contianer}>
      <TopBackButton
        onPress={() => navigation.goBack()}
        style={{ padding: ms(10) }}
      />
      <Text style={[styles.headerText, TextStyles.header]}>
        {strings.profile.manageReports}{' '}
      </Text>
      <View style={styles.body}>
        <FlatList
          data={Data}
          key={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.list}
              onPress={() => {
                if (item.reportOn == 'post') {
                  navigation.navigate(NAVIGATION.manageReportOnPost);
                }
                if (item.reportOn == 'message') {
                  navigation.navigate(NAVIGATION.manageReportOnMessage);
                }
                if (item.reportOn == 'profile') {
                  navigation.navigate(NAVIGATION.manageReportOnProfile);
                }
              }}
            >
              <CardHeader
                fullName={item.fullName}
                userName={item.userName}
                profilePic={item.profilePic}
                time={item.time}
              />
              <View style={styles.activity}>
                <View style={styles.textContainer}>
                  <Text style={styles.statsTxt}>
                    {' '}
                    {strings.profile.reported}{' '}
                  </Text>
                  <Text style={styles.reactOnTxt}>
                    {' '}
                    {`this ${item.reportOn}`}{' '}
                  </Text>
                </View>
                <View style={styles.reasonContainer}>
                  <Text style={styles.reasonTxt}>
                    {strings.profile.reason}{' '}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  headerIcon: {
    color: theme.light.colors.info,
  },
  headerText: {
    color: theme.light.colors.black,
    paddingLeft: ms(9),
  },
  body: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  list: {
    backgroundColor: theme.light.colors.white,
    marginTop: vs(3),
    borderColor: theme.light.colors.primary,
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
});

const Data = [
  {
    id: 1,
    fullName: 'Susi Voi',
    userName: '@susi',
    profilePic:
      'data:image/jpeg;base64,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',
    reportOn: 'post',
    time: 10,
  },
  {
    id: 2,
    fullName: 'Esbela Mao',
    userName: '@esabela',
    profilePic:
      'data:image/jpeg;base64,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',
    reportOn: 'message',
    time: 50,
  },
  {
    id: 3,
    fullName: 'Fello Voigt',
    userName: '@fello',
    profilePic:
      'data:image/jpeg;base64,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',
    reportOn: 'profile',
    time: 5,
  },
];
