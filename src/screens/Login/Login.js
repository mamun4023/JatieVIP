import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Login/Login.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { ms } from 'react-native-size-matters';
import { Logo } from '@/assets';
import { TextStyles, theme } from '@/theme';

export function Login() {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [mobileNumber, setMobileNumber] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {
    // dispatch(login(username, password));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: ms(10) }}>
        <Logo height={ms(142)} width={ms(142)} />
      </View>
      <Text style={TextStyles.title}>{strings.login.loginOrSignup}</Text>
      <Text style={styles.subTitle}>{strings.login.enterPhoneNumber}</Text>

      <TextField
        autoCapitalize="none"
        onChangeText={setMobileNumber}
        placeholder={strings.login.phoneNumber}
        value={mobileNumber}
        keyboardType="phone-pad"
      />

      <ErrorView errors={errors} />
      <Button
        onPress={handleSubmit}
        style={styles.submitButton}
        title={isLoading ? strings.common.loading : strings.login.continue}
      />

      <Text style={styles.termsAndConditionsStyle}>
        {strings.login.byContinue}
        <Text style={{ color: theme.light.colors.hyperlink }}>
          {strings.login.termsAndConditions}
        </Text>
        {strings.login.and}
        <Text style={{ color: theme.light.colors.hyperlink }}>
          {strings.login.privacyPolicy}
        </Text>
      </Text>
    </View>
  );
}
