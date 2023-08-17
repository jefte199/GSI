import * as ImageManipulator from 'expo-image-manipulator';

export async function resizeImage(image?: string) {
  if (!image) image = '';

  try {
    const resizedImage = await ImageManipulator.manipulateAsync(
      image,
      [{ resize: { width: 600, height: 600 } }],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
    );

    return resizedImage.uri;
  } catch (error) {
    console.log(error);
  }
}
