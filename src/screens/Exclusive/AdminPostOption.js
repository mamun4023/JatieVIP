import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { Button, Icon } from '@/components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { useState } from 'react';
import { ms, vs } from 'react-native-size-matters';
import { strings } from '@/localization';
export default function AdminPostOption({ navigation }) {
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
          {strings.exclusive.adminPostHeader}{' '}
        </Text>
      </View>

      <View style={styles.postContainer}>{AdminSwitch('For VIPs Only')}</View>
      <View style={styles.PostButtonContainer}>
        <Button
          style={styles.PostButton}
          title={strings.exclusive.postButton}
        />
      </View>
    </View>
  );
}

const AdminSwitch = text => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.SwitchContainer}>
      <View style={styles.Switch}>
        <Text
          style={[
            TextStyles.text,
            {
              fontFamily: FontFamily.Recoleta_medium,
              textAlign: 'justify',
              color: theme.light.colors.black,
            },
          ]}
        >
          {text}
        </Text>
      </View>
      <Switch
        trackColor={{
          false: theme.light.colors.infoBgLight,
          true: theme.light.colors.infoBg,
        }}
        thumbColor={
          isEnabled ? theme.light.colors.info : theme.light.colors.secondary
        }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
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

  //VIP Switch

  SwitchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
    marginTop: vs(20),
    marginBottom: vs(20),
  },
  Switch: {
    margin: ms(20),
  },

  PostButtonContainer: {
    margin: ms(10),
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
});
