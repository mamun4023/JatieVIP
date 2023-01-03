import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '@/screens/Exclusive/Exclusive.styles';
import { TextStyles, theme } from '@/theme';
import {
  Card,
  CardBody,
  CardHeader,
  HorizontalLine,
  Icon,
  ModalDown,
  ModalList,
} from '@/components';
import {
  faAngleDown,
  faEllipsis,
  faPen,
  faSearch,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { NAVIGATION } from '@/constants';
import { Logo } from '@/assets';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ms } from 'react-native-size-matters';
import { strings } from '@/localization';

export function Exclusive({ navigation }) {
  const [open, setOpen] = useState(false);
  const { colors } = useTheme();
  const userType = useSelector(state => state.userType);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Logo />
          <View>
            <Text
              style={[TextStyles.header, { color: theme.light.colors.text }]}
            >
              {' '}
              {strings.exclusive.header}
            </Text>
            <View style={styles.recentContiner}>
              <Text style={TextStyles.label}>{strings.exclusive.recent}</Text>
              <Icon
                icon={faAngleDown}
                size={ms(20)}
                TextStyles
                style={styles.recentIcon}
              />
            </View>
          </View>
        </View>

        <View style={styles.iconContiner}>
          <Icon icon={faSearch} size={ms(20)} style={styles.icon} />
          <Icon icon={faBell} size={ms(20)} style={styles.icon} />
        </View>
      </View>

      <HorizontalLine />

      <View style={styles.feedContainer}>
        <FlatList
          data={Data}
          key={props => props.id}
          renderItem={({ item }) => (
            <View style={{ margin: 10 }}>
              <Card>
                <View style={styles.editContainer}>
                  <CardHeader
                    fullName={item.fullName}
                    userName={item.userName}
                    profilePic={item.profilePic}
                    time={item.time}
                  />

                  {/* Admin */}

                  {userType.user == 'Admin' && (
                    <Icon
                      icon={faEllipsis}
                      size={15}
                      onPress={() => setOpen(true)}
                      style={[
                        styles.icon,
                        {
                          color: theme.light.colors.black,
                        },
                      ]}
                    />
                  )}
                </View>
                <CardBody text={item.text} />
                <View style={styles.thumbnailContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(NAVIGATION.exclusiveThumbnail)
                    }
                  >
                    <Image
                      style={styles.thumbnailImage}
                      source={{
                        uri: 'https://www.dharmann.com/wp-content/uploads/2022/06/YT-Thumbnail-566-Husband-Pranks-Wife-Goes-Too-Far-Option-1E.jpg',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          )}
        />
        {/* Admin */}
        <ModalDown open={open} setOpen={setOpen}>
          <ModalList
            title="Edit"
            icon={faPen}
            iconBg={theme.light.colors.infoBgLight}
            iconColor={theme.light.colors.info}
          />
          <ModalList
            title="Remove"
            icon={faTrash}
            iconBg={theme.light.colors.infoBgLight}
            iconColor={theme.light.colors.secondary}
          />
        </ModalDown>
      </View>

      {/* Admin Button */}

      {userType.user == 'Admin' && (
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION.adminExclusivePost)}
          style={[
            styles.btn,
            { backgroundColor: theme.light.colors.primary, width: 150 },
          ]}
        >
          <Text style={[styles.btnTxt, { color: theme.light.colors.white }]}>
            + Exclusive
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const Data = [
  {
    id: 1,
    fullName: 'JatieVip',
    userName: '@JatieVip',
    profilePic:
      'https://resources-live.sketch.cloud/files/d24dae39-1a64-47d5-af65-e14b5a1c533c.png?Expires=1672318800&Signature=IeAX1iEiKtOvnn5~~1FBUX4qZF3V~GvJhhSixUAlkKFgwxWDgVrjlOfcGVYUT5DEFNBOx2znlfwLHG5EfJtprrQ-Xlgxay9iB47DpvQnkRDIReag58U3i~tZbpKu37QqvqPzGwvRi~PPXCAPSrada~ujA-dVhePv-vX0A1F~VH4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
    text: 'Starting an argument then having bad period cramps *Pranks on Husband',
    time: '39',
  },
  {
    id: 2,
    fullName: 'JatieVip',
    userName: '@JatieVip',
    profilePic:
      'https://resources-live.sketch.cloud/files/d24dae39-1a64-47d5-af65-e14b5a1c533c.png?Expires=1672318800&Signature=IeAX1iEiKtOvnn5~~1FBUX4qZF3V~GvJhhSixUAlkKFgwxWDgVrjlOfcGVYUT5DEFNBOx2znlfwLHG5EfJtprrQ-Xlgxay9iB47DpvQnkRDIReag58U3i~tZbpKu37QqvqPzGwvRi~PPXCAPSrada~ujA-dVhePv-vX0A1F~VH4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
    text: 'Starting an argument then having bad period cramps *Pranks on Husband',
    time: '39',
  },
];
