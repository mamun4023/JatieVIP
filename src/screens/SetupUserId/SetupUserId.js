import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { shallowEqual, useSelector } from 'react-redux';
import { TYPES } from '@/actions/UserActions';
import { Button, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/EnterOtp/EnterOtp.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { AuthHeader } from '@/components/AuthHeader';

export function SetupUserId() {
  const [userId, setUserId] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
      <AuthHeader title={strings.setupUserId.title} />
      <Text style={styles.subTitle}>{strings.setupUserId.subtitle}</Text>

      <TextField
        autoCapitalize="none"
        onChangeText={setUserId}
        placeholder={strings.setupUserId.placeholder}
        value={userId}
      />

      <Button
        onPress={handleSubmit}
        style={styles.submitButton}
        title={isLoading ? strings.common.loading : strings.login.continue}
      />
    </View>
  );
}
