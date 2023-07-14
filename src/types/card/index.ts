import { ImageSourcePropType } from 'react-native';

export interface card {
  imageSource: ImageSourcePropType;
  comment: string;
  location: string;
  price: string;
}