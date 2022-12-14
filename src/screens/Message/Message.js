import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '@/screens/Message/Message.styles';
import { ShadowStyles, TextStyles } from '@/theme';

export function Message() {
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
          {'This will be message screen'}
        </Text>
      </View>
    </View>
  );
}
