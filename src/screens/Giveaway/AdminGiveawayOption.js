import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { Button, Icon } from '@/components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { useState } from 'react';
import { ms, vs } from 'react-native-size-matters';
import { strings } from '@/localization';
export default function AdminGiveawayOption({ navigation }) {
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
          {strings.giveaway.giveawayOption}{' '}
        </Text>
      </View>

      <View style={styles.postContainer}>
        {AdminSwitch(strings.giveaway.startDate)}
        {AdminSwitch(strings.giveaway.endDate)}
      </View>
      <View style={styles.postContainer}>
        {AdminSwitch(strings.giveaway.forVIPsOnly)}
        {AdminSwitch(strings.giveaway.usOnly)}
      </View>

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
    borderBottomWidth: 1,
    borderColor: theme.light.colors.primaryBg,
  },
  headerIcon: {
    color: theme.light.colors.info,
  },
  headerText: {
    marginTop: vs(10),
    color: theme.light.colors.black,
  },
  postContainer: {
    flexDirection: 'column',
  },

  //VIP Switch

  SwitchContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
    // marginTop: vs(20),
    // marginBottom: vs(20),
  },
  Switch: {
    margin: ms(20),
  },

  PostButtonContainer: {
    margin: ms(10),
  },
});
