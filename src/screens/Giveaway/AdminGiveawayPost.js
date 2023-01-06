import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Button, HorizontalLine, Icon } from '@/components';
import {
  faArrowLeft,
  faImage,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { NAVIGATION } from '@/constants';
import { ms, vs } from 'react-native-size-matters';
import { strings } from '@/localization';
export default function AdminGiveawayPost({ navigation }) {
  return (
    <View style={styles.contianer}>
      <View style={styles.header}>
        <Icon
          icon={faArrowLeft}
          size={ms(20)}
          onPress={() => navigation.goBack()}
          style={[styles.headerIcon]}
        />
        <Text style={[styles.headerText, TextStyles.header]}>
          {strings.giveaway.createGiveaway}{' '}
        </Text>
      </View>
      <HorizontalLine />
      <ScrollView>
        <View style={styles.postContainer}>
          <View style={styles.title}>
            <Text
              style={[
                TextStyles.text,
                {
                  fontFamily: FontFamily.BrandonGrotesque_bold,
                  textAlign: 'justify',
                  color: theme.light.colors.black,
                },
              ]}
            >
              {strings.exclusive.title}
            </Text>
          </View>
          <View style={styles.TextBox}>
            <TextInput style={styles.InputTextBox} multiline={true}>
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
                {Data.title}
              </Text>
            </TextInput>
          </View>
          <View style={styles.TextBoxDEsc}>
            <TextInput style={styles.InputTextBoxDEsc} multiline={true}>
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
                {Data.desc}
              </Text>
            </TextInput>
          </View>
        </View>
      </ScrollView>

      {BttomContantLayout()}

      <View style={styles.BottomFileContainer}>
        <View style={styles.iconContainer}>
          <Icon icon={faImage} size={ms(20)} style={styles.icon} />
          <Icon icon={faVideoCamera} size={ms(20)} style={styles.icon} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION.adminGiveawayOption)}
        >
          <View style={styles.ButtonContainer}>
            <Text
              style={[
                TextStyles.text,
                {
                  fontFamily: FontFamily.BrandonGrotesque_bold,
                  textAlign: 'justify',
                  color: theme.light.colors.white,
                },
              ]}
            >
              {strings.exclusive.nextButton}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const BttomContantLayout = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.BottomVideoContainer}>
        {File.video.map(item => {
          if (item == null) {
            return;
          } else {
            return (
              <View style={styles.videoContainer} key={item.vID}>
                <Image
                  style={styles.thumbnail}
                  source={{ uri: item.videoLink }}
                />
              </View>
            );
          }
        })}
        {File.photo.map(item => {
          if (item == null) {
            return;
          } else {
            return (
              <View style={styles.videoContainer} key={item.pID}>
                <Image
                  style={styles.thumbnail}
                  source={{ uri: item.photoLink }}
                />
              </View>
            );
          }
        })}

        {/* circle minus */}
        <View style={styles.minus}>
          <Text style={[styles.minusTxt]}>{strings.giveaway.minus}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const File = {
  id: 1,
  video: [
    {
      vID: 1,
      videoLink:
        'https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80',
    },
  ],
  photo: [],
};

const Data = {
  id: 1,
  title: 'Summer 2023 Giveaway',
  desc: 'All of them were independently selected bn our editors. We hope you ❤️ love the products we recommend! All of them were independently selected by our editors. Some may have sent as samples, but all options and reviews are our own. Just so you know. ✊',
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  header: {
    padding: ms(15),
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
  },
  title: {
    padding: ms(10),
  },
  InputTextBox: {
    paddingLeft: ms(10),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.light.colors.infoBgLight,
    backgroundColor: theme.light.colors.inputFiled,
  },
  TextBox: {
    marginLeft: ms(10),
    marginRight: vs(10),
    marginBottom: vs(10),
  },
  TextBoxDEsc: {
    width: '100%',
    height: vs(240),
    padding: ms(8),
    borderWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  TextField: {
    backgroundColor: 'white',
  },
  InputTextBoxDEsc: {
    height: '100%',
    textAlignVertical: 'top',
  },

  //BottomLAyout of file contant

  BottomVideoContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  videoContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginLeft: ms(10),
    marginRight: ms(10),
    height: ms(130),
    alignItems: 'center',
  },
  thumbnail: {
    flex: 1,
    width: ms(100),
    height: vs(100),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.light.colors.infoBgLight,
    backgroundColor: theme.light.colors.inputFiled,
    // resizeMode: 'contain',
  },

  //BottomLayout of file upload

  BottomFileContainer: {
    width: '100%',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: ms(10),
    borderRightWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  icon: {
    margin: ms(10),
    color: theme.light.colors.secondary,
  },
  ButtonContainer: {
    margin: ms(10),
    borderWidth: 0,
    borderRadius: 10,
    padding: ms(8),
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    position: 'relative',
    backgroundColor: theme.light.colors.primary,
    width: ms(120),
  },

  // - circle

  minus: {
    width: ms(30),
    height: ms(30),
    backgroundColor: theme.light.colors.userBackgroundColor,
    borderRadius: 50,
    position: 'absolute',
    marginLeft: ms(90),
  },
  minusTxt: {
    fontFamily: FontFamily.Recoleta_bold,
    color: theme.light.colors.primary,
    fontSize: ms(20, 0.3),
    textAlign: 'center',
    paddingTop: ms(3),
  },
});
