import {
  CommentCard,
  CommentInput,
  HorizontalLine,
  TopBackButton,
} from '@/components';
import { strings } from '@/localization';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ms } from 'react-native-size-matters';
import { Data, SingleData } from './Data/commentsData';

export default function Comments({ navigation }) {
  const [openReplyTo, setOpenReplyTo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TopBackButton
          onPress={() => navigation.goBack()}
          style={styles.TopBackButton}
        />
        <Text style={styles.headTxt}> {strings.home.comments} </Text>
      </View>
      <HorizontalLine color={theme.light.colors.infoBgLight} paddingTop={15} />
      <View style={styles.commentContainer}>
        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <CommentCard
              name={item.name}
              userName={item.userName}
              imageUrl={item.proflePic}
              time={10}
              commentTxt={item.commentTxt}
              likeCount={10}
              disLikeCount={2}
              replyPress={() => setOpenReplyTo(true)}
            />
          )}
        />
      </View>
      {openReplyTo && (
        <View style={styles.replyToContainer}>
          <View style={styles.replay}>
            <Text style={styles.replyTxt}> {strings.home.replyTo} </Text>
            <Text style={styles.replayFontWeight}> {SingleData.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setOpenReplyTo(false)}
            style={styles.closeIconContainer}
          >
            <FontAwesomeIcon
              icon={faClose}
              size={ms(13)}
              color={theme.light.colors.white}
            />
          </TouchableOpacity>
        </View>
      )}

      <CommentInput />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  headerContainer: {
    paddingTop: ms(10),
    paddingLeft: ms(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headTxt: [
    TextStyles.header,
    {
      color: theme.light.colors.black,
      fontSize: ms(16),
    },
  ],
  commentContainer: {
    flex: 1,
  },
  TopBackButton: {
    padding: ms(5),
    paddingBottom: ms(10),
  },
  replyToContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: ms(5),
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: theme.light.colors.secondary,
  },
  replay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  replayFontWeight: { fontWeight: 'bold' },
  closeIconContainer: {
    backgroundColor: theme.light.colors.secondary,
    borderRadius: 100,
    padding: ms(5),
  },
  replyTxt: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
  },
});
