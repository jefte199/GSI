import { useState } from 'react';

import imageNotFound from '../../assets/imgNf.png';

import {
  Dimensions,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';

import {
  Image,
  Container,
  Indicator,
  ImageNotFound,
  ImageContainer,
  IndicatorsContainer,
} from './styles';

interface Props {
  images: string[];
  onGetImageToShare?: (image: string) => void;
}

export function ImageCarousel({ images, onGetImageToShare }: Props) {
  const screenWidth = Dimensions.get('window').width;

  const adjustingImageWidth = screenWidth - 48;

  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / adjustingImageWidth);

    setCurrentIndex(index);
    if (onGetImageToShare) onGetImageToShare(images[index]);
  };

  return (
    <>
      {!images.length ? (
        <ImageNotFound source={imageNotFound} />
      ) : (
        <Container>
          <ScrollView
            horizontal
            pagingEnabled
            onScroll={onScroll}
            showsHorizontalScrollIndicator={false}
          >
            {images.map((image: string) => (
              <ImageContainer width={adjustingImageWidth} key={image}>
                <Image resizeMode="cover" source={{ uri: image }} />
              </ImageContainer>
            ))}
          </ScrollView>

          <IndicatorsContainer>
            {images.map((image, index) => (
              <Indicator key={image} isCurrentImage={currentIndex === index} />
            ))}
          </IndicatorsContainer>
        </Container>
      )}
    </>
  );
}
