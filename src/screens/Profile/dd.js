import React, {useState, useRef} from 'react';
import { Button, StyleSheet, View} from 'react-native';
import { CropView } from 'react-native-image-crop-tools';

export default function app() {
  const [uri, setUri] = useState("https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000");
  const cropViewRef = useRef();
  let options = {
    mediaType: 'photo',
    quality: 1,
  };
  return (
    <>
      <View style={styles.container}>
     
        {uri !== undefined && <CropView
          sourceUrl={uri}
          style={styles.cropView}
          ref={cropViewRef}
          onImageCrop={(res) => console.log(res)}
          keepAspectRatio
          aspectRatio={{ width: 16, height: 9 }}
        />}
        <Button
          title={'Get Cropped View'}
          onPress={() => {
            cropViewRef.current.saveImage(true, 100);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cropView: {
    flex: 1,
    backgroundColor: '#000'
  },
});