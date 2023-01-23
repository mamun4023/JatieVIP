import React from 'react';
import { View } from 'react-native';
import { theme } from '@/theme';
import PropsType from 'prop-types';
import { ms } from 'react-native-size-matters';

export const HorizontalLine = ({ color }) => {
  return (
    <View
      style={{
        borderBottomColor: color ? color : theme.light.colors.primary,
        borderBottomWidth: ms(1), //2.5
      }}
    />
  );
};

HorizontalLine.prototype = {
  color: PropsType.string,
};

HorizontalLine.defaultProps = {
  color: theme.light.colors.primary,
};
