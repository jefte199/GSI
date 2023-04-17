import { Container, Image, InfoContainer, Title, Location, Price } from "./styles";
import { card } from '../../types/card';

export function Card({ imageSource, title, location, price }: card) {
  return (
    <Container>
      <Image source={imageSource} />
      <InfoContainer>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <Price>{price}</Price>
      </InfoContainer>
    </Container>
  );
}
