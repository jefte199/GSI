import { ImageSourcePropType } from 'react-native';

export interface Card {
  price: string;
  comment: string;
  location: string;
  imageSource: ImageSourcePropType | string;
}
