import { Loading } from '../Loading';

import { useEffect, useRef, useState } from 'react';

import { resizeImage } from '../../utils/resizeImage';

import { FontAwesome } from '@expo/vector-icons';
import { CameraType, Camera as ExpoCamera } from 'expo-camera';

import { Modal, StyleSheet, TouchableOpacity } from 'react-native';

import {
  SnapButton,
  PicturePreview,
  CameraContainer,
  PictureContainer,
  ActionsContainer,
} from './styles';

interface TakePictureAsync {
  takePictureAsync: () => Promise<{
    uri: string;
    width: number;
    height: number;
  }>;
}

interface Props {
  showCamera: boolean;
  onRequestClose: () => void;
  onCapturedImage: (images: string) => void;
}

export function Camera(props: Props) {
  const { showCamera, onCapturedImage, onRequestClose } = props;

  const cameraRef = useRef<TakePictureAsync | null>(null);

  const [isPermission, setIsPermission] = useState(false);
  const [isTakingPhoto, setIsTakingPhoto] = useState(false);

  const [imageUri, setImageUri] = useState('');

  const onTakePictureAsync = async () => {
    if (!cameraRef.current) return;

    setTimeout(() => setIsTakingPhoto(true), 100);

    const { uri } = await cameraRef.current.takePictureAsync();

    const resizedImage = await resizeImage(uri);
    setImageUri(resizedImage ?? '');

    setIsTakingPhoto(false);
  };

  const onConfirm = () => {
    onCapturedImage(imageUri);

    onRequestClose();
    setImageUri('');
  };

  const onCancel = () => {
    setImageUri('');
  };

  const { getCameraPermissionsAsync, requestCameraPermissionsAsync } =
    ExpoCamera;

  const getCameraPermissions = async () => {
    try {
      const existingCameraPermissions = await getCameraPermissionsAsync();
      return existingCameraPermissions.status === 'granted';
    } catch (error) {
      console.error('Error while checking camera permissions:', error);
      return false;
    }
  };

  const requestCameraPermissions = async () => {
    try {
      const { status } = await requestCameraPermissionsAsync();
      return status === 'granted';
    } catch (error) {
      console.error('Error while requesting camera permissions:', error);
      return false;
    }
  };

  const handlePermission = async () => {
    const hasExistingPermission = await getCameraPermissions();
    if (hasExistingPermission) {
      setIsPermission(true);
    } else {
      const granted = await requestCameraPermissions();
      setIsPermission(granted);
    }
  };

  useEffect(() => {
    setImageUri('');
    handlePermission();
  }, []);

  if (!isPermission) return null;

  return (
    <Modal visible={showCamera} onRequestClose={onRequestClose}>
      <CameraContainer>
        {!imageUri && (
          <ExpoCamera
            type={CameraType.back}
            ref={cameraRef as never}
            style={StyleSheet.absoluteFillObject}
          />
        )}

        {imageUri && (
          <PictureContainer>
            <PicturePreview
              resizeMode="cover"
              resizeMethod="scale"
              source={{ uri: imageUri }}
            />
          </PictureContainer>
        )}

        {imageUri && (
          <ActionsContainer>
            <TouchableOpacity onPress={onConfirm}>
              <FontAwesome name="check-circle" size={38} color="green" />
            </TouchableOpacity>

            <TouchableOpacity onPress={onCancel}>
              <FontAwesome name="times-circle" size={38} color="red" />
            </TouchableOpacity>
          </ActionsContainer>
        )}

        {!imageUri && (
          <SnapButton
            activeOpacity={0.1}
            disabled={isTakingPhoto}
            onPress={onTakePictureAsync}
          >
            {isTakingPhoto ? (
              <Loading color="#fff" />
            ) : (
              <FontAwesome color={'#fff'} name="camera" size={32} />
            )}
          </SnapButton>
        )}
      </CameraContainer>
    </Modal>
  );
}
