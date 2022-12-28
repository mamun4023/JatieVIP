import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  ScrollView,
  TextInput,
} from 'react-native';
import { HorizontalLine, Icon, TextField } from '@/components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { FlatList } from 'react-native-gesture-handler';
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
            <TextField>{Data.title}</TextField>
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
    </View>
  );
}

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
  TextBox: {
    padding: 8,
    // borderWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
    // backgroundColor: theme.light.colors.inputFiled,
  },
  TextBoxDEsc: {
    width: '100%',
    height: 300,
    padding: 8,
    borderWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  borderWidth: 1,
  TextField: {
    // backgroundColor: 'white',
  },
  InputTextBoxDEsc: {
    height: '100%',
    textAlignVertical: 'top',
  },
});
