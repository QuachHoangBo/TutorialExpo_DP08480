import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Alert, StyleSheet, Text } from 'react-native';
import ImagePicker, { ImagePickerResponse, OptionsCommon, CameraOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

const commonOptions: OptionsCommon = {
  mediaType: 'photo',
  maxWidth: 500,
  maxHeight: 500,
};

const DaNenTang2Bail = () => {
  const [images, setImages] = useState<ImagePickerResponse['assets'] | null>(null);
 
  const onOpenLibrary = async () => {
    const response: ImagePickerResponse = await launchImageLibrary(commonOptions);
    if (response?.assets) {
      setImages(response.assets);
    } else {
      Alert.alert('Có lỗi xảy ra', response.errorMessage);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: images?.[0]?.uri || 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png',
          }}
          style={styles.avatar}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onOpenLibrary}>
        <Text style={styles.buttonText}>Chọn ảnh từ thư viện</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatarContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
    overflow: 'hidden',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default DaNenTang2Bail;
