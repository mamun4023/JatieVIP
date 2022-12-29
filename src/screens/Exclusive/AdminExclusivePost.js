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
export default function AdminExclusivePost({ navigation }) {
  return (
    <View style={styles.contianer}>
      <View style={styles.header}>
        <Icon
          icon={faArrowLeft}
          size={20}
          onPress={() => navigation.goBack()}
          style={[styles.headerIcon]}
        />
        <Text style={[styles.headerText, TextStyles.header]}>
          Post an Exclusive Content{' '}
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
                  color: 'black',
                },
              ]}
            >
              Title
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
                    color: 'black',
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
                    color: 'black',
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
          <Icon icon={faImage} size={20} style={styles.icon} />
          <Icon icon={faVideoCamera} size={20} style={styles.icon} />
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
                  color: 'white',
                },
              ]}
            >
              Next
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
    padding: 15,
  },
  headerText: {
    marginTop: 10,
    color: theme.light.colors.black,
  },
  postContainer: {
    flex: 1,
  },
  title: {
    padding: 10,
  },
  InputTextBox: {
    paddingLeft: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.light.colors.infoBgLight,
    backgroundColor: theme.light.colors.inputFiled,
  },
  TextBox: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  TextBoxDEsc: {
    width: '100%',
    height: 300,
    padding: 8,
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
    marginBottom: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  videoContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    height: 120,
    alignItems: 'center',
  },
  thumbnail: {
    flex: 1,
    width: 100,
    height: 100,
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
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    borderRightWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  icon: {
    margin: 10,
    color: theme.light.colors.secondary,
  },
  ButtonContainer: {
    margin: 10,
    borderWidth: 0,
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    position: 'relative',
    backgroundColor: theme.light.colors.primary,
    width: 120,
  },
});
