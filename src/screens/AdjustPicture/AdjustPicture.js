import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/AddProfilePicture/AddProfilePhoto.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { ms } from 'react-native-size-matters';
import { Logo } from '@/assets';
import { TextStyles, theme } from '@/theme';
import { navigationRef } from '@/navigation/RootNavigation';
import { NAVIGATION } from '@/constants';
import { AuthHeader } from '@/components/AuthHeader';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export function AdjustPicture() {
  const { colors } = useTheme();

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {
    // navigationRef.navigate(NAVIGATION.enterOtp);
  };

  return (
    <View style={styles.container}>
      <AuthHeader title={strings.Welcome.login} />

      <ErrorView errors={errors} />
      <View style={styles.mainView}>
        <TouchableOpacity onPress={onPress} style={styles.formContainer}>
          <FontAwesomeIcon icon={faUser} size={65} color={colors.white} />
        </TouchableOpacity>

        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.upload
          }
        />
      </View>
      <View style={styles.bottomButtons}>
        <Button
          // onPress={handleSubmit}
          // style={styles.submitButton}
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.Finish
          }
        />
        <Button
          // onPress={handleSubmit}
          style={styles.skipButton}
          textStyle={styles.skipButtonText}
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.skip
          }
        />
      </View>
    </View>
  );
}
