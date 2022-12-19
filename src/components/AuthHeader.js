import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ms } from 'react-native-size-matters';
import { Logo } from '@/assets';
import { TextStyles } from '@/theme';

export function AuthHeader({ title, containerStyle }) {
  return (
    <View
      style={[
        { paddingTop: Platform.OS == 'ios' ? ms(70) : ms(40) },
        containerStyle,
      ]}
    >
      <View style={{ marginBottom: ms(10) }}>
        <Logo height={ms(70)} width={ms(70)} />
      </View>
      <Text style={TextStyles.title}>{title}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ms(70),
    paddingHorizontal: ms(20),
  },
});
