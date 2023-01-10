import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Button, Card, CardBody, Icon } from '@/components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { ms, vs } from 'react-native-size-matters';
import { strings } from '@/localization';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PostDetails({ navigation }) {
  const [active, setActive] = useState(true);
  return (
    <SafeAreaView style={styles.contianer}>
      <View style={styles.header}>
        <Icon
          icon={faArrowLeft}
          size={ms(20)}
          onPress={() => navigation.goBack()}
          style={[styles.headerIcon]}
        />
        <Text style={[styles.headerText, TextStyles.header]}>
          {strings.giveaway.title}
        </Text>
      </View>
      <View style={styles.postContainer}>
        <ScrollView>
          <View style={styles.feedContainer}>
            <Card>
              <View>
                <Text style={styles.title}>{strings.giveaway.title} </Text>
              </View>
              <View>
                <Text style={styles.timeLable}>
                  {strings.giveaway.expires}
                  <Text style={[styles.EndTimeTxt]}> {item.EndsIn}</Text>
                </Text>
              </View>
              <CardBody text={item.Desc} />
              {link(item.link)}
              <CardBody text={item.MoreDesc} />
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnailImage}
                  source={{
                    uri: item.photo,
                  }}
                />

                <View>
                  <View style={styles.PostButtonContainer}>
                    <TouchableOpacity onPress={setActive == false}>
                      <Button
                        title={strings.giveaway.joinThisGiveaway}
                        style={styles.joinBtn}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.termsAndConsition}>
                    {termsAndConsition(
                      strings.giveaway.byJoining,
                      strings.giveaway.termsAndConsition
                    )}
                  </View>
                </View>
                <View style={styles.PostButtonContainer}>
                  <TouchableOpacity>
                    <Button
                      title={strings.giveaway.withdrawFromThisGiveaway}
                      style={styles.withdrawBtn}
                      textStyle={{
                        color: theme.light.colors.primary,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <View style={styles.PostButtonContainer}>
                    <TouchableOpacity>
                      <Button
                        title={strings.giveaway.joinThisGiveaway}
                        style={styles.outOfUS}
                        textStyle={{
                          color: theme.light.colors.background,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.termsAndConsition}>
                    {termsAndConsition(strings.giveaway.onlyUS)}
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const termsAndConsition = (text, link) => {
  return (
    <View>
      <Text
        style={[
          TextStyles.text,
          {
            fontFamily: FontFamily.BrandonGrotesque_regular,
            textAlign: 'justify',
            color: theme.light.colors.black,
          },
        ]}
      >
        {text}
        <Text
          style={{
            color: theme.light.colors.hyperlink,
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            Linking.openURL(link);
          }}
        >
          {link}
        </Text>
      </Text>
    </View>
  );
};

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
    'https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80',
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
  PostButtonContainer: {
    margin: ms(10),
  },
  termsAndConsition: {
    paddingLeft: ms(20),
    paddingRight: ms(20),
    paddingBottom: ms(20),
  },

  //Card some common thing from active.js
  title: {
    margin: ms(10),
    fontFamily: FontFamily.Recoleta_bold,
    textAlign: 'justify',
    color: theme.light.colors.black,
    fontSize: ms(16, 0.3),
  },
  timeLable: {
    fontFamily: FontFamily.Recoleta_medium,
    textAlign: 'justify',
    backgroundColor: theme.light.colors.primaryBg,
    borderRadius: 20,
    padding: ms(8),
    fontSize: ms(11, 0.3),
    margin: ms(10),
    paddingLeft: ms(10),
  },
  thumbnailImage: {
    width: '100%',
    height: vs(180),
    padding: ms(80),
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
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

  joinBtn: {
    width: '100%',
    backgroundColor: theme.light.colors.primary,
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    elevation: 2,
  },
  withdrawBtn: {
    width: '100%',
    backgroundColor: theme.light.colors.white,
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    elevation: 2,
  },
  outOfUS: {
    width: '100%',
    backgroundColor: theme.light.colors.primaryBg,
    borderWidth: 2,
    borderColor: theme.light.colors.primaryBg,
    // elevation: 2,
  },
});
