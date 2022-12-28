import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '@/screens/Exclusive/Exclusive.styles';
import {  TextStyles, theme } from '@/theme';
import { Card,
  CardBody, 
  CardHeader, 
  HorizontalLine, 
  Icon 
} from '@/components';
import { faAngleDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { NAVIGATION } from '@/constants';
import { Logo } from '@/assets';

export function Exclusive({ navigation }) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImageContainer}>
          <Logo/>
          <View>
            <Text
              style={[TextStyles.header, { color: theme.light.colors.text }]}
            >
              {' '}
              Exclusive
            </Text>
            <View style={styles.recentContiner}>
              <Text style={TextStyles.label}> 
                Recent
              </Text>
              <Icon icon={faAngleDown} size={20} style={styles.recentIcon} />
            </View>
          </View>
        </View>

        <View style={styles.iconContiner}>
          <Icon icon={faSearch} size={20} style={styles.icon} />
          <Icon icon={faBell} size={20} style={styles.icon} />
        </View>
      </View>

      <HorizontalLine />
      
      <View style={styles.feedContainer}>
          <FlatList 
            data={Data}
            key = {(props)=> props.id}
            renderItem = {({item})=> (
                <View style = {{margin : 10}}> 
                  <Card>
                    <CardHeader 
                      fullName = {item.fullName}
                      userName = {item.userName}
                      profilePic =  {item.profilePic}
                      time = {item.time}
                    />
                    <CardBody
                      text = {item.text}
                    />
                    <View style={styles.thumbnailContainer}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate(NAVIGATION.exclusiveThumbnail)}
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
        </View>
    </View>
  );
}

const Data = [
  {
    id : 1,
    fullName : "JatieVip",
    userName : "@JatieVip",
    profilePic : "https://resources-live.sketch.cloud/files/d24dae39-1a64-47d5-af65-e14b5a1c533c.png?Expires=1672318800&Signature=IeAX1iEiKtOvnn5~~1FBUX4qZF3V~GvJhhSixUAlkKFgwxWDgVrjlOfcGVYUT5DEFNBOx2znlfwLHG5EfJtprrQ-Xlgxay9iB47DpvQnkRDIReag58U3i~tZbpKu37QqvqPzGwvRi~PPXCAPSrada~ujA-dVhePv-vX0A1F~VH4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
    text : "Starting an argument then having bad period cramps *Pranks on Husband",
    time : '39'
  },
  {
    id : 2,
    fullName : "JatieVip",
    userName : "@JatieVip",
    profilePic : "https://resources-live.sketch.cloud/files/d24dae39-1a64-47d5-af65-e14b5a1c533c.png?Expires=1672318800&Signature=IeAX1iEiKtOvnn5~~1FBUX4qZF3V~GvJhhSixUAlkKFgwxWDgVrjlOfcGVYUT5DEFNBOx2znlfwLHG5EfJtprrQ-Xlgxay9iB47DpvQnkRDIReag58U3i~tZbpKu37QqvqPzGwvRi~PPXCAPSrada~ujA-dVhePv-vX0A1F~VH4_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
    text : "Starting an argument then having bad period cramps *Pranks on Husband",
    time : '39'
  }
]