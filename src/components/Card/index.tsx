import { Text } from '../Text';

import { card } from '../../types/card';

import { useTheme } from 'styled-components';

import { Ionicons } from '@expo/vector-icons';

import { priceFormat } from '../../utils/priceFormat';

import imgImageNotFound from '../../assets/imgNf.png';

import { Image, Container, InfoContainer, ContainerText } from './styles';

export function Card({ imageSource, comment, location, price }: card) {
  const { COLORS } = useTheme();

  const img = imageSource ? { uri: imageSource } : imgImageNotFound;

  return (
    <Container>
      <Image source={img} />

      <InfoContainer>
        <ContainerText>
          <Ionicons
            size={24}
            name="location-outline"
            color={COLORS.ORANGE_100}
          />

          <Text weight="700">{location}</Text>
        </ContainerText>

        <ContainerText>
          <Ionicons color={COLORS.GRAY_300} name="chatbox-outline" size={24} />

          <Text>{comment}</Text>
        </ContainerText>

        <ContainerText>
          <Ionicons color="green" name="cash-outline" size={24} />

          <Text weight="700">{priceFormat(Number(price))}</Text>
        </ContainerText>
      </InfoContainer>
    </Container>
  );
}
