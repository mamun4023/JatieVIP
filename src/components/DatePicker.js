import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextField } from '@/components';
import { ms } from 'react-native-size-matters';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { theme } from '@/theme';

export const AppDatePicker = () => {
  return (
    <View>
      <TextField
        style={{
          width: ms(150),
        }}
        editable={false}
      />
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 30,
          right: ms(10),
        }}
      >
        <FontAwesomeIcon
          icon={faCalendar}
          size={ms(13)}
          color={theme.light.colors.info}
        />
      </TouchableOpacity>
    </View>
  );
};
