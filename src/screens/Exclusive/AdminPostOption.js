import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { Button, Icon } from '@/components';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TextStyles, theme } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { useState } from 'react';
export default function AdminPostOption({ navigation }) {
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

      <View style={styles.postContainer}>{AdminSwitch("For VIP's Only")}</View>
      <View style={styles.PostButtonContainer}>
        <Button style={styles.PostButton} title={'Post'} />
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
              fontFamily: FontFamily.BrandonGrotesque_bold,
              textAlign: 'justify',
              color: theme.light.colors.secondary,
            },
          ]}
        >
          {text}
        </Text>
      </View>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
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
    padding: 15,
  },
  headerText: {
    marginTop: 10,
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
    marginTop: 20,
    marginBottom: 20,
  },
  Switch: {
    margin: 20,
  },

  PostButtonContainer: {
    margin: 10,
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
