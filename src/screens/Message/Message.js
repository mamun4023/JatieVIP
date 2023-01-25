import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { TextStyles, theme } from '@/theme';
import { strings } from '@/localization';
import {
  faBellSlash,
  faBoxArchive,
  faFlag,
  faSearch,
  faTrash,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ms, vs } from 'react-native-size-matters';
import {
  AppSwitch,
  Button,
  HorizontalLine,
  Icon,
  ModalDown,
  ModalList,
  VerticalLine,
} from '@/components';
import { useState } from 'react';
import { FontFamily } from '@/theme/Fonts';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { NAVIGATION } from '@/constants';

export function Message({ navigation }) {
  const [unreadOnlySwitch, setUnreadonlySwitch] = useState(false);
  const [archiveSwitch, setArchiveSwitch] = useState(false);
  const [openCrud, setOpenCrud] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.left}>
          <View>
            <Image
              source={{
                uri: 'data:image/jpeg;base64,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',
              }}
              style={styles.userPic}
            />
          </View>
          <View>
            <Text style={styles.nameTxt}> {strings.message.message}</Text>
            <View style={styles.filterContainer}>
              <View style={styles.filter}>
                <Text style={styles.filterTxt}>
                  {' '}
                  {strings.message.unreadOnly}{' '}
                </Text>
                <AppSwitch
                  value={unreadOnlySwitch}
                  onChange={setUnreadonlySwitch}
                />
              </View>

              <VerticalLine />
              <View style={styles.filter}>
                <Text style={styles.filterTxt}>
                  {' '}
                  {strings.message.archive}{' '}
                </Text>
                <AppSwitch value={archiveSwitch} onChange={setArchiveSwitch} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.right}>
          <Icon
            icon={faSearch}
            size={ms(22)}
            onPress={() => navigation.navigate(NAVIGATION.search)}
          />
          <Icon
            icon={faBell}
            size={ms(22)}
            style={{ marginLeft: ms(15) }}
            onPress={() => navigation.navigate(NAVIGATION.notification)}
          />
          <View style={styles.bellAlert} />
        </View>
      </View>
      <View style={{ marginTop: ms(10) }} />
      <HorizontalLine />

      <View style={styles.messageContainer}>
        <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(NAVIGATION.chat, item.id)}
              onLongPress={() => setOpenCrud(true)}
              style={styles.messageCard}
            >
              <View style={styles.messageHeader}>
                <View style={styles.messageCardLeft}>
                  <Image
                    source={{
                      uri: item.profilePic,
                    }}
                    style={{
                      width: ms(50),
                      height: ms(50),
                      borderRadius: 100,
                      marginTop: ms(10),
                    }}
                  />
                  <View style={{ flexDirection: 'row', paddingLeft: ms(10) }}>
                    {item.online == false ? (
                      <Text
                        style={[
                          styles.fullNameTxt,
                          { color: theme.light.colors.secondary },
                        ]}
                      >
                        {item.name}{' '}
                      </Text>
                    ) : (
                      <Text style={styles.fullNameTxt}>{item.name} </Text>
                    )}

                    <Text style={styles.userNameTxt}> {item.userName} </Text>
                  </View>
                </View>
                <View style={styles.messageCardRight}>
                  <Text style={styles.minTxt}> {item.time} </Text>
                  {item.online == true ? (
                    <View style={styles.onlineSign} />
                  ) : null}
                </View>
              </View>
              {item.online == false ? (
                <Text
                  style={[
                    styles.messageTxt,
                    { color: theme.light.colors.secondary },
                  ]}
                >
                  {item.textMessage}{' '}
                </Text>
              ) : (
                <Text style={styles.messageTxt}> {item.textMessage}</Text>
              )}
            </TouchableOpacity>
          )}
        />
      </View>

      <Button
        title={strings.message.newMessage}
        onPress={() => navigation.navigate(NAVIGATION.searchUser)}
        style={{
          width: '35%',
          position: 'absolute',
          bottom: ms(10),
          right: ms(10),
        }}
      />

      {openCrud && (
        <ModalDown open={openCrud} setOpen={setOpenCrud}>
          <ModalList
            title={strings.message.archive}
            icon={faBoxArchive}
            iconColor={theme.light.colors.primary}
            iconBg={theme.light.colors.primaryBgLight}
          />
          <ModalList
            title={strings.message.snoozeNotification}
            icon={faBellSlash}
            iconColor={theme.light.colors.info}
            iconBg={theme.light.colors.infoBgLight}
          />
          <ModalList
            title={strings.message.delete}
            icon={faTrash}
            iconColor={theme.light.colors.error}
            iconBg={theme.light.colors.infoBgLight}
          />
          <HorizontalLine
            color={theme.light.colors.infoBgLight}
            paddingTop={15}
            paddingBottom={8}
          />
          <ModalList
            title={strings.message.reportThisMEssage}
            icon={faFlag}
            iconColor={theme.light.colors.secondary}
            iconBg={theme.light.colors.infoBgLight}
            onPress={() => {
              setOpenReport(true);
              setOpen(false);
            }}
          />
          <ModalList
            title={strings.operations.block}
            icon={faXmark}
            iconColor={theme.light.colors.secondary}
            iconBg={theme.light.colors.infoBgLight}
          />
        </ModalDown>
      )}
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(8),
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: ms(10),
  },
  nameTxt: [
    TextStyles.header,
    {
      color: theme.light.colors.black,
    },
  ],
  filterTxt: {
    fontFamily: FontFamily.Recoleta_medium,
    fontSize: ms(12, 0.3),
  },
  userPic: {
    width: ms(61),
    height: ms(66),
    borderRadius: 100,
    marginLeft: ms(10),
    marginRight: ms(10),
    marginTop: ms(10),
  },
  filterContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: ms(28),
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageContainer: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },
  messageCard: {
    backgroundColor: theme.light.colors.white,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
    // paddingTo : ms(15),
    padding: ms(9),
    paddingBottom: ms(30),
  },
  messageCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageCardRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  fullNameTxt: {
    fontFamily: FontFamily.Recoleta_black,
    fontSize: ms(14, 0.3),
    color: theme.light.colors.black,
    paddingLeft: ms(3),
  },
  userNameTxt: {
    fontFamily: FontFamily.Recoleta_regular,
    fontSize: ms(14, 0.3),
  },
  minTxt: {
    fontFamily: FontFamily.Recoleta_regular,
    fontSize: ms(12, 0.3),
  },
  onlineSign: {
    width: ms(8),
    height: ms(8),
    backgroundColor: theme.light.colors.success,
    borderRadius: 100,
  },
  messageTxt: {
    fontFamily: FontFamily.BrandonGrotesque_regular,
    fontSize: ms(18, 0.3),
    position: 'absolute',
    top: ms(50),
    left: ms(60),
    color: theme.light.colors.black,
    paddingLeft: ms(10), //
  },
  bellAlert: {
    height: ms(10),
    width: ms(10),
    backgroundColor: theme.light.colors.error,
    position: 'absolute',
    borderRadius: 100,
    left: ms(57),
    top: ms(28),
  },
});

