import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '@/screens/Exclusive/Exclusive.styles';
import { ShadowStyles, TextStyles } from '@/theme';

export function Exclusive() {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.formContainer,
          ShadowStyles.shadow,
          { backgroundColor: colors.primary },
        ]}
      >
        <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
          {'This will be Exclusive screen'}
        </Text>
      </View>
    </View>
  );
}
