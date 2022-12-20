import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { AuthHeader } from '@/components/AuthHeader';
import { theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { StyleSheet } from 'react-native';
import { ms, vs } from 'react-native-size-matters';

export function AdjustPictureModal() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <AuthHeader />
      </View>

      <ErrorView errors={errors} />
      <View style={styles.pictureView}>
        <View style={styles.header}>
          <Text style={styles.headingText}>
            {strings.addYourProfilePicture.adjustPicture}
          </Text>
        </View>
        <View style={styles.mainView}></View>
      </View>
      <View style={styles.bottomButtons}>
        <Button
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.cropAndClose
          }
        />
        <Button
          style={styles.skipButton}
          textStyle={styles.skipButtonText}
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.replace
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    paddingHorizontal: ms(20),
  },
  mainView: {
    alignItems: 'center',
    flex: 1.4,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,

    backgroundColor: theme.light.colors.userBackgroundColor,
  },
  skipButton: {
    backgroundColor: theme.light.colors.white,
    borderColor: theme.light.colors.activeTabIcon,
    borderWidth: 1,
    marginTop: vs(15),
  },
  skipButtonText: {
    color: theme.light.colors.activeTabIcon,
  },
  bottomButtons: {
    flex: 0.6,
    justifyContent: 'flex-start',
    paddingVertical: vs(10),
    paddingHorizontal: ms(20),
  },
  headingText: {
    color: theme.light.colors.title,
    fontFamily: FontFamily.Recoleta_bold,
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: theme.light.colors.white,
    justifyContent: 'center',
    paddingHorizontal: ms(20),
    elevation: 5,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  pictureView: {
    flex: 1.4,
    paddingHorizontal: ms(10),
  },
});
