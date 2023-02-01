import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { TextStyles, theme } from '@/theme';
import {
  HorizontalLine,
  Icon,
  ModalDown,
  TopBackButton,
  ModalList,
  AppImageViewer,
} from '@/components';
import { faBell, faEye } from '@fortawesome/free-regular-svg-icons';
import { ms, vs } from 'react-native-size-matters';
import { FontFamily } from '@/theme/Fonts';
import { strings } from '@/localization';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBellSlash,
  faBoxArchive,
  faEllipsis,
  faFlag,
  faImage,
  faPaperPlane,
  faSearch,
  faTrash,
  faUserGroup,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import ImageCropPicker from 'react-native-image-crop-picker';
import { NAVIGATION } from '@/constants';

let nextId = 0;

export default function AdminGroupChat({ navigation, route }) {
  const [openCrud, setOpenCrud] = useState(false);
  const [imageItem, setImageItem] = useState(200);
  const [imageArray, setImageArray] = useState([]);
  const [isImageList, setImageList] = useState(false);
  const [showImageView, setShowImageView] = useState(false);
  const [feedImages, setFeedImages] = useState([]);

  let paramName = route.params.paramName;
  let paramIcon = route.params.paramIcon;

  let size;

  deleteFile = id => {
    setImageArray(imageArray.filter(a => a.id !== id));
    imageArray.length == 1 ? setImageList(false) : setImageList(true);
  };
  const imageCountSize = height => {
    setImageItem(height);
  };
  const UploadImages = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      multiple: true,
    })
      .then(images => {
        images.forEach(item => {
          imageArray.push({
            id: nextId++,
            image: item.path,
          });
          setImageList(false);
          setImageList(true);
        });
      })
      .catch(e => {
        console.log('Error: ' + e);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <TopBackButton
            onPress={() => navigation.goBack()}
            style={{ paddingLeft: ms(10) }}
          />
        </View>
        <View style={styles.headerIconContainer}>
          <Icon icon={faSearch} size={ms(22)} style={styles.searchIcon} />
          <Icon icon={faBell} size={ms(22)} style={styles.bellIcon} />
        </View>
      </View>
      <View style={styles.userContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.iconContainer}>
            <Icon icon={paramIcon} size={ms(22)} style={styles.iconDesign} />
          </View>
          <View style={styles.userNameTxtContainer}>
            <Text style={styles.fullnameTxt}> {paramName} </Text>

            {paramName == strings.message.birthDaysToday ? (
              <TouchableOpacity
                onPress={() => navigation.navigate(NAVIGATION.birthDayToday)}
              >
                <View style={styles.bdayUsersContainer}>
                  <Text style={styles.bdayUsersText}>
                    {strings.message.birthdayUsers}
                  </Text>
                  <Icon icon={faEye} size={ms(14)} style={styles.eyeIcon} />
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View>
          <Icon icon={faEllipsis} size={ms(14)} />
        </View>
      </View>
      <HorizontalLine />

      <View style={styles.messageBody}>
        <FlatList
          data={Data.messaging.conversation}
          keyExtractor={item => item.messageId}
          contentContainerStyle={{ paddingBottom: ms(50) }}
          renderItem={({ item }) => (
            <View style={{ margin: ms(10) }}>
              {item.Time.length > 0 ? (
                <View style={styles.timeContainer}>
                  <Text style={styles.timeTxt}> {item.Time}</Text>
                </View>
              ) : null}
              {/* only Text sending */}

              {item.sendingTxt.length > 0 ? (
                <View style={styles.messageContainer}>
                  <TouchableOpacity
                    style={styles.messageTxtContainer}
                    onLongPress={() => setOpenCrud(true)}
                  >
                    <Text style={styles.messageTxt}>{item.sendingTxt} </Text>
                  </TouchableOpacity>
                  <View>
                    <Image
                      source={{
                        uri: Data.messaging.profilePic,
                      }}
                      style={styles.messageWithImage}
                    />
                  </View>
                </View>
              ) : null}

              {/*  only images sending */}

              {item.sendingImages.length > 0 ? (
                <View style={styles.messageContainer}>
                  {item.sendingImages.length == 1
                    ? imageCountSize(200)
                    : item.sendingImages.length == 2
                    ? imageCountSize(140)
                    : item.sendingImages.length >= 3
                    ? imageCountSize(100)
                    : null}

                  {item.sendingImages.length <= 3 ? (
                    <View style={styles.imageContainer}>
                      {item?.sendingImages?.mapmap(data => (
                        <Image
                          source={{
                            uri: data.url,
                          }}
                          key={data.id}
                          style={[
                            styles.image,
                            {
                              height: ms(imageItem),
                              // height: ms(100),
                            },
                          ]}
                        />
                      ))}
                    </View>
                  ) : item.sendingImages.length > 3 ? (
                    <View style={styles.imageContainer}>
                      {item?.sendingImages?.map(data =>
                        data.id <= 2 ? (
                          <Image
                            source={{
                              uri: data.url,
                            }}
                            key={data.id}
                            style={[
                              styles.image,
                              {
                                height: ms(100),
                              },
                            ]}
                          />
                        ) : data.id == 3 ? (
                          <ImageBackground
                            source={{
                              uri: data.url,
                            }}
                            key={data.id}
                            style={[
                              styles.image,
                              {
                                height: ms(100),
                                backgroundColor: theme.light.colors.hyperlink,
                                opacity: 0.7,
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                width: '100%',
                              },
                            ]}
                          >
                            <TouchableOpacity
                              onPress={() => {
                                setShowImageView(true),
                                  setFeedImages(item.sendingImages);
                              }}
                            >
                              <Text
                                style={{
                                  color: theme.light.colors.white,
                                  fontFamily:
                                    FontFamily.BrandonGrotesque_regular,
                                  fontSize: ms(24, 0.3),
                                  width: '100%',
                                  padding: ms(35),
                                }}
                              >
                                {strings.message.plus}
                                {item.sendingImages.length - 2}
                              </Text>
                            </TouchableOpacity>
                          </ImageBackground>
                        ) : null
                      )}
                    </View>
                  ) : null}
                  <View>
                    <Image
                      source={{
                        uri: Data.messaging.profilePic,
                      }}
                      style={styles.messageWithImage}
                    />
                  </View>
                </View>
              ) : null}

              {item.replyingTxt.length > 0 ? (
                <View style={styles.replyContainer}>
                  <Text
                    style={[
                      styles.messageTxt,
                      { color: theme.light.colors.black },
                    ]}
                  >
                    {item.replyingTxt}
                  </Text>
                </View>
              ) : null}
            </View>
          )}
        />
        <View>
          {isImageList == false ? null : FileUpload(imageArray)}
          <View style={styles.txtInputContainer}>
            <TextInput
              placeholder={strings.message.typeYourmessageHere}
              style={styles.inputBox}
            ></TextInput>
            <View style={styles.inputBoxIconContainer}>
              <TouchableOpacity
                style={[
                  styles.boxIcon,
                  { backgroundColor: theme.light.colors.successBgLight },
                ]}
                onPress={UploadImages}
              >
                <FontAwesomeIcon
                  icon={faImage}
                  size={ms(16)}
                  color={theme.light.colors.success}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.boxIcon,
                  { backgroundColor: theme.light.colors.primaryBgLight },
                ]}
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  size={ms(16)}
                  color={theme.light.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/*  image view modal */}
      {showImageView && (
        <AppImageViewer
          visible={showImageView}
          setVisible={() => setShowImageView(false)}
          images={feedImages}
        />
      )}

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
            title={strings.message.snoozeNotification}
            icon={faTrash}
            iconColor={theme.light.colors.error}
            iconBg={theme.light.colors.infoBgLight}
          />
          <HorizontalLine color={theme.light.colors.infoBgLight} />
          <ModalList
            title={strings.operations.report}
            icon={faFlag}
            iconColor={theme.light.colors.secondary}
            iconBg={theme.light.colors.infoBgLight}
            onPress={() => {
              // setOpenReport(true)
              // setOpen(false)
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

export const FileUpload = imageArray => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.BottomContainer}
    >
      {imageArray ? (
        <View style={styles.BottomFileContainer}>
          <View style={styles.FileContainer}>
            {imageArray.map(item => {
              if (item == null) {
                return;
              } else {
                return item.image ? (
                  <View style={styles.fileSpacing} key={item.id}>
                    <Image
                      style={styles.thumbnail}
                      source={{ uri: item.image }}
                    />
                    <View style={styles.minus}>
                      <Text
                        style={[styles.minusTxt]}
                        onPress={() => {
                          deleteFile(item.id);
                        }}
                      >
                        {strings.giveaway.minus}
                      </Text>
                    </View>
                  </View>
                ) : null;
              }
            })}
          </View>
        </View>
      ) : null}
    </ScrollView>
  );
};

const Data = {
  id: 1,
  name: strings.message.toEveryOne,
  icon: faUserGroup,
  messaging: {
    userId: 1,
    name: 'Jatie VIP',
    profilePic:
      'https://res.cloudinary.com/hawktech-cloud/image/upload/v1674712476/d24dae39-1a64-47d5-af65-e14b5a1c533c_tmcsua.png',
    conversation: [
      {
        messageId: 1,
        Time: 'July 23, 2022 . 11:23AM',
        sendingTxt:
          'Fernando Garibay. It is taken from her third extended play, The Fame Moster (2009)',
        sendingImages: [],
        replyingTxt: '',
        replyImages: [],
      },
    ],
  },
  id: 2,
  name: strings.message.toEveryOne,
  icon: faUserGroup,
  messaging: {
    userId: 1,
    name: 'Jatie VIP',
    profilePic:
      'https://res.cloudinary.com/hawktech-cloud/image/upload/v1674712476/d24dae39-1a64-47d5-af65-e14b5a1c533c_tmcsua.png',
    conversation: [
      {
        messageId: 1,
        Time: 'July 23, 2022 . 11:23AM',
        sendingTxt:
          'Fernando Garibay. It is taken from her third extended play, The Fame Moster (2009)',
        sendingImages: [],
        replyingTxt: '',
        replyImages: [],
      },
    ],
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: ms(10),
    paddingRight: ms(3),
  },
  headerIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellIcon: {
    marginRight: ms(9),
  },
  searchIcon: {
    marginRight: ms(9),
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: ms(10),
    marginRight: ms(5),
    marginLeft: ms(5),
    alignItems: 'center',
  },
  userNameTxtContainer: {
    padding: ms(2),
    flexDirection: 'column',
    justifyContent: 'center',
  },
  fullnameTxt: {
    fontFamily: FontFamily.Recoleta_bold,
    fontSize: ms(15, 0.3),
    color: theme.light.colors.black,
    // padding: ms(10),
    paddingLeft: ms(5),
  },
  messageBody: {
    flex: 1,
    backgroundColor: theme.light.colors.primaryBgLight,
  },

  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageTxtContainer: {
    width: '85%',
    backgroundColor: theme.light.colors.primary,
    borderRadius: 10,
    padding: ms(10),
  },
  messageTxt: {
    fontFamily: FontFamily.BrandonGrotesque_regular,
    fontSize: ms(16, 0.3),
    color: theme.light.colors.white,
  },
  messageWithImage: {
    height: ms(40),
    width: ms(40),
    borderRadius: 100,
    position: 'absolute',
    bottom: 0,
    right: ms(3),
  },
  replyContainer: {
    backgroundColor: theme.light.colors.white,
    borderRadius: 10,
    marginTop: vs(10),
    width: '90%',
    padding: ms(8),
    marginLeft: '10%',
  },
  txtInputContainer: {
    backgroundColor: theme.light.colors.white,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
  },
  inputBox: {
    fontFamily: FontFamily.BrandonGrotesque_regular,
    fontSize: ms(16, 0.4),
    paddingRight: ms(90),
    paddingLeft: ms(9),
  },
  inputBoxIconContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    position: 'absolute',
    right: ms(8),
    top: ms(3),
  },
  boxIcon: {
    margin: ms(5),
    borderRadius: 100,
    padding: ms(8),
  },

  // birthday users

  bdayUsersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: ms(10),
    justifyContent: 'space-between',
    backgroundColor: theme.light.colors.infoBgLight,
    borderRadius: 5,
    paddingRight: ms(10),
    paddingLeft: ms(10),
    marginRight: ms(35),
    paddingTop: ms(2),
    paddingBottom: ms(2),
  },
  bdayUsersText: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
    color: theme.light.colors.info,
    fontSize: ms(12, 0.3),
  },
  eyeIcon: {
    color: theme.light.colors.info,
  },

  // timeTax
  timeContainer: {
    alignItems: 'center',
  },
  timeTxt: {
    fontFamily: FontFamily.BrandonGrotesque_regular,
    padding: 10,
  },

  //single image container

  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: ms(40),
    justifyContent: 'space-between',
    marginRight: ms(8),
  },
  image: {
    flex: 1,
    width: '85%',
    height: ms(200),
    borderRadius: 10,
    marginTop: ms(10),
    marginRight: ms(10),
    // resizeMode: 'contain',
  },

  //BottomLAyout of file contant

  BottomContainer: {
    borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: theme.light.colors.infoBgLight,
    backgroundColor: theme.light.colors.white,
  },
  BottomFileContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginBottom: vs(50),
    paddingTop: ms(10),
    position: 'relative',
  },
  fileSpacing: {
    padding: 10,
  },
  FileContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginLeft: ms(10),
    marginRight: ms(15),
    height: ms(110),
    alignItems: 'center',
  },
  thumbnail: {
    flex: 1,
    maxWidth: ms(80),
    minWidth: ms(80),
    height: vs(80),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.light.colors.infoBgLight,
    backgroundColor: theme.light.colors.inputFiled,
    // resizeMode: 'contain',
  },

  // - circle

  minus: {
    width: ms(30),
    height: ms(30),
    backgroundColor: theme.light.colors.userBackgroundColor,
    borderRadius: 50,
    position: 'absolute',
    marginLeft: ms(65),
    top: 0,
  },
  minusTxt: {
    fontFamily: FontFamily.Recoleta_bold,
    color: theme.light.colors.primary,
    fontSize: ms(23, 0.3),
    textAlign: 'center',
  },

  // Admin Icon

  iconContainer: {
    height: ms(40),
    width: ms(40),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.light.colors.primaryBg,
  },
  iconDesign: {
    color: theme.light.colors.primary,
  },
});
