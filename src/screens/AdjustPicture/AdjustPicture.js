import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '@/screens/AdjustPicture/AdjustPicture.styles.js';
import { AdjustPictureModal } from '@/components/AdjustPictureModal';
export function AdjustPicture() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <AdjustPictureModal />
    </View>
  );
}
