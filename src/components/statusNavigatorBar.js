import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme, TextStyles } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import PropsType from 'prop-types';
import { s, ms, vs } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export function StatusNavigatorBar({
  status,
  setStatus,
  title1,
  title2,
  key1,
  key2,
  showLock
}) {
  return (
    <View style={styles.statusContainer}>
      <View style={styles.status}>
        <Text
          onPress={() => setStatus(key1)}
          style={
            status != key1
              ? [
                  styles.statusText,
                  { color: theme.light.colors.primaryInactive },
                ]
              : styles.statusText
          }
        >
          {' '}
          {title1}
        </Text>
        {status == key1 ? (
          <View style={styles.statusNaivigator} />
        ) : (
          <View style={[styles.statusNaivigator, { left: 235 }]} />
        )}
      </View>
      <View style={styles.status}>
        <Text
          style={
            status != key2
              ? [
                  styles.statusText,
                  { color: theme.light.colors.primaryInactive },
                ]
              : styles.statusText
          }
          onPress={() => setStatus(key2)}
        >
          {' '}
          {title2}{' '}
          {showLock? 
          <FontAwesomeIcon 
            icon={faLock}
            color = {status != key2?theme.light.colors.primaryInactive : theme.light.colors.primary}
          />: null}
        </Text>
      </View>
    </View>
  );
}

StatusNavigatorBar.prototype = {
  status: PropsType.string.isRequired,
  setStatus: PropsType.func.isRequired,
  title1: PropsType.string.isRequired,
  title2: PropsType.string.isRequired,
  key1: PropsType.string.isRequired,
  key2: PropsType.string.isRequired,
};

const styles = StyleSheet.create({
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.light.colors.primaryBg,
    margin: ms(10),
    padding: ms(10),
    borderRadius: 10,
    height: ms(50),
    marginBottom: vs(20),
  },
  statusText: [
    TextStyles.header,
    {
      color: theme.light.colors.primary,
      fontSize: ms(20),
    },
  ],

  statusNaivigator: {
    width: ms(10),
    height: ms(10),
    backgroundColor: theme.light.colors.primary,
    position: 'absolute',
    top: ms(26),
    left: ms(50),
    borderRadius: 50,
  },
});
