import { Container, Image, InfoContainer, Comment, Location, Price } from "./styles";
import { card } from '../../types/card';
const imgImageNotFound = require('../../assets/imgNf.png');

export function Card({ imageSource, comment, location, price }: card) {
  return (
    <Container>
      <Image source={imageSource || imgImageNotFound} />
      <InfoContainer>
        <Location>{location}</Location>
        <Comment>{comment}</Comment>
        <Price>{price}</Price>
      </InfoContainer>
    </Container>
  );
}
