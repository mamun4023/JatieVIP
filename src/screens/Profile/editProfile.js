import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { theme, TextStyles } from '@/theme';
import { FontFamily } from '@/theme/Fonts';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faClose } from '@fortawesome/free-solid-svg-icons';
import { Icon, HorizontalLine, PopUp, Button } from '@/components';
import DatePicker from 'react-native-date-picker';
import Moment from 'moment';
import DropDownPicker from 'react-native-dropdown-picker';
import { TopBackButton } from '@/components';
import { ms, s, vs } from 'react-native-size-matters';
import { strings } from '@/localization';
import ImagePicker from 'react-native-image-crop-picker';

export default function EditProfile({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [subscriptionPopup, setSubscriptionPopup] = useState(false);
  const [openReplace, setReplace] = useState(false);
  const [genderListOpen, setGenderListOpen] = useState(false);
  const [genderValue, setGenderValue] = useState(null);
  const [gender, setGender] = useState([
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ]);
  const [locationListOpen, setLocationListOpen] = useState(false);
  const [locationValue, setLocationValue] = useState(null);
  const [location, setLocation] = useState([
    { label: 'United State', value: 'United State' },
    { label: 'United kingdom', value: 'United kingdom' },
    { label: 'Australia', value: 'Australia' },
  ]);
  const [closeAccount, setCloseAccount] = useState(false);
  const [replageImage, setReplageImage] = useState(
    'https://t4.ftcdn.net/jpg/00/88/53/89/360_F_88538986_5Bi4eJ667pocsO3BIlbN4fHKz8yUFSuA.jpg'
  );

  const [name, setName] = useState('Adam Voigt');
  const [email, setEmail] = useState('adam@gmail.com');
  const [loginPhone, setLoginPhone] = useState('84584566644');

  const PickFromCamera = () => {
    ImagePicker.openCamera({
      width: ms(300),
      height: ms(400),
      cropping: true,
    }).then(image => {
      console.log(image);
      setReplace(image.path);
    });
  };

  const SelectFromGallery = () => {
    ImagePicker.openPicker({
      width: ms(300),
      height: ms(400),
      cropping: true,
      freeStyleCropEnabled: true,
      cropperCircleOverlay: true,
    }).then(image => {
      console.log(image);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBackButton
        onPress={() => navigation.goBack()}
        style={styles.TopBackButton}
      />
      <Text style={[styles.headerText, TextStyles.header]}>
        {strings.profile.editProfile}{' '}
      </Text>
      <HorizontalLine color={theme.light.colors.infoBgLight} />

      <ScrollView style={styles.ScrollView}>
        <Text style={styles.profileTxt}>{strings.profile.profilePic}</Text>
        <View style={styles.ScrollViewContainer}>
          <View>
            <Image
              source={{
                uri: replageImage,
              }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.buttonAddProfile}>
            <Button
              title={strings.addYourProfilePicture.replace}
              style={styles.replaceBtn}
              onPress={() => setReplace(true)}
            />
            <Button
              title={strings.addYourProfilePicture.remove}
              style={styles.removeBtn}
              textStyle={{
                color: theme.light.colors.primary,
              }}
            />
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.textFiledContainer}>
            <Text style={styles.textFieldLebel}>
              {' '}
              {strings.SignUp.yourName}{' '}
            </Text>
            <TextInput
              style={styles.textFiled}
              value={name}
              onChangeText={val => setName(val)}
            />
          </View>
          <View style={styles.textFiledContainer}>
            <Text style={styles.textFieldLebel}> {strings.SignUp.email} </Text>
            <TextInput
              style={styles.textFiled}
              value={email}
              onChangeText={val => setEmail(val)}
            />
          </View>
          <View style={styles.textFiledContainer}>
            <Text style={styles.textFieldLebel}>
              {' '}
              {strings.SignUp.birthday}{' '}
            </Text>
            <TextInput
              style={styles.textFiled}
              selectTextOnFocus={false}
              editable={false}
              value={Moment(date).format('DD-MM-YYYY')}
            />
            <View style={styles.CalendarIcon}>
              <Icon
                icon={faCalendar}
                color={theme.light.colors.info}
                onPress={() => setOpenDatePicker(true)}
              />
            </View>
            <DatePicker
              modal
              mode="date"
              open={openDatePicker}
              // locale = "fr"
              date={date}
              onConfirm={date => {
                setOpenDatePicker(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpenDatePicker(false);
              }}
            />
          </View>
          <View style={styles.textFiledContainer}>
            <Text style={styles.textFieldLebel}> {strings.SignUp.gender} </Text>
            <DropDownPicker
              placeholder={strings.SignUp.genderPlaceHolder}
              open={genderListOpen}
              value={genderValue}
              items={gender}
              setOpen={setGenderListOpen}
              setValue={setGenderValue}
              setItems={setGender}
              style={styles.textFiled}
              textStyle={styles.dropListTxt}
            />
          </View>

          <View style={styles.textFiledContainer}>
            <Text style={styles.textFieldLebel}>
              {' '}
              {strings.SignUp.country}{' '}
            </Text>
            <DropDownPicker
              placeholder={strings.SignUp.countryPlaceHolder}
              open={locationListOpen}
              value={locationValue}
              items={location}
              setOpen={setLocationListOpen}
              setValue={setLocationValue}
              setItems={setLocation}
              style={styles.textFiled}
              textStyle={styles.dropListTxt}
            />
          </View>
          <View style={styles.textFiledContainer}>
            <Text style={styles.textFieldLebel}>
              {' '}
              {strings.SignUp.loginPhone}{' '}
            </Text>
            <TextInput
              style={styles.textFiled}
              value={loginPhone}
              onChangeText={val => setLoginPhone(val)}
            />
            <Text style={styles.dropListTxt}>
              {' '}
              {strings.SignUp.loginFormBottomTxt}
            </Text>
          </View>
          <View style={styles.marginTop} />
          <HorizontalLine color={theme.light.colors.infoBgLight} />
          <View>
            <Button title={strings.operations.save} />
          </View>
          <View style={styles.closeMyAccountButtonContainer}>
            <Button
              title={strings.profile.closeMyAccount}
              style={styles.closeMyAccountButton}
              textStyle={{
                color: theme.light.colors.primary,
              }}
              onPress={() => setOpenPopUp(true)}
            />
          </View>
        </View>
        {closeAccount && (
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomTextLebel}>
              {' '}
              {strings.profile.closeWarning}{' '}
            </Text>
            <TouchableOpacity onPress={() => setSubscriptionPopup(true)}>
              <Text style={styles.bottomTextLink}>
                {' '}
                {strings.profile.manageSubscription}{' '}
              </Text>
            </TouchableOpacity>

            {/* Pop up message */}
            <PopUp open={subscriptionPopup} setOpen={setSubscriptionPopup}>
              <TouchableOpacity
                onPress={() => setSubscriptionPopup(false)}
                style={styles.popUpContainer}
              >
                <FontAwesomeIcon
                  icon={faClose}
                  size={ms(30)}
                  color={theme.light.colors.primary}
                />
              </TouchableOpacity>
              <Text style={[styles.errorTxt, styles.errorTxtColor]}>
                {' '}
                {strings.profile.cancelSubscription}{' '}
              </Text>
              <View style={styles.ruleContainer}>
                <Text style={styles.errorTxt}>{strings.profile.rule1}</Text>
                <Text style={styles.errorTxt}>{strings.profile.rule2} </Text>
                <Text style={styles.errorTxt}>{strings.profile.rule3} </Text>
              </View>
              <Button title={strings.operations.ok} />
            </PopUp>
          </View>
        )}

        <View style={styles.marginBottom50} />
      </ScrollView>

      <PopUp open={openPopUp} setOpen={setOpenPopUp}>
        <TouchableOpacity
          onPress={() => setOpenPopUp(false)}
          style={styles.popUpTouch}
        >
          <FontAwesomeIcon
            icon={faClose}
            size={30}
            color={theme.light.colors.primary}
          />
        </TouchableOpacity>
        <Text style={[TextStyles.label, styles.closeConfirm]}>
          {' '}
          {strings.profile.closeConfirm}{' '}
        </Text>
        <Button
          title={strings.operations.no}
          style={styles.noButton}
          onPress={() => setOpenPopUp(false)}
        />
        <Button
          title={strings.operations.yes}
          style={styles.yesButton}
          textStyle={{
            color: theme.light.colors.primary,
          }}
          onPress={() => {
            setCloseAccount(true);
            setOpenPopUp(false);
          }}
        />
      </PopUp>

      {/* Replace Popup */}
      {openReplace && (
        <PopUp open={openReplace} setOpen={setReplace}>
          <Button
            title={strings.operations.imageFromCamera}
            style={styles.imageFromCameraButton}
            onPress={PickFromCamera}
          />
          <Button
            title={strings.operations.imageFromGallery}
            style={styles.imageFromGalleryButton}
            onPress={SelectFromGallery}
          />
        </PopUp>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.light.colors.white,
  },
  header: {
    padding: ms(15),
  },
  headerIcon: {
    color: theme.light.colors.info,
  },
  TopBackButton: { paddingLeft: ms(10), paddingTop: ms(10) },
  headerText: {
    marginTop: vs(10),
    color: theme.light.colors.black,
    paddingLeft: ms(8),
  },
  marginTop: { marginTop: vs(50) },
  closeMyAccountButtonContainer: { marginTop: ms(10) },
  closeMyAccountButton: {
    backgroundColor: theme.light.colors.white,
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
  },
  ScrollView: {
    flex: 1,
    padding: 8,
  },
  ScrollViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileTxt: {
    fontFamily: FontFamily.Recoleta_bold,
    color: theme.light.colors.black,
  },
  profileImage: {
    width: s(100),
    height: s(100),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    marginTop: vs(10),
  },
  buttonAddProfile: { flexDirection: 'row' },
  formContainer: {
    marginTop: vs(20),
  },
  textFiledContainer: {},
  textFieldLebel: {
    color: theme.light.colors.black,
    fontFamily: FontFamily.BrandonGrotesque_bold,
    fontSize: ms(18, 0.3),
  },
  textFiled: {
    backgroundColor: theme.light.colors.inputFiled,
    borderRadius: 10,
    borderWidth: 0,
    padding: ms(10),
    height: vs(45),
    fontFamily: FontFamily.BrandonGrotesque_regular,
    marginBottom: vs(15),
  },
  CalendarIcon: {
    position: 'absolute',
    top: 42,
    right: 15,
  },
  replaceBtn: {
    width: '38%',
    marginLeft: ms(10),
    //IOS
    shadowOffset: { width: -2, height: 4 },
    shadowColor: theme.light.colors.secondary,
    shadowOpacity: 0.2,
    shadowRadius: 3,

    //android
    elevation: 5,
  },
  removeBtn: {
    width: '38%',
    marginLeft: ms(10),
    backgroundColor: theme.light.colors.white,
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
    //IOS
    shadowOffset: { width: -2, height: 4 },
    shadowColor: theme.light.colors.secondary,
    shadowOpacity: 0.2,
    shadowRadius: 3,

    //android
    elevation: 5,
  },
  replaceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.light.colors.primaryBg,
  },
  replaceContent: {
    backgroundColor: theme.light.colors.white,
    width: '100%',
    padding: ms(10),
  },

  dropListTxt: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
  },
  bottomTextContainer: {
    alignItems: 'center',
    padding: 10,
  },
  bottomTextLebel: {
    textAlign: 'center',
    fontFamily: FontFamily.BrandonGrotesque_medium,
    fontSize: 16,
  },
  bottomTextLink: {
    color: theme.light.colors.primary,
    textDecorationLine: 'underline',
    fontFamily: FontFamily.BrandonGrotesque_medium,
    fontSize: ms(20, 0.3),
  },
  popUpContainer: { padding: ms(20) },
  errorTxt: {
    fontFamily: FontFamily.BrandonGrotesque_medium,
    fontSize: ms(20, 0.3),
  },
  ruleContainer: {
    alignItems: 'flex-start',
  },
  marginBottom50: {
    marginBottom: ms(50),
  },
  popUpTouch: {
    padding: 20,
  },
  noButton: {
    marginTop: vs(20),
  },
  yesButton: {
    marginTop: vs(10),
    backgroundColor: theme.light.colors.white,
    borderWidth: 2,
    borderColor: theme.light.colors.primary,
  },
  imageFromCameraButton: {
    margin: ms(5),
  },
  imageFromGalleryButton: {
    margin: ms(5),
  },
  errorTxtColor: { color: theme.light.colors.black },
  closeConfirm: { textAlign: 'center' },
});
