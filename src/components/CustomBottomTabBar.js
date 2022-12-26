import { NAVIGATION } from '@/constants';
import { FontFamily } from '@/theme/Fonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  faNewspaper,
  faMessage,
  faUserCircle,
} from '@fortawesome/free-regular-svg-icons';
import { faCrown, faGift } from '@fortawesome/free-solid-svg-icons';

const tabBarLabel = {
  [NAVIGATION.homeNavigator]: 'Feed',
  [NAVIGATION.messageNavigator]: 'Message',
  [NAVIGATION.exclusiveNavigator]: 'Exclusive',
  [NAVIGATION.giveawayNavigator]: 'Giveaway',
  [NAVIGATION.profileNavigator]: 'Me',
};

const tabBarIcon = {
  [NAVIGATION.homeNavigator]: faNewspaper,
  [NAVIGATION.messageNavigator]: faMessage,
  [NAVIGATION.exclusiveNavigator]: faCrown,
  [NAVIGATION.giveawayNavigator]: faGift,
  [NAVIGATION.profileNavigator]: faUserCircle,
};

function CustomBottomTabBar({ state, descriptors, navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBoxContainer}
          >
            <FontAwesomeIcon
              icon={tabBarIcon[route.name]}
              size={20}
              color={isFocused ? colors.activeTabIcon : colors.inactiveTabIcon}
            />

            <Text
              style={[
                styles.labelStyle,
                {
                  color: isFocused
                    ? colors.activeTabLabel
                    : colors.inactiveTabLabel,
                },
              ]}
            >
              {tabBarLabel[label]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBoxContainer: {
    flex: 1,
    padding: 6,
    paddingBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelStyle: {
    paddingTop: 5,
    fontSize: 14,
    fontFamily: FontFamily.Recoleta_semibold,
  },
});

export { CustomBottomTabBar };
