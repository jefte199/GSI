import { Text } from '../Text';

import { card } from '../../types/card';

import { useTheme } from 'styled-components/native';

import { priceFormat } from '../../util/priceFormat';

import imgImageNotFound from '../../assets/imgNf.png';

import { Image, Container, InfoContainer } from './styles';

export function Card({ imageSource, comment, location, price }: card) {
  const { COLORS } = useTheme();

  return (
    <Container>
      <Image source={imageSource || imgImageNotFound} />

      <InfoContainer>
        <Text size={18} weight="700">
          {location}
        </Text>

        <Text size={14} color="#888">
          {comment}
        </Text>

        <Text color={COLORS.GREEN_700} weight="700">
          R$ {priceFormat(Number(price))}
        </Text>
      </InfoContainer>
    </Container>
  );
}
