import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import { theme } from '@/theme';
import { Card, CardBody } from '@/components';
import { ms, vs } from 'react-native-size-matters';
import { FontFamily } from '@/theme/Fonts';
import { strings } from '@/localization';
import { NAVIGATION } from '@/constants';
import { useSelector } from 'react-redux';

export default function Active({ navigation }) {
  const [open, setOpen] = useState(false);
  return (
    <View>
      <FlatList
        data={Data}
        key={props => props.id}
        renderItem={({ item }) => (
          <View style={{ margin: ms(10) }}>
            <Card>
              <View>
                <Text style={styles.title}>{strings.giveaway.title} </Text>
              </View>
              <View>
                <Text style={styles.officialTxt}>
                  {strings.giveaway.EndsIn}{' '}
                  <Text style={[styles.EndTimeTxt]}> {item.EndsIn}</Text>
                </Text>
              </View>
              <CardBody text={item.Desc} />
              <View style={styles.thumbnailContainer}>
                <Image
                  style={styles.thumbnailImage}
                  source={{
                    uri: item.photo,
                  }}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(NAVIGATION.giveawayPostDetails)
                  }
                  style={styles.btn}
                >
                  <Text
                    style={[styles.btnTxt, { color: theme.light.colors.white }]}
                  >
                    {strings.giveaway.learnMore}
                  </Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        )}
      />
    </View>
  );
}

const Data = [
  {
    id: 1,
    title: 'Summer 2023 Giveaway',
    EndsIn: '12 Day: 13 Hrs: 12 Sec',
    Desc: 'Thanks for joining our app everyone! To show our appreciation, we are going to raffle away a brand new iPhone 13!',
    photo:
      'https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80',
  },
  {
    id: 2,
    title: 'Summer 2023 Giveaway',
    EndsIn: '12 Day: 13 Hrs: 12 Sec',
    Desc: 'Thanks for joining our app everyone! To show our appreciation, we are going to raffle away a brand new iPhone 13!',
    photo:
      'https://images.unsplash.com/photo-1616353071588-708dcff912e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXBwbGUlMjBpcGhvbmV8ZW58MHx8MHx8&w=1000&q=80',
  },
];

export const styles = StyleSheet.create({
  title: {
    margin: ms(10),
    fontFamily: FontFamily.Recoleta_bold,
    textAlign: 'justify',
    color: theme.light.colors.black,
    fontSize: ms(16, 0.3),
  },
  officialTxt: {
    fontFamily: FontFamily.Recoleta_medium,
    textAlign: 'justify',
    backgroundColor: theme.light.colors.primaryBg,
    borderRadius: 20,
    padding: ms(8),
    fontSize: ms(11, 0.3),
    margin: ms(10),
    paddingLeft: ms(10),
  },
  thumbnailImage: {
    width: '100%',
    height: vs(180),
    padding: ms(80),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  EndTimeTxt: {
    color: theme.light.colors.black,
  },
  btn: {
    borderRadius: 10,
    padding: ms(8),
    alignItems: 'center',
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    position: 'absolute',
    top: '70%',
    left: '5%',
    backgroundColor: theme.light.colors.primary,
    width: ms(130),
  },
  btnTxt: {
    fontFamily: FontFamily.BrandonGrotesque_bold,
    fontSize: ms(14, 0.3),
  },
});
