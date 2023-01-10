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
import { HorizontalLine, Icon } from '@/components';
import {
  faArrowLeft,
  faCircle,
  faImage,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { NAVIGATION } from '@/constants';
import { ms, vs } from 'react-native-size-matters';
import { strings } from '@/localization';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function AdminExclusivePost({ navigation }) {
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
          {strings.exclusive.adminPostHeader}
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
          onPress={() => navigation.navigate(NAVIGATION.adminPostOption)}
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
    </SafeAreaView>
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
                <View style={styles.minus}>
                  <Text style={[styles.minusTxt]}>
                    {strings.giveaway.minus}
                  </Text>
                </View>
                <View style={styles.videoPlayContainer}>
                  <FontAwesomeIcon
                    icon={faCircle}
                    size={ms(30)}
                    style={[styles.videoPlay]}
                  />
                  <FontAwesomeIcon
                    icon={faVideoCamera}
                    size={ms(15)}
                    style={[styles.Play]}
                  />
                </View>
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
                <View style={styles.minus}>
                  <Text style={[styles.minusTxt]}>
                    {strings.giveaway.minus}
                  </Text>
                </View>
              </View>
            );
          }
        })}
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
        'https://www.dharmann.com/wp-content/uploads/2022/06/YT-Thumbnail-566-Husband-Pranks-Wife-Goes-Too-Far-Option-1E.jpg',
    },
    {
      vID: 2,
      videoLink:
        'https://www.dharmann.com/wp-content/uploads/2022/06/YT-Thumbnail-566-Husband-Pranks-Wife-Goes-Too-Far-Option-1E.jpg',
    },
  ],
  photo: [
    {
      pID: 1,
      photoLink:
        'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    },
    {
      pID: 2,
      photoLink:
        'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    },
    {
      pID: 3,
      photoLink:
        'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    },
    {
      pID: 4,
      photoLink:
        'https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=',
    },
  ],
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
    height: vs(300),
    padding: ms(8),
    borderWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  TextField: {
    backgroundColor: theme.light.colors.white,
  },
  InputTextBoxDEsc: {
    height: '100%',
    textAlignVertical: 'top',
  },

  //BottomLAyout of file contant

  BottomVideoContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: vs(20),
    paddingTop: ms(10),
    borderTopWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  videoContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginLeft: ms(10),
    marginRight: ms(15),
    height: ms(110),
    alignItems: 'center',
  },
  thumbnail: {
    flex: 1,
    width: ms(80),
    height: vs(80),
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
    marginLeft: ms(65),
    top: 0,
  },
  minusTxt: {
    fontFamily: FontFamily.Recoleta_bold,
    color: theme.light.colors.primary,
    fontSize: ms(23, 0.3),
    textAlign: 'center',
  },
  //Video Icon

  videoPlayContainer: {
    position: 'absolute',
    marginLeft: '35%',
    marginTop: '20%',
  },
  videoPlay: {
    color: theme.light.colors.primary,
  },
  Play: {
    position: 'absolute',
    color: theme.light.colors.background,
    marginLeft: ms(8),
    marginTop: ms(8),
  },
});
