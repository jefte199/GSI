import { Container, Image, InfoContainer, Title, Location, Price } from "./styles";
import { card } from '../../types/card';
const imgImageNotFound = require('../../assets/imgNf.png');

export function Card({ imageSource, title, location, price }: card) {
  return (
    <Container>
      <Image source={imageSource || imgImageNotFound} />
      <InfoContainer>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <Price>{price}</Price>
      </InfoContainer>
    </Container>
  );
}
