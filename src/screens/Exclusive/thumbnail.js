import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import { Icon } from '@/components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { FlatList } from 'react-native-gesture-handler';

export default function Thubmnail({ navigation }) {
  return (
    <View style={styles.contianer}>
      <View style={styles.header}>
        <Icon
          icon={faArrowLeft}
          size={20}
          onPress={() => navigation.goBack()}
          style={[styles.headerIcon]}
        />
        <Text style={[styles.headerText, TextStyles.header]}>Exclusive </Text>
      </View>
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
              {Data.text}
            </Text>
          </View>

          {Data.video.map(item => {
            if (item == null) {
              return;
            } else {
              return (
                <View style={styles.videoContainer} key={item.vID}>
                  <Image
                    style={styles.thumbnailImage}
                    source={{ uri: item.videoLink }}
                  />
                </View>
              );
            }
          })}

          {Data.photo.map(item => {
            if (item == null) {
              return;
            } else {
              return (
                <View style={styles.photoContainer} key={item.pID}>
                  <Image
                    style={styles.photo}
                    source={{ uri: item.photoLink }}
                  />
                </View>
              );
            }
          })}

          <View style={styles.description}>
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
              {Data.description}
            </Text>
          </View>

          <View style={styles.movefit}>
            {infoBox(Info.movefit, Info.movefitLink)}
          </View>
          <View style={styles.jatie}>
            {infoBox(Info.jatie, Info.jatieLink)}
          </View>
          <View style={styles.jatieVIP}>
            {infoBox(Info.jatieVIP, Info.jatieVIPLink)}
          </View>
          <View style={styles.jatieBrand}>{infoBox(Info.jatieBrand)}</View>
          <View style={styles.j80Fit}>
            {infoBox(Info.j80Fit, Info.j80FitLink)}
          </View>
          <View style={styles.jatieBeauty}>
            {infoBox(Info.jatieBeauty, Info.jatieBeautyLink)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export const infoBox = (text, link) => {
  return (
    <View style={styles.info}>
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
        {text}
        <Text
          style={{ color: theme.light.colors.hyperlink }}
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

const Info = {
  movefit: 'DOWNLOAD THE MOVE APP: ',
  movefitLink: 'https://movefit.com/',
  jatie: 'ALL THINGS JATIE: ',
  jatieLink: 'https://linktr.ee/katiebrueckner',
  jatieVIP: 'JATIE VIP: ',
  jatieVIPLink: 'https://www.jatievip.com',
  jatieBrand: 'Help Support us and look good while doing it!!',
  j80Fit: 'J80Fit: ',
  j80FitLink: 'https://j80fitness.com/',
  jatieBeauty: 'Jatie Beauty: ',
  jatieBeautyLink: 'https://www.jatiebeauty.com/',
};

const Data = {
  id: 1,
  thumbnail:
    'https://www.dharmann.com/wp-content/uploads/2022/06/YT-Thumbnail-566-Husband-Pranks-Wife-Goes-Too-Far-Option-1E.jpg',
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
  ],
  text: 'Starting an argument then having bad period cramps *Pranks on Wife',
  description:
    'Nothing like starting an argument with your wife for fun lol.. Hope you guys enjoyed this video and get ready for vlogmas starting tomorrow!!',
};

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  header: {
    padding: 15,
  },
  headerIcon: {
    color: theme.light.colors.info,
  },
  headerText: {
    marginTop: 10,
    color: theme.light.colors.black,
  },

  postContainer: {
    flex: 1,
  },
  title: {
    padding: 20,
  },
  description: {
    padding: 20,
  },
  info: {
    paddingLeft: 20,
  },
  videoContainer: {
    width: '100%',
    marginBottom: 10,
  },
  photoContainer: {
    width: '100%',
    marginBottom: 10,
  },
  photo: {
    height: 250,
  },
  thumbnailImage: {
    height: 210,
  },
  movefit: {
    paddingBottom: 20,
  },
  jatieBrand: {
    paddingTop: 20,
  },
  jatieBeauty: {
    paddingBottom: 20,
  },
});
