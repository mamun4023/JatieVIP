import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '@/screens/Exclusive/Exclusive.styles';
import { TextStyles, theme } from '@/theme';
import {
  Card,
  CardHeader,
  HorizontalLine,
  Icon,
  ModalDown,
  ModalList,
} from '@/components';
import {
  faChevronDown,
  faCircle,
  faEllipsis,
  faLock,
  faPen,
  faPlay,
  faSearch,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { NAVIGATION } from '@/constants';
import { Logo } from '@/assets';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ms, vs } from 'react-native-size-matters';
import { strings } from '@/localization';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Exclusive({ navigation }) {
  const [open, setOpen] = useState(false);
  const userType = useSelector(state => state.userType);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Logo />
          <View style={styles.exclusive}>
            <Text
              style={[TextStyles.header, { color: theme.light.colors.text }]}
            >
              {' '}
              {strings.exclusive.header}
            </Text>
            <View style={styles.recentContiner}>
              <Text style={styles.recent}>{strings.exclusive.recent}</Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                size={ms(14)}
                color={theme.light.colors.secondary}
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
            <View style={{ margin: ms(12) }}>
              <Card>
                <View style={styles.editContainer}>
                  <View style={{ paddingTop: vs(8) }}>
                    <CardHeader
                      fullName={item.fullName}
                      userName={item.userName}
                      profilePic={item.profilePic}
                      isOfficial={true}
                    />
                  </View>

                  {/* Admin */}

                  <View style={styles.cardRightContainer}>
                    <Text style={[styles.timeTxt]}>{item.time}</Text>
                    {userType.user == `${strings.userType.admin}` && (
                      <Icon
                        icon={faEllipsis}
                        size={ms(15)}
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
                </View>
                {/* <CardBody text={item.text}/> */}
                <View style={{ paddingLeft: ms(5) }}>
                  <Text style={styles.fullNameTxt}>{item.text}</Text>
                </View>
                <View style={styles.thumbnailContainer}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(NAVIGATION.exclusiveThumbnail)
                    }
                  >
                    {/* VIP only */}
                    {userType.user == `${strings.userType.free}` &&
                    item.status == `${strings.userType.free}` ? (
                      <View>
                        <Image
                          blurRadius={15}
                          style={styles.thumbnailImage}
                          source={{
                            uri: item.thumbnail,
                          }}
                        />
                        <View style={styles.vipOnlyContainer}>
                          <FontAwesomeIcon
                            icon={faLock}
                            size={ms(10)}
                            style={[styles.lock]}
                          />
                          <Text style={styles.vipOnlyText}>
                            {strings.exclusive.vipOnly}
                          </Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <Image
                          style={styles.thumbnailImage}
                          source={{
                            uri: item.thumbnail,
                          }}
                        />
                        <View style={styles.videoPlayContainer}>
                          <FontAwesomeIcon
                            icon={faCircle}
                            size={ms(50)}
                            style={[styles.videoPlay]}
                          />
                          <FontAwesomeIcon
                            icon={faPlay}
                            size={ms(15)}
                            style={[styles.Play]}
                          />
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          )}
        />
        {/* Admin */}
        <ModalDown open={open} setOpen={setOpen}>
          <ModalList
            title={strings.exclusive.edit}
            icon={faPen}
            iconBg={theme.light.colors.infoBgLight}
            iconColor={theme.light.colors.info}
          />
          <ModalList
            title={strings.exclusive.remove}
            icon={faTrash}
            iconBg={theme.light.colors.infoBgLight}
            iconColor={theme.light.colors.secondary}
          />
        </ModalDown>
      </View>

      {/* Admin Button */}

      {userType.user == `${strings.userType.admin}` && (
        <TouchableOpacity
          onPress={() => navigation.navigate(NAVIGATION.adminExclusivePost)}
          style={[
            styles.btn,
            { backgroundColor: theme.light.colors.primary, width: ms(140) },
          ]}
        >
          <Text style={[styles.btnTxt, { color: theme.light.colors.white }]}>
            {strings.exclusive.exclusiveButton}
          </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const Data = [
  {
    id: 1,
    fullName: 'JatieVip',
    userName: '@JatieVip',
    profilePic:
      'https://resources-live.sketch.cloud/files/d24dae39-1a64-47d5-af65-e14b5a1c533c.png?Expires=1672318800&Signature=IeAX1iEiKtOvnn5~~1FBUX4qZF3V~GvJhhSixUAlkKFgwxWDgVrjlOfcGVYUT5DEFNBOx2znlfwLHG5EfJtprrQ-Xlgxay9iB47DpvQnkRDIReag58U3i~tZbpKu37QqvqPzGwvRi~PPXCAPSrada~ujA-dVhePv-vX0A1F~VH4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
    text: 'Starting an argument then having bad period cramps *Pranks on Husband!*',
    time: '39 mins ago',
    thumbnail:
      'https://www.dharmann.com/wp-content/uploads/2022/06/YT-Thumbnail-566-Husband-Pranks-Wife-Goes-Too-Far-Option-1E.jpg',
    status: 'VIP',
  },
  {
    id: 2,
    fullName: 'JatieVip',
    userName: '@JatieVip',
    profilePic:
      'https://resources-live.sketch.cloud/files/d24dae39-1a64-47d5-af65-e14b5a1c533c.png?Expires=1672318800&Signature=IeAX1iEiKtOvnn5~~1FBUX4qZF3V~GvJhhSixUAlkKFgwxWDgVrjlOfcGVYUT5DEFNBOx2znlfwLHG5EfJtprrQ-Xlgxay9iB47DpvQnkRDIReag58U3i~tZbpKu37QqvqPzGwvRi~PPXCAPSrada~ujA-dVhePv-vX0A1F~VH4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
    text: 'Starting an argument then having bad period cramps *Pranks on Husband!*',
    time: '39 mins ago',
    thumbnail:
      'https://www.dharmann.com/wp-content/uploads/2022/06/YT-Thumbnail-566-Husband-Pranks-Wife-Goes-Too-Far-Option-1E.jpg',
    status: 'Free',
  },
  {
    id: 3,
    fullName: 'JatieVip',
    userName: '@JatieVip',
    profilePic:
      'https://resources-live.sketch.cloud/files/d24dae39-1a64-47d5-af65-e14b5a1c533c.png?Expires=1672318800&Signature=IeAX1iEiKtOvnn5~~1FBUX4qZF3V~GvJhhSixUAlkKFgwxWDgVrjlOfcGVYUT5DEFNBOx2znlfwLHG5EfJtprrQ-Xlgxay9iB47DpvQnkRDIReag58U3i~tZbpKu37QqvqPzGwvRi~PPXCAPSrada~ujA-dVhePv-vX0A1F~VH4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA',
    text: 'Starting an argument then having bad period cramps *Pranks on Husband!*',
    time: '39 mins ago',
    thumbnail:
      'https://www.dharmann.com/wp-content/uploads/2022/06/YT-Thumbnail-566-Husband-Pranks-Wife-Goes-Too-Far-Option-1E.jpg',
    status: 'VIP',
  },
];