const Data = [
  {
    id: 1,
    name: 'Maria Trofimova',
    userName: '@maria',
    profilePic:
      'data:image/jpeg;base64,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',
    textMessage: 'We hope you love the product making...',
    time: '10 mins',
    online: true,
  },
  {
    id: 2,
    name: 'Key Totleben',
    userName: '@key',
    profilePic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWJhYf8YJC8vIGrRT1USlzp5uGnOGJzxFVQ&usqp=CAU',
    textMessage: 'We hope you love the product making...',
    time: '10 mins',
    online: false,
  },
  {
    id: 3,
    name: 'Maria Trofimova',
    userName: '@maria',
    profilePic:
      'data:image/jpeg;base64,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',
    textMessage: 'We hope you love the product making...',
    time: '10 mins',
    online: true,
  },
  {
    id: 4,
    name: 'Key Totleben',
    userName: '@key',
    profilePic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWJhYf8YJC8vIGrRT1USlzp5uGnOGJzxFVQ&usqp=CAU',
    textMessage: 'We hope you love the product making...',
    time: 'June 12, 2023',
    online: false,
  },
  {
    id: 5,
    name: 'Maria Trofimova',
    userName: '@maria',
    profilePic:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgSFRISGBUVGBgYEhgSGBISGBgSGBgZGhgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDY0NDQ0NDQ0NDQ0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAECB//EAD8QAAEDAgQCCAMHAgUEAwAAAAEAAhEDBAUSITFBUQYTImFxgZGhMlKxFEJiwdHh8HLxBxUjM7KCkqLCJENT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJBEAAwEAAgICAgMBAQAAAAAAAAECERIhAzFBURMyBCJhcUL/2gAMAwEAAhEDEQA/ANVXywqPBB21t47CzBB2lNlEMgCyFsBbhIE0tQuoXJWMcFdBaK0XLBOHnVWaWyoVKwlWqFdsLJozTNVXkFS0a0qOqQeKgY8A7o6gcWXnvVV90BuV06qCEtYxcOGyGjJDC2uDxU4rDmEh08TeFOMTfzW6NjHV1cc13SuAUivxF/AlEsOunHcrakDGN7KwVhrkvUbgzui1G4EbrTSYXGF1aXLKgOy6TkzFi2sRMahaIXcLIWwxGWrRapIWiFjAnFG7eIn1TPhNq3IIA2S7irdB4hMHR6rmYp1WNIaVqbLr7YAbKg61bmJICNvZIQu5ZBSU3KGnGBL21ZroErYrSaJAGqb79uiUr74nTw0Cfw02zeVJIWqjNTotLqse0fFbXacQacIYfBd4IO0pblkNK4wQdpcjOpDCFtYFtAJpcOXZXBQMcOKgrPgKV5VS4dosEEXtcgrVG7cobx+q6thK3EbkXBdOXP2gqvWrBqi+1hbgDmXxdFQVmh+6r/aQs+1hHgjfkZ02xapG2DVNQdmCqYneCm3UwOPf3JalJDS3TILutTp6AAnmdh+qG08UcT8TY5fCPDmhb7t9Z0NBjuCvWuC1X7NJ8Qkz7H36CtHF3glmX+mdY/UKza4w7NlL9fL08VRfhb2sMtLXDi4HaNkIe6TlfoeBG3mEMXwHtez0qxxAHcjXZG2FeT4ZjDqb8jzIHwu38jzHfun3BMVD+wT4Jopp4xLnVqDy2FyCuwrkDFuFi2jgDmFqF0sWwwOxUaIr0Yb2PNDcRZmLW8yEyYPQyMAU7+B4eJl95Q67BRIqtcsCWlqDLxi/ePhIuKOJe496fcSYISPirIJhHwLGDyvUA3NWlsrF3HGFrmu5zSAruC0SNVcZYN5K7RpBuy49OzCULa0toGOSo3FSOUTljETyqVydFbeVSutlkYX752qsWJ0VO/dqprF0BOAgxV5HFChWPNEMTdJQ3qysKTNqnmug8kgqNrCp6TNQsYMtuurYObtG/ql/HGuqOZRZLnvMHujfyE/VFb3slv4R+5/L0XfQe26+6fVdrkYAJ+ZxM/Rc/La065njODFgHRalRY0uGZ8bnmmEUGtHZaAiDKQjRdPpgjZNmmVJdAK6pBwgjdJ2N4GDL2CHDhwPcnyvTQy5p7qfaZT4PJqru1B0e0w4HTun6K7h2KPoua8fddMHi3iPT3Ct9LLSD1jRG+3duEtC5BEHf1/n7plOok3jPcsLvW1WNe0yCAf28VcL4XmXQvGeraGky2YI5Rx/nNPlzcwNPJWmvhkbnO16CTaoKlBS7a3RLkcoOkKghMVpYsWBpQxSrkh3ymVcw7pHTLJL2+qE9IXQw+CWOjeCCoMxkySYnRTvM1hnW8R6IekVP52+oVW66RMjR49UAPRds7FRXPR1jRsUkufWj1Nezu96QB2xS/dXuck811VwqCq1S1LV0xM/BC6r5IJWLIWKxEfmrsLgFbBXEdh2sXMrCVjGOUbl0So3FYxE9VbluitPKgqDRYIuXdCSu6VGArtxT1WqbJ4IZTYdnAZcW0nZRC0HJGzQ7lw6h3LcaNsgttipqFpkOY8P5KKUKPcoMWfkDWAavkn+lo/UhLXJIeFLoC3lUPLiO/2CJ/4X1WtFwXECHtMnlqPqEBze4f8AUq1/hdXPX3BIJa1meBxcHGNOfaKSF02Wt9pHqD8apNIbmdJ/A/30VitWOUuCWrm5xCq5jmMYxhILmuALg0zMuneI2BGu+iMtDxThx7Uaxt9AmepCLGDK9YvcSa4YwaEMALyYk6nZCb3FbIP6vNUzj7zxUGsxM+IVrD2NL3FwmTrvuDojFTD6bgXCmwE6mGiTx1PFKscjPloq3toHt+LO08TBjlrx/decYrYllTI0AS7KBwkmF63dMDezwSritqGv6wNBIad+Dhs5CL4sNxyQs4ex1vUylwcA4at2kGHDyhel21Qlgb8pLfIfD7EJAqMBeR8oa7wJ3/Ip66OPFZkzrDSfENDT/wAZ80z110TaSku2Ygpgtzoh1K1gojSbAXRO/JzVnwTLFpdBMKAOkvwO8FnQP/bErfST4HeBRHoHZf6DH8wCp+SdQZeMYCwckFxJ0cExVaBCDX9DRSclVXQrXDeKC4gmG9ESEvXqt4jnt6CliwrF1kR6BXQUTXKrcXeXiuE7QitShlvfSYlX2vlYx0So3FbcVG5yJjlxUbytPeoatSAiAiqiVNb0kIu78N4qKjjoHFPIlDL1CidR1VWzxVr+KuOuRKYBNRoBAekzw17G8SGgebwmSi+RKTullWLmlyhs+Ty78lHy/qW8H7FS8tQBmGwOscjP7rf+F9HJc12HhTHmM+h9CFu4uMh5tMgjuJ/ZS9C67ad4Wu/+xhY08y0h7R6B3soRWJo6rnWmenvYQJJgc1G17H6FwEiQJ7RbMSRyWrytIaydzr4cVr7Q2S1gzOGjsomDyJ4Irtm4izcuy1H9WKgc2crwBkLwfg3kzziO9MttcNe2CAHRw5qneW9Z0RTaBrq4gbbzCXbq6uadbq8lMiTmIcdGgkE+2y3GkFtMK4izVLWNQ1pB2Oh4aE6+ybb+n2GEal30SF03rQ1oBiXNnyBcf+KWZ2sNVZOi6CS55brLy0kcAOHoE0f4fX0Vn0idHyWz8zd2+n0Sr0cBDoIlrtHA8QOI7weKMvout6rarDLZDmHY97XBUbU0Rx1J62xilaFFbPzsa7mAfUKddKORmALYCxbCIAJ0jZLHeBRb/D6uDasHENAPkqOOjsHwUfQAxSEcz9UrCh5uHgBB7lwglWbuoYQa9q9gwkpjT0AcVdrpzS3emCi9/VknuQi6cDJT+KRLwHrFkrF0kBwLtCqLKPWKnVxQQRKuYFXzyVwy9Z20sRA+l1bwi1CoI3QvG3w4eKoDEY4pariPE8hlc+dtVE4u+UoTZYjmIEpssqYe3gjL5AqeIvVa8GIVW4qGE118KlVK2GiFq5L0FKTzfFWvcdAUv17d7dTmC9Su8OaOCV8XtRqAmivsS5+gNg9+W7lHm4nrululhzhqpupeCN0zYJSHywxCREoFjDTWuC7XKwdo/Rvnr6KTCWlrS48Bp48FZOVoDJEky7vPf9FzeS9eHT4oxaCLppLSCOY9kFqXLmFtRphzCHsP42Gde79UyYhABnj/AHJ+g8ktXTdcp3dOg/nglj2Vv0eyYdcsu6VO4Zs4AkA6g7PYe8GfRS4VZm0zsogZKjy85+1leRBiddd9Z915p0O6QfYHup1SepqP1/A7LJqAcjmYD4SvVaddrwHsc0tcAWlpBBB4gjgq/q+iU1qxkV619T4nnwHZHfoN0CrWwYSfUpirUyQZeB3CUCv35ezMlCqZSf8ACWvWlrNdmrzTpZc535eDASfF0N+hKb7y4cRlA1+iS8UpAZp3nU+n7JIf9tBa2cKWD1IfzMbACUao1zU7BMyeyeB5g8kt2U9a0jQa6fhH8COWTwKjSds4J23mD5agp/JIkPo9cwx3Yb3AD00V4FCMKOg5PAI8dfyj0RRpXTD6OS12SSthcSttKYQH42JafBVugz8rACeJ+qv4lSLgR3Jdw+2qUYyukSTEJWtNuD/cVAQgd8QNEPfe1D/ZD7utVP8ACtw0PJIjxOmAJndLtR2pCIXlaoRBb6ITUcZ1CrE4TqtOFi0sVCYOr0X96N9Hq72AhNjsIYfurqlhDG8IXkR5XL9Hq1CpexSxW4c9wCjpWznDZOD8LpkzorFPD2DkhflVMaJ4iUbF28Jr6PVy0QVcNgxSULVrTIhHx+TizXPJBnrAQh15WAUs6bqncszcV0V5pwhPjei7it1OgQAtzGSE218NDlEMJCj+RaV4AS3tQeClOGA8Edp2QapDRhHl/puIs1aOV4bs0Au8Q0AD3dKCvuTnb3nNp8oiPy902Yjb9tjvuuY9k95gt+iVn2ThcNEaFrsviwuEegCkWRFeXAD5cey0H2/shGHvNarnO2unIcPNTYqwuDo3BLT5vE/RU8HqhhLuW/jx/ncrQkp0ndN1hJi8ODHcfzInX09l3guPXFp/t1HZA6XUzqw69oAH4fEQtX7Rla3clhfHcSB+qHvYQY+YCfGVWfWMjS71HudhX+1UmVWVDleAeGgPDxU1bDmgE7k8UjdAMdDHi0fo1zR1Zn77R2m/9QEjwPNekktI/VTcooqbFmpYhoJXm2P12ue8iIzECOJGhPsvVMecereG6OLXZeGpaYXkFW0yuDXnUkA6zDY19kk5o9bxKtuYOY7u2/p4q2HFzgfMDyCuUMEL5I3jsju7vJV+qLHFrv09jsqqppkLVSsHHCukzqYaHtkQAD8JlukbQdBzThh2LU6w7LtTwOh8ua8qtjnDqbgCw7jv02jaNDPMIjhds8VGNDs7C8bnK8cIMce8eYR1z2hEprp+z1XMthyGYXcFzSHGSw5Z+YEBzXHvghXg5VV6TcEznjiomsYdvoqt9WyglW+j0VGBx3KHNG4Mjexo4KjcVGBMd3biEq4yAxNN68A460HXNdhlAryCZCtvqiSqFw9WklSKqxYsTkz1c04VPECWtkK5cO0Qu/eci5nE/R0Kq+xaqYw8OIjYqa3xhx4ITcfEfFbtngFTXin6KPyV9jEMRPJb/wAxPehra7ea6FVvNN+GfoH5a+wj/mTlwcQKph7ea6BHNb8Mm/NRcbfKQXqoaLYhK/BI35qL/wBrC2LlUwApGgIfgkP52buAHjJrqZHcRJkINdVBTfLhqx+YH8DxDvf6o81qE43bguY7iZa7vaWk/wDqFLyeFStRXw+Xk8Yq3zgyo8uEsJlwHLifVDbyyy5nMMtcQfX8jA9UTvJgPjVo1B4jYg+IB9FBb1QzskZqZBEHixwkAciPqApxTSL1KbA9MPc8vIJA08Gxl9l3db6bke/EIxcsbTks7THCeG/NC7hgfyDhqDw5iVVWmScNI1hdJ76mbUGmQ6R8wIyR35oK9pwy66xjXniNR38V5hgNMuY+pHwvph0f1tJJ9G+69E6PtijDtxt5gI33gIWaCOnBf2Aye1Mx/O9eeYlAPZkujKDzJ3gcNNPNO/SnGJqGnsxmk8SYEhqVzbND+seRptMADw71Lxr+2lPLWThawx7m0wwntASBy5hD7+oXvLRudQeXNELWsztEmdCG/qtNoN1eNc0AH8I2jx1PmnlbfRKm+HZWpsyDRWadc78e4wtVGKqZadP4VdnMNeDY+KZyPmHEanfQADXYiAEzsvQdZ0Xl4rcwPy8fBMPR/EO11Tzof9sncO+Q9x4JeOsoqz2NF7c5gpMExHqxlKpvprhlJN+F/YH5pGS4xlpB1Svi99nMKd1uNVTr2wTz4sek35EBaz9VWe6URuKIQ+qyFZLCVVpCsXMrExM9VuH6IZfv7CJHUQh2JshpUSyEyue0fFVKtQhWq47R8VSrJUORMuXuMBEaVrUInVCaNYMdJTBbYm3LASW6X6jSpfsrmhUHArtjXjgUfwlnXakaIy7DWcksuxmoEovfyK11r+RToMLYeCGXlmGHZM6pfAFMv5F83DxvKi/zQhS4nchmiWrmuXHQLTVP4NUyhvscQz6l7Wt4ydfIcVdqBtQZ2mQAQ3lOxJPt6pHs3tEB4046u9gITDUxWGNa1mVg2aOPL1Uv5DeFf46WlO+pEucAJBH0O/nJVKnYnKCdmgiT4mPzRZ9/IyhjRxe4ideQH5qncVHVG9W05Q7s6cBxjxXNOnXTQLtO2x5HwgnKfAQqhbx7tvKUWvHNtrdlNsF75Lo4DXX6D1VK9o9ptMfE8ua3xdDRPqqLt9CPqe/gc+g+GNdSLXAkVA4n+kmAJ4aAJyssG6sa1CWjUGGgxHEzG3cq3RiyFNoA+60AeSK1mF5yuEskgSZgCTq3bgR6LqcrFqObk1Tw8s6TWLTcue3VheXNPzCAJ7xM+SH1qIcOYTd0iJfeMp06edzGlxYPwtJPpp5kJXuapLySxozu2HYgEk7AcAD6JJnp/wDQeWnyX/AJcNOdtNojMYgb5f3KYG0uA2aheFNFSq5/ykgHub+6LWz5LxyfHsEyWCVWkNRio1mIpW0BPIKjUZLo8D5boilAtMEg8THhJDVJb1D8Q30kbbco2I1UldkAqvTEEjnqsYfMKxEVmAk9tvZqePB3mNfUcFcpPBKRcPuzTeD913Zd5nsnyP1KZsMuczoV4eySpYwpVfrHeq9cqWse15qGuiBg25KGV0SuShdcphWV1i5laRFPU2PVXFHdkrqm9V8Sd2VFlkJ9xufFUq6vVtz4qjXSocGXBRjBrcOhBrhMPRpsloTIVnoWCWQpsEBTXzyNArVsMrB4KpcGZKzAaw2oXSCocVt5XeEO1d4qzft2WCmI2K4aC6YVZmDg8Ey4lS0lVrcLIzBTcDHJSHByTKOMClCFQn7DNOfQp3dhkIpx8QMnv4D2K5fY9XT6ziB/5Epjv7XrACNHN1B8FSv6rQxwcInQj8XMegXHf9ae/R1x/aVn2ImIWzi/XUEQCeYMz7IpaWvWV7Z8aQXOn5mgCPHNCuuYwsIkEiXDSDB1gjmPzXdg4B4LYiZEcM2pHrKSaykmdGKpbR6Rg7Yaql1dPcX06BjUhzzqGkntBg4mfcKWweQxxG4a4jxjRELW0DQGgaNAC66TrEjjTUttgXCsFZbF9dxJeWnM52rso7R+n83PmmJ3QLalxky5y802yTlaToJPHZej9Ob406LaLDD67smnCm2C8/QeZXlmPO0ZTGxcB5DX8kcU9InVOnrLGAUMrPIepIW7apFeq3mQVesGQxve5vshGeLl/e0fUrACd+6KTz3D6qufice5v0/spcRBdb1I+QkeMKu+p/p5vmA/4tQMaum9kHmqHDwRS4b2G+CGxBWMdEZh4hGujlcudrvpPjx90FaYRTo+YqubzyvHgdD7j3Ty8YtLUOFRnHvVSuVdcdCqNcqpMGXJQyuUSuShdcphWV1i5lYsKei0nqHEH9lR0ai4vn9lSZZC7VOpVKurdU7qnXQGBdymnodTzPHclaunToLTntJkBj892VqpVHdkqS+qQAFWru7KBjeDntFEL7YIZhU5tiiV+CW6BEANu2S1D6DUVcJahrBDiEF7CyWFsLZWgiA1cVMrHO5An2QK4pkU+sfuYyt3hx0/gR97MwLTsQQli/xFtesaDdWUYznhnOsDwA91DySqfZaLcz0DX0nZgGiSSB5uIaB7qb7O6lXfTj4XgeUfsi2CUQ+sHv0ZSBq1CeAbq0eon/pV+0tRWrdZ87g5097Xae6h5V2s9nT/AB3099DNhLJYO8f3RgiAqOFW+Qlo2EwpsXuDSpPqNyyxpIzaCe9dcfrrOa3/AGPOelF0aty8jVrP9On4j4z/AN0jySZeHrLgDgxvuf2Hujhcc0kk/GZO513PqUDsG53vqfM8x4AwPolFDrNGN8z9EvXb4uAe6Cj9w+GgcuenFLl805s519o2CxhgZ26bhzaR7IUwl1OiziWgnwAAV7CnHJI2mCJ490qphTg5/cwEDwBJn0hYxeux93kI9ELrNhE6mpVO6ZoUDFYKexr9XUpv4B2V39D9J8iAVVYVjhLSOY99wmQGejuOhVG4cp6Ly5jXH7zWn1aCqlw5WJsH3JQyuVfuHIbXKKFZBK2uMy0iKO1B6y5lwgLFikyqBzMLqP2AHiQrLOir37vA8IW1iyCyxS6DtPxOJ80x4PgLLcQ3ZaWJgBd1o12/BSC0byWLEQMkp2rW7BT9UCsWLABWIUw06IHWEPWLEvyN8HZXKxYizHYCX7nDKVB00wRnBc8kucSRAnXuWLFOvQ0+yS2GW2BM/wDyKkvj/wDFoLyz0YB5ppwmzLBr8WUOdG2Z2pj0W1iiltrf8Ot9ePoYLBm5QvpmYtakfh9C4LFi6P8Aycz9nll47K1zuTHR6BVsOohjQANgO9YsUzE1+7SOP5ITiDYbHMj2hYsQRjqxu8lCp8wIDfF0NBWYKIfVHyloHmAsWImCLTJUNyNCsWIGBTtCuwVixFAZ6xglJtW2pPjem0HxaMp9wuLvDGlYsXRPokxdv8NjYpdvKRasWLAZRlYsWIin/9k=',
    textMessage: 'We hope you love the product making...',
    time: 'June 12, 2023',
    online: false,
  },
  {
    id: 6,
    name: 'Key Totleben',
    userName: '@key',
    profilePic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWJhYf8YJC8vIGrRT1USlzp5uGnOGJzxFVQ&usqp=CAU',
    textMessage: 'We hope you love the product making...',
    time: 'June 12, 2023',
    online: true,
  },
  {
    id: 7,
    name: 'Maria Trofimova',
    userName: '@maria',
    profilePic:
      'data:image/jpeg;base64,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',
    textMessage: 'We hope you love the product making...',
    time: 'June 12, 2023',
    online: true,
  },
  {
    id: 8,
    name: 'Key Totleben',
    userName: '@key',
    profilePic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWJhYf8YJC8vIGrRT1USlzp5uGnOGJzxFVQ&usqp=CAU',
    textMessage: 'We hope you love the product making...',
    time: 'June 12, 2023',
    online: true,
  },
];
