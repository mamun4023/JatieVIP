import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/AddProfilePicture/AddProfilePhoto.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { ms, vs } from 'react-native-size-matters';
import { Logo } from '@/assets';
import { TextStyles, theme } from '@/theme';
import { navigationRef } from '@/navigation/RootNavigation';
import { NAVIGATION } from '@/constants';
import { AuthHeader } from '@/components/AuthHeader';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ImageCropPicker from 'react-native-image-crop-picker';
import Modal from 'react-native-modal';
import { settingsIcon } from '@/assets';
import { close } from '@/assets';
export function AddProfilePicture() {
  const { colors } = useTheme();
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState();
  const [profilePicture, setProfilePicture] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );
  const closeModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleSubmit = () => {
    navigationRef.navigate(NAVIGATION.adjustPicture);
  };
  const OpenGallery = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      setModalVisible(!isModalVisible);
    });
  };
  const OpenCamera = () => {
    ImageCropPicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('uploaded image--->', image);
      setModalVisible(!isModalVisible);
      setImage(image.path);
    });
  };

  const RemovePic = () => {
    setImage(!imag);
  };
  return (
    <View style={styles.container}>
      <AuthHeader title={strings.addYourProfilePicture.title} />

      <ErrorView errors={errors} />
      <View style={styles.mainView}>
        <View style={styles.formContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.img} />
          ) : (
            <FontAwesomeIcon icon={faUser} size={65} color={colors.white} />
          )}
        </View>
        {!image ? (
          <Button
            onPress={toggleModal}
            style={styles.submitButton}
            title={
              isLoading
                ? strings.common.loading
                : strings.addYourProfilePicture.upload
            }
          />
        ) : (
          <View style={{ flexDirection: 'row' }}>
            <Button
              onPress={RemovePic}
              style={styles.replaceRemoveButton}
              title={
                isLoading
                  ? strings.common.loading
                  : strings.addYourProfilePicture.remove
              }
            />

            <Button
              onPress={toggleModal}
              style={styles.replaceRemoveButton}
              title={
                isLoading
                  ? strings.common.loading
                  : strings.addYourProfilePicture.replace
              }
            />
          </View>
        )}
      </View>
      <View style={styles.bottomButtons}>
        <Button
          // onPress={handleSubmit}
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.Finish
          }
        />
        <Button
          style={styles.skipButton}
          textStyle={styles.skipButtonText}
          title={
            isLoading
              ? strings.common.loading
              : strings.addYourProfilePicture.skip
          }
        />
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalBackground}>
            <TouchableOpacity onPress={closeModal}>
              <View style={styles.closeView}>
                <Image source={close} style={styles.closeIcon} />
              </View>
            </TouchableOpacity>
            <Button
              title={strings.addYourProfilePicture.uploadFromCamera}
              onPress={OpenCamera}
            />
            <View style={{ marginTop: vs(20) }}>
              <Button
                title={strings.addYourProfilePicture.uploadFromGallery}
                onPress={OpenGallery}
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
